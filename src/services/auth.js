import { useContext, useState, createContext } from "react";
import { deleteCookie, setCookie } from "./utils";
import { loginRequest, getUserRequest, logoutRequest } from "./api";
import { useAppSelector } from "..";

const AuthContext = createContext(undefined);

export function ProvideAuth(children) {
  const auth = useProvideAuth();

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return useContext(AuthContext);
}

export function useProvideAuth() {
  const { accessToken, refreshToken } = useAppSelector(
    (store) => store.userReducer
  );
  const [user, setUser] = useState(null);

  const getUser = async () => {
    return await getUserRequest()
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setUser({ ...data.user });
        }
        return data.success;
      });
  };

  const signIn = async (form) => {
    const data = await loginRequest(form)
      .then((res) => {
        if (accessToken) {
          setCookie("token", accessToken);
        }
        return res.json();
      })
      .then((data) => data);

    if (data.success) {
      setUser({ ...data.user });
    }
  };

  const signOut = async () => {
    await logoutRequest();

    setUser(null);

    deleteCookie("token");
  };

  return {
    user,
    getUser,
    signIn,
    signOut,
  };
}

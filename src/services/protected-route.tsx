import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "..";
import { getUser } from "./actions/password";

export const ProtectedRouteElement = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { getRequest } = useAppSelector((store) => store.userReducer);

  const init = async () => {
    dispatch(getUser());
  };
  const token = localStorage.getItem("accessToken");
  useEffect(() => {
    init();

    if (!token) {
      navigate("/login", { replace: true });
    }
  }, [token, navigate, getRequest]);

  return <Outlet />;
};

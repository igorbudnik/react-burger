import { useNavigate } from "react-router-dom";
import { AppDispatch } from "../..";
import { refreshToken } from "../api";
export const CHANGE_PASSWORD_REQUEST = "CHANGE_PASSWORD_REQUEST";
export const CHANGE_PASSWORD_SUCCESS = "CHANGE_PASSWORD_SUCCESS";
export const CHANGE_PASSWORD_FAILED = "CHANGE_PASSWORD_FAILED";
export const REGISTER_REQUEST = "REGISTER_REQUEST";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAILED = "REGISTER_FAILED";
export const RESET_REQUEST = "RESET_REQUEST";
export const RESET_SUCCESS = "RESET_SUCCESS";
export const RESET_FAILED = "RESET_FAILED";
export const GET_USER_SUCCESS = "GET_USER_SUCCESS";
export const GET_USER_REQUEST = "GET_USER_REQUEST";
export const GET_USER_FAILED = "GET_USER_FAILED";
export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILED = "LOGIN_FAILED";
export const LOGOUT_REQUEST = "LOGOUT_REQUEST";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const LOGOUT_FAILED = "LOGOUT_FAILED";
export const CHANGE_INFO_REQUEST = "CHANGE_INFO_REQUEST";
export const CHANGE_INFO_SUCCESS = "CHANGE_INFO_SUCCESS";
export const CHANGE_INFO_FAILED = "CHANGE_INFO_FAILED";

export const change_password_url =
  "https://norma.nomoreparties.space/api/password-reset";
export const register_url =
  "https://norma.nomoreparties.space/api/auth/register";
export const reset_url =
  "https://norma.nomoreparties.space/api/password-reset/reset";

export const get_user_url = "https://norma.nomoreparties.space/api/auth/user";

export const login_url = "https://norma.nomoreparties.space/api/auth/login";

export const logout_url = "https://norma.nomoreparties.space/api/auth/logout";

export const change_info_url =
  "https://norma.nomoreparties.space/api/auth/user";

export const newPassword = (email: string) => {
  return function (dispatch: AppDispatch) {
    dispatch({
      type: CHANGE_PASSWORD_REQUEST,
    });
    fetch(change_password_url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({
        email: email, //исправить потом useState
      }),
    })
      .then((request) => request.json())
      .then((res) => {
        if (res && res.success) {
          dispatch({
            type: CHANGE_PASSWORD_SUCCESS,
          });
        } else {
          dispatch({
            type: CHANGE_PASSWORD_FAILED,
          });
        }
      })
      .catch((err) => {
        dispatch({
          type: CHANGE_PASSWORD_FAILED,
        });
      });
  };
};

export const registerUser = (name: string, email: string, password: string) => {
  return function (dispatch: AppDispatch) {
    dispatch({
      type: REGISTER_REQUEST,
    });
    fetch(register_url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({
        email: email,
        password: password,
        name: name,
      }),
    })
      .then((request) => request.json())
      .then((res) => {
        if (res && res.success) {
          dispatch({
            type: REGISTER_SUCCESS,
            accessToken: res.accessToken.split(" ")[1],
            refreshToken: res.refreshToken,
          });
        } else {
          dispatch({
            type: REGISTER_FAILED,
          });
        }
      })
      .catch((err) => {
        dispatch({
          type: REGISTER_FAILED,
        });
      });
  };
};

export const resetPassword = (password: string, token: string) => {
  return function (dispatch: AppDispatch) {
    dispatch({
      type: RESET_REQUEST,
    });
    fetch(reset_url, {
      method: "POST",

      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({
        password: password,
        token: token,
      }),
    })
      .then((request) => request.json())
      .then((res) => {
        if (res && res.success) {
          dispatch({
            type: RESET_SUCCESS,
          });
        } else {
          dispatch({
            type: RESET_FAILED,
          });
        }
      })
      .catch((err) => {
        dispatch({
          type: RESET_FAILED,
        });
      });
  };
};

export const getUser = () => {
  return function (dispatch: AppDispatch) {
    dispatch({
      type: GET_USER_REQUEST,
    });
    fetch(get_user_url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
        Authorization: "Bearer " + localStorage.getItem("accessToken"),
      },
    })
      .then((request) => request.json())
      .then((res) => {
        if (res && res.success) {
          dispatch({
            type: GET_USER_SUCCESS,
            name: res.user.name,
            email: res.user.email,
            getRequest: true,
          });
          localStorage.setItem("name", res.user.name);
          localStorage.setItem("email", res.user.email);
        } else {
          if (res.message === "jwt malformed") {
            localStorage.removeItem("name");
            localStorage.removeItem("email");
            localStorage.removeItem("accessToken");
            localStorage.removeItem("refreshToken");
            console.log(localStorage);

            dispatch({
              type: GET_USER_FAILED,
            });
          }
          if (res.message === "jwt expired") {
            refreshToken();
            fetch(get_user_url, {
              method: "GET",
              headers: {
                "Content-Type": "application/json;charset=utf-8",
                Authorization: "Bearer " + localStorage.getItem("accessToken"),
              },
            });
          } else {
            return Promise.reject(res);
          }
        }
      })
      .catch((err) => {
        dispatch({
          type: GET_USER_FAILED,
        });
      });
  };
};

export const loginUser = (userEmail: string, userPassword: string) => {
  return function (dispatch: AppDispatch) {
    dispatch({
      type: LOGIN_REQUEST,
    });
    fetch(login_url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },

      body: JSON.stringify({ email: userEmail, password: userPassword }),
    })
      .then((request) => request.json())
      .then((res) => {
        if (res && res.success) {
          dispatch({
            type: LOGIN_SUCCESS,
            email: userEmail,
            password: userPassword,
          });

          localStorage.setItem("accessToken", res.accessToken.split(" ")[1]);
          localStorage.setItem("refreshToken", res.refreshToken);
        } else {
          dispatch({
            type: LOGIN_FAILED,
          });
        }
      })
      .catch((err) => {
        dispatch({
          type: LOGIN_FAILED,
        });
      });
  };
};

export const logoutUser = () => {
  return function (dispatch: AppDispatch) {
    dispatch({
      type: LOGOUT_REQUEST,
    });
    fetch(logout_url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },

      body: JSON.stringify({ token: localStorage.getItem("refreshToken") }),
    })
      .then((request) => request.json())
      .then((res) => {
        if (res && res.success) {
          dispatch({
            type: LOGOUT_SUCCESS,
          });
        } else {
          dispatch({
            type: LOGOUT_FAILED,
          });
        }
      })
      .catch((err) => {
        dispatch({
          type: LOGOUT_FAILED,
        });
      });
  };
};

export const changeInfo = (name: string, email: string, password: string) => {
  return function (dispatch: AppDispatch) {
    dispatch({
      type: CHANGE_INFO_REQUEST,
    });
    fetch(change_info_url, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
        Authorization: "Bearer " + localStorage.getItem("accessToken"),
      },

      body: JSON.stringify({ name: name, email: email, password: password }),
    })
      .then((request) => request.json())
      .then((res) => {
        if (res && res.success) {
          dispatch({
            type: CHANGE_INFO_SUCCESS,
          });
        } else {
          dispatch({
            type: CHANGE_INFO_FAILED,
          });
        }
      })
      .catch((err) => {
        dispatch({
          type: CHANGE_INFO_FAILED,
        });
      });
  };
};

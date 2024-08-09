import { AppDispatch } from "../..";
import { checkReponse, refreshToken } from "../api";
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

export const BASE_URL = "https://norma.nomoreparties.space/api/";

export const newPassword = (email: string) => {
  return function (dispatch: AppDispatch) {
    dispatch({
      type: CHANGE_PASSWORD_REQUEST,
    });
    fetch(`${BASE_URL}password-reset`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({
        email: email, //исправить потом useState
      }),
    })
      .then(checkReponse)
      .then((res) => {
        if (res && res.success) {
          dispatch({
            type: CHANGE_PASSWORD_SUCCESS,
          });
        } else {
          dispatch({
            type: CHANGE_PASSWORD_FAILED,
          });
          return Promise.reject(`Ошибка: ${res.message}`);
        }
      })
      .catch((err) => {
        dispatch({
          type: CHANGE_PASSWORD_FAILED,
        });
        console.log(err);
      });
  };
};

export const registerUser = (name: string, email: string, password: string) => {
  return function (dispatch: AppDispatch) {
    dispatch({
      type: REGISTER_REQUEST,
    });
    fetch(`${BASE_URL}auth/register`, {
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
      .then(checkReponse)

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
          return Promise.reject(`Ошибка: ${res.message}`);
        }
      })
      .catch((err) => {
        dispatch({
          type: REGISTER_FAILED,
        });
        console.log(err);
      });
  };
};

export const resetPassword = (password: string, token: string) => {
  return function (dispatch: AppDispatch) {
    dispatch({
      type: RESET_REQUEST,
    });
    fetch(`${BASE_URL}password-reset/reset`, {
      method: "POST",

      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({
        password: password,
        token: token,
      }),
    })
      .then(checkReponse)

      .then((res) => {
        if (res && res.success) {
          dispatch({
            type: RESET_SUCCESS,
          });
        } else {
          dispatch({
            type: RESET_FAILED,
          });
          return Promise.reject(`Ошибка: ${res.message}`);
        }
      })
      .catch((err) => {
        dispatch({
          type: RESET_FAILED,
        });
        console.log(err);
      });
  };
};

export const getUser = () => {
  return function (dispatch: AppDispatch) {
    dispatch({
      type: GET_USER_REQUEST,
    });
    fetch(`${BASE_URL}auth/user`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
        Authorization: "Bearer " + localStorage.getItem("accessToken"),
      },
    })
      .then(checkReponse)

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
            return Promise.reject(`Ошибка: ${res.message}`);
          }
          if (res.message === "jwt expired") {
            refreshToken();
            fetch(`${BASE_URL}auth/user`, {
              method: "GET",
              headers: {
                "Content-Type": "application/json;charset=utf-8",
                Authorization: "Bearer " + localStorage.getItem("accessToken"),
              },
            });
          } else {
            return Promise.reject(`Ошибка: ${res.message}`);
          }
        }
      })
      .catch((err) => {
        dispatch({
          type: GET_USER_FAILED,
        });
        console.log(err);
      });
  };
};

export const loginUser = (userEmail: string, userPassword: string) => {
  return function (dispatch: AppDispatch) {
    dispatch({
      type: LOGIN_REQUEST,
    });
    fetch(`${BASE_URL}auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },

      body: JSON.stringify({ email: userEmail, password: userPassword }),
    })
      .then(checkReponse)

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
          return Promise.reject(`Ошибка: ${res.message}`);
        }
      })
      .catch((err) => {
        dispatch({
          type: LOGIN_FAILED,
        });
        console.log(err);
      });
  };
};

export const logoutUser = () => {
  return function (dispatch: AppDispatch) {
    dispatch({
      type: LOGOUT_REQUEST,
    });
    fetch(`${BASE_URL}auth/logout`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },

      body: JSON.stringify({ token: localStorage.getItem("refreshToken") }),
    })
      .then(checkReponse)

      .then((res) => {
        if (res && res.success) {
          dispatch({
            type: LOGOUT_SUCCESS,
          });
        } else {
          dispatch({
            type: LOGOUT_FAILED,
          });
          return Promise.reject(`Ошибка: ${res.message}`);
        }
      })
      .catch((err) => {
        dispatch({
          type: LOGOUT_FAILED,
        });
        console.log(err);
      });
  };
};

export const changeInfo = (name: string, email: string, password: string) => {
  return function (dispatch: AppDispatch) {
    dispatch({
      type: CHANGE_INFO_REQUEST,
    });
    fetch(`${BASE_URL}auth/user`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
        Authorization: "Bearer " + localStorage.getItem("accessToken"),
      },

      body: JSON.stringify({ name: name, email: email, password: password }),
    })
      .then(checkReponse)

      .then((res) => {
        if (res && res.success) {
          dispatch({
            type: CHANGE_INFO_SUCCESS,
          });
        } else {
          dispatch({
            type: CHANGE_INFO_FAILED,
          });
          return Promise.reject(`Ошибка: ${res.message}`);
        }
      })
      .catch((err) => {
        dispatch({
          type: CHANGE_INFO_FAILED,
        });
        console.log(err);
      });
  };
};

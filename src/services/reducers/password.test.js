import {
  CHANGE_INFO_FAILED,
  CHANGE_INFO_REQUEST,
  CHANGE_INFO_SUCCESS,
  CHANGE_PASSWORD_FAILED,
  CHANGE_PASSWORD_REQUEST,
  CHANGE_PASSWORD_SUCCESS,
  GET_USER_FAILED,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  LOGIN_FAILED,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT_FAILED,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  REGISTER_FAILED,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  RESET_FAILED,
  RESET_REQUEST,
  RESET_SUCCESS,
} from "../actions/password";
import { userReducer } from "./password";

describe("user reducer", () => {
  it("should return the initial state", () => {
    expect(userReducer(undefined, {})).toEqual({
      token: "",
      passwordRequest: false,
      passwordFailed: false,
      refreshToken: "",

      userName: "",
      userEmail: "",
      userPassword: "",
      registerRequest: false,
      registerFailed: false,

      resetFailed: false,
      resetRequest: false,

      name: "",
      email: "",
      password: "",
      userFailed: false,
      userRequest: false,

      getRequest: false,
      getFailed: false,

      logoutRequest: false,
      logoutFailed: false,

      infoRequest: false,
      infoFailed: false,
    });
  });
});

it("should call change password api", () => {
  expect(
    userReducer(
      {
        token: "",
        passwordRequest: false,
        passwordFailed: false,
        refreshToken: "",

        userName: "",
        userEmail: "",
        userPassword: "",
        registerRequest: false,
        registerFailed: false,

        resetFailed: false,
        resetRequest: false,

        name: "",
        email: "",
        password: "",
        userFailed: false,
        userRequest: false,

        getRequest: false,
        getFailed: false,

        logoutRequest: false,
        logoutFailed: false,

        infoRequest: false,
        infoFailed: false,
      },
      {
        type: CHANGE_PASSWORD_REQUEST,
      }
    )
  ).toEqual({
    token: "",
    passwordRequest: false,
    passwordFailed: false,
    refreshToken: "",

    userName: "",
    userEmail: "",
    userPassword: "",
    registerRequest: false,
    registerFailed: false,

    resetFailed: false,
    resetRequest: false,

    name: "",
    email: "",
    password: "",
    userFailed: false,
    userRequest: false,

    getRequest: false,
    getFailed: false,

    logoutRequest: false,
    logoutFailed: false,

    infoRequest: false,
    infoFailed: false,
  });
});

it("should approve api call", () => {
  expect(
    userReducer(
      {
        token: "",
        passwordRequest: false,
        passwordFailed: false,
        refreshToken: "",

        userName: "",
        userEmail: "",
        userPassword: "",
        registerRequest: false,
        registerFailed: false,

        resetFailed: false,
        resetRequest: false,

        name: "",
        email: "",
        password: "",
        userFailed: false,
        userRequest: false,

        getRequest: false,
        getFailed: false,

        logoutRequest: false,
        logoutFailed: false,

        infoRequest: false,
        infoFailed: false,
      },
      {
        type: CHANGE_PASSWORD_SUCCESS,
      }
    )
  ).toEqual({
    token: "",
    passwordRequest: true,
    passwordFailed: false,
    refreshToken: "",

    userName: "",
    userEmail: "",
    userPassword: "",
    registerRequest: false,
    registerFailed: false,

    resetFailed: false,
    resetRequest: false,

    name: "",
    email: "",
    password: "",
    userFailed: false,
    userRequest: false,

    getRequest: false,
    getFailed: false,

    logoutRequest: false,
    logoutFailed: false,

    infoRequest: false,
    infoFailed: false,
  });
});

it("should fail api call", () => {
  expect(
    userReducer(
      {
        token: "",
        passwordRequest: false,
        passwordFailed: false,
        refreshToken: "",

        userName: "",
        userEmail: "",
        userPassword: "",
        registerRequest: false,
        registerFailed: false,

        resetFailed: false,
        resetRequest: false,

        name: "",
        email: "",
        password: "",
        userFailed: false,
        userRequest: false,

        getRequest: false,
        getFailed: false,

        logoutRequest: false,
        logoutFailed: false,

        infoRequest: false,
        infoFailed: false,
      },
      {
        type: CHANGE_PASSWORD_FAILED,
      }
    )
  ).toEqual({
    token: "",
    passwordRequest: false,
    passwordFailed: true,
    refreshToken: "",

    userName: "",
    userEmail: "",
    userPassword: "",
    registerRequest: false,
    registerFailed: false,

    resetFailed: false,
    resetRequest: false,

    name: "",
    email: "",
    password: "",
    userFailed: false,
    userRequest: false,

    getRequest: false,
    getFailed: false,

    logoutRequest: false,
    logoutFailed: false,

    infoRequest: false,
    infoFailed: false,
  });
});

it("should call register api", () => {
  expect(
    userReducer(
      {
        token: "",
        passwordRequest: false,
        passwordFailed: false,
        refreshToken: "",

        userName: "",
        userEmail: "",
        userPassword: "",
        registerRequest: false,
        registerFailed: false,

        resetFailed: false,
        resetRequest: false,

        name: "",
        email: "",
        password: "",
        userFailed: false,
        userRequest: false,

        getRequest: false,
        getFailed: false,

        logoutRequest: false,
        logoutFailed: false,

        infoRequest: false,
        infoFailed: false,
      },
      {
        type: REGISTER_REQUEST,
      }
    )
  ).toEqual({
    token: "",
    passwordRequest: false,
    passwordFailed: false,
    refreshToken: "",

    userName: "",
    userEmail: "",
    userPassword: "",
    registerRequest: false,
    registerFailed: false,

    resetFailed: false,
    resetRequest: false,

    name: "",
    email: "",
    password: "",
    userFailed: false,
    userRequest: false,

    getRequest: false,
    getFailed: false,

    logoutRequest: false,
    logoutFailed: false,

    infoRequest: false,
    infoFailed: false,
  });
});

it("should approve register api", () => {
  expect(
    userReducer(
      {
        token: "",
        passwordRequest: false,
        passwordFailed: false,
        refreshToken: "",

        userName: "",
        userEmail: "",
        userPassword: "",
        registerRequest: false,
        registerFailed: false,

        resetFailed: false,
        resetRequest: false,

        name: "",
        email: "",
        password: "",
        userFailed: false,
        userRequest: false,

        getRequest: false,
        getFailed: false,

        logoutRequest: false,
        logoutFailed: false,

        infoRequest: false,
        infoFailed: false,
      },
      {
        type: REGISTER_SUCCESS,
        username: "Igor",
        email: "ibudnik@yandex.ru",
        password: "123",
      }
    )
  ).toEqual({
    token: "",
    passwordRequest: false,
    passwordFailed: false,
    refreshToken: "",

    userName: "Igor",
    userEmail: "ibudnik@yandex.ru",
    userPassword: "123",
    registerRequest: true,
    registerFailed: false,

    resetFailed: false,
    resetRequest: false,

    name: "",
    email: "",
    password: "",
    userFailed: false,
    userRequest: false,

    getRequest: false,
    getFailed: false,

    logoutRequest: false,
    logoutFailed: false,

    infoRequest: false,
    infoFailed: false,
  });
});

it("should fail register api", () => {
  expect(
    userReducer(
      {
        token: "",
        passwordRequest: false,
        passwordFailed: false,
        refreshToken: "",

        userName: "",
        userEmail: "",
        userPassword: "",
        registerRequest: false,
        registerFailed: false,

        resetFailed: false,
        resetRequest: false,

        name: "",
        email: "",
        password: "",
        userFailed: false,
        userRequest: false,

        getRequest: false,
        getFailed: false,

        logoutRequest: false,
        logoutFailed: false,

        infoRequest: false,
        infoFailed: false,
      },
      {
        type: REGISTER_FAILED,
      }
    )
  ).toEqual({
    token: "",
    passwordRequest: false,
    passwordFailed: false,
    refreshToken: "",

    userName: "",
    userEmail: "",
    userPassword: "",
    registerRequest: false,
    registerFailed: true,

    resetFailed: false,
    resetRequest: false,

    name: "",
    email: "",
    password: "",
    userFailed: false,
    userRequest: false,

    getRequest: false,
    getFailed: false,

    logoutRequest: false,
    logoutFailed: false,

    infoRequest: false,
    infoFailed: false,
  });
});

it("should call reset api", () => {
  expect(
    userReducer(
      {
        token: "",
        passwordRequest: false,
        passwordFailed: false,
        refreshToken: "",

        userName: "",
        userEmail: "",
        userPassword: "",
        registerRequest: false,
        registerFailed: false,

        resetFailed: false,
        resetRequest: false,

        name: "",
        email: "",
        password: "",
        userFailed: false,
        userRequest: false,

        getRequest: false,
        getFailed: false,

        logoutRequest: false,
        logoutFailed: false,

        infoRequest: false,
        infoFailed: false,
      },
      {
        type: RESET_REQUEST,
      }
    )
  ).toEqual({
    token: "",
    passwordRequest: false,
    passwordFailed: false,
    refreshToken: "",

    userName: "",
    userEmail: "",
    userPassword: "",
    registerRequest: false,
    registerFailed: false,

    resetFailed: false,
    resetRequest: false,

    name: "",
    email: "",
    password: "",
    userFailed: false,
    userRequest: false,

    getRequest: false,
    getFailed: false,

    logoutRequest: false,
    logoutFailed: false,

    infoRequest: false,
    infoFailed: false,
  });
});

it("should approve reset api", () => {
  expect(
    userReducer(
      {
        token: "",
        passwordRequest: false,
        passwordFailed: false,
        refreshToken: "",

        userName: "",
        userEmail: "",
        userPassword: "",
        registerRequest: false,
        registerFailed: false,

        resetFailed: false,
        resetRequest: false,

        name: "",
        email: "",
        password: "",
        userFailed: false,
        userRequest: false,

        getRequest: false,
        getFailed: false,

        logoutRequest: false,
        logoutFailed: false,

        infoRequest: false,
        infoFailed: false,
      },
      {
        type: RESET_SUCCESS,
      }
    )
  ).toEqual({
    token: "",
    passwordRequest: false,
    passwordFailed: false,
    refreshToken: "",

    userName: "",
    userEmail: "",
    userPassword: "",
    registerRequest: false,
    registerFailed: false,

    resetFailed: false,
    resetRequest: true,

    name: "",
    email: "",
    password: "",
    userFailed: false,
    userRequest: false,

    getRequest: false,
    getFailed: false,

    logoutRequest: false,
    logoutFailed: false,

    infoRequest: false,
    infoFailed: false,
  });
});

it("should fail reset api", () => {
  expect(
    userReducer(
      {
        token: "",
        passwordRequest: false,
        passwordFailed: false,
        refreshToken: "",

        userName: "",
        userEmail: "",
        userPassword: "",
        registerRequest: false,
        registerFailed: false,

        resetFailed: false,
        resetRequest: false,

        name: "",
        email: "",
        password: "",
        userFailed: false,
        userRequest: false,

        getRequest: false,
        getFailed: false,

        logoutRequest: false,
        logoutFailed: false,

        infoRequest: false,
        infoFailed: false,
      },
      {
        type: RESET_FAILED,
      }
    )
  ).toEqual({
    token: "",
    passwordRequest: false,
    passwordFailed: false,
    refreshToken: "",

    userName: "",
    userEmail: "",
    userPassword: "",
    registerRequest: false,
    registerFailed: false,

    resetFailed: true,
    resetRequest: false,

    name: "",
    email: "",
    password: "",
    userFailed: false,
    userRequest: false,

    getRequest: false,
    getFailed: false,

    logoutRequest: false,
    logoutFailed: false,

    infoRequest: false,
    infoFailed: false,
  });
});

it("should call login api", () => {
  expect(
    userReducer(
      {
        token: "",
        passwordRequest: false,
        passwordFailed: false,
        refreshToken: "",

        userName: "",
        userEmail: "",
        userPassword: "",
        registerRequest: false,
        registerFailed: false,

        resetFailed: false,
        resetRequest: false,

        name: "",
        email: "",
        password: "",
        userFailed: false,
        userRequest: false,

        getRequest: false,
        getFailed: false,

        logoutRequest: false,
        logoutFailed: false,

        infoRequest: false,
        infoFailed: false,
      },
      {
        type: LOGIN_REQUEST,
      }
    )
  ).toEqual({
    token: "",
    passwordRequest: false,
    passwordFailed: false,
    refreshToken: "",

    userName: "",
    userEmail: "",
    userPassword: "",
    registerRequest: false,
    registerFailed: false,

    resetFailed: false,
    resetRequest: false,

    name: "",
    email: "",
    password: "",
    userFailed: false,
    userRequest: false,

    getRequest: false,
    getFailed: false,

    logoutRequest: false,
    logoutFailed: false,

    infoRequest: false,
    infoFailed: false,
  });
});

it("should approve login api", () => {
  expect(
    userReducer(
      {
        token: "",
        passwordRequest: false,
        passwordFailed: false,
        refreshToken: "",

        userName: "",
        userEmail: "",
        userPassword: "",
        registerRequest: false,
        registerFailed: false,

        resetFailed: false,
        resetRequest: false,

        name: "",
        email: "",
        password: "",
        userFailed: false,
        userRequest: false,

        getRequest: false,
        getFailed: false,

        logoutRequest: false,
        logoutFailed: false,

        infoRequest: false,
        infoFailed: false,
      },
      {
        type: LOGIN_SUCCESS,
        email: "ibudnik@yandex.ru",
        password: "123",
      }
    )
  ).toEqual({
    token: "",
    passwordRequest: false,
    passwordFailed: false,
    refreshToken: "",

    userName: "",
    userEmail: "",
    userPassword: "",
    registerRequest: false,
    registerFailed: false,

    resetFailed: false,
    resetRequest: false,

    name: "",
    email: "ibudnik@yandex.ru",
    password: "123",
    userFailed: false,
    userRequest: true,

    getRequest: false,
    getFailed: false,

    logoutRequest: false,
    logoutFailed: false,

    infoRequest: false,
    infoFailed: false,
  });
});

it("should fail login api", () => {
  expect(
    userReducer(
      {
        token: "",
        passwordRequest: false,
        passwordFailed: false,
        refreshToken: "",

        userName: "",
        userEmail: "",
        userPassword: "",
        registerRequest: false,
        registerFailed: false,

        resetFailed: false,
        resetRequest: false,

        name: "",
        email: "",
        password: "",
        userFailed: false,
        userRequest: false,

        getRequest: false,
        getFailed: false,

        logoutRequest: false,
        logoutFailed: false,

        infoRequest: false,
        infoFailed: false,
      },
      {
        type: LOGIN_FAILED,
      }
    )
  ).toEqual({
    token: "",
    passwordRequest: false,
    passwordFailed: false,
    refreshToken: "",

    userName: "",
    userEmail: "",
    userPassword: "",
    registerRequest: false,
    registerFailed: false,

    resetFailed: false,
    resetRequest: false,

    name: "",
    email: "",
    password: "",
    userFailed: true,
    userRequest: false,

    getRequest: false,
    getFailed: false,

    logoutRequest: false,
    logoutFailed: false,

    infoRequest: false,
    infoFailed: false,
  });
});

it("should call get user api", () => {
  expect(
    userReducer(
      {
        token: "",
        passwordRequest: false,
        passwordFailed: false,
        refreshToken: "",

        userName: "",
        userEmail: "",
        userPassword: "",
        registerRequest: false,
        registerFailed: false,

        resetFailed: false,
        resetRequest: false,

        name: "",
        email: "",
        password: "",
        userFailed: false,
        userRequest: false,

        getRequest: false,
        getFailed: false,

        logoutRequest: false,
        logoutFailed: false,

        infoRequest: false,
        infoFailed: false,
      },
      {
        type: GET_USER_REQUEST,
      }
    )
  ).toEqual({
    token: "",
    passwordRequest: false,
    passwordFailed: false,
    refreshToken: "",

    userName: "",
    userEmail: "",
    userPassword: "",
    registerRequest: false,
    registerFailed: false,

    resetFailed: false,
    resetRequest: false,

    name: "",
    email: "",
    password: "",
    userFailed: false,
    userRequest: false,

    getRequest: false,
    getFailed: false,

    logoutRequest: false,
    logoutFailed: false,

    infoRequest: false,
    infoFailed: false,
  });
});

it("should approve get user api", () => {
  expect(
    userReducer(
      {
        token: "",
        passwordRequest: false,
        passwordFailed: false,
        refreshToken: "",

        userName: "",
        userEmail: "",
        userPassword: "",
        registerRequest: false,
        registerFailed: false,

        resetFailed: false,
        resetRequest: false,

        name: "",
        email: "",
        password: "",
        userFailed: false,
        userRequest: false,

        getRequest: false,
        getFailed: false,

        logoutRequest: false,
        logoutFailed: false,

        infoRequest: false,
        infoFailed: false,
      },
      {
        type: GET_USER_SUCCESS,
        email: "ibudnik@yandex.ru",
        name: "Igor",
      }
    )
  ).toEqual({
    token: "",
    passwordRequest: false,
    passwordFailed: false,
    refreshToken: "",

    userName: "",
    userEmail: "",
    userPassword: "",
    registerRequest: false,
    registerFailed: false,

    resetFailed: false,
    resetRequest: false,

    name: "Igor",
    email: "ibudnik@yandex.ru",
    password: "",
    userFailed: false,
    userRequest: false,

    getRequest: true,
    getFailed: false,

    logoutRequest: false,
    logoutFailed: false,

    infoRequest: false,
    infoFailed: false,
  });
});

it("should fail get user api", () => {
  expect(
    userReducer(
      {
        token: "",
        passwordRequest: false,
        passwordFailed: false,
        refreshToken: "",

        userName: "",
        userEmail: "",
        userPassword: "",
        registerRequest: false,
        registerFailed: false,

        resetFailed: false,
        resetRequest: false,

        name: "",
        email: "",
        password: "",
        userFailed: false,
        userRequest: false,

        getRequest: false,
        getFailed: false,

        logoutRequest: false,
        logoutFailed: false,

        infoRequest: false,
        infoFailed: false,
      },
      {
        type: GET_USER_FAILED,
      }
    )
  ).toEqual({
    token: "",
    passwordRequest: false,
    passwordFailed: false,
    refreshToken: "",

    userName: "",
    userEmail: "",
    userPassword: "",
    registerRequest: false,
    registerFailed: false,

    resetFailed: false,
    resetRequest: false,

    name: "",
    email: "",
    password: "",
    userFailed: false,
    userRequest: false,

    getRequest: false,
    getFailed: false,

    logoutRequest: false,
    logoutFailed: false,

    infoRequest: false,
    infoFailed: false,
  });
});

it("should call logout api", () => {
  expect(
    userReducer(
      {
        token: "",
        passwordRequest: false,
        passwordFailed: false,
        refreshToken: "",

        userName: "",
        userEmail: "",
        userPassword: "",
        registerRequest: false,
        registerFailed: false,

        resetFailed: false,
        resetRequest: false,

        name: "",
        email: "",
        password: "",
        userFailed: false,
        userRequest: false,

        getRequest: false,
        getFailed: false,

        logoutRequest: false,
        logoutFailed: false,

        infoRequest: false,
        infoFailed: false,
      },
      {
        type: LOGOUT_REQUEST,
      }
    )
  ).toEqual({
    token: "",
    passwordRequest: false,
    passwordFailed: false,
    refreshToken: "",

    userName: "",
    userEmail: "",
    userPassword: "",
    registerRequest: false,
    registerFailed: false,

    resetFailed: false,
    resetRequest: false,

    name: "",
    email: "",
    password: "",
    userFailed: false,
    userRequest: false,

    getRequest: false,
    getFailed: false,

    logoutRequest: false,
    logoutFailed: false,

    infoRequest: false,
    infoFailed: false,
  });
});

it("should approve logout api", () => {
  expect(
    userReducer(
      {
        token: "",
        passwordRequest: false,
        passwordFailed: false,
        refreshToken: "qwer123qwer",

        userName: "",
        userEmail: "",
        userPassword: "",
        registerRequest: false,
        registerFailed: false,

        resetFailed: false,
        resetRequest: false,

        name: "Igor",
        email: "ibudnik@yandex.ru",
        password: "123",
        userFailed: false,
        userRequest: true,

        getRequest: false,
        getFailed: false,

        logoutRequest: false,
        logoutFailed: false,

        infoRequest: false,
        infoFailed: false,
      },
      {
        type: LOGOUT_SUCCESS,
        refreshToken: "",
        name: "",
        password: "",
        email: "",
      }
    )
  ).toEqual({
    token: "",
    passwordRequest: false,
    passwordFailed: false,
    refreshToken: "",

    userName: "",
    userEmail: "",
    userPassword: "",
    registerRequest: false,
    registerFailed: false,

    resetFailed: false,
    resetRequest: false,

    name: "",
    email: "",
    password: "",
    userFailed: false,
    userRequest: false,

    getRequest: false,
    getFailed: false,

    logoutRequest: true,
    logoutFailed: false,

    infoRequest: false,
    infoFailed: false,
  });
});

it("should fail logout api", () => {
  expect(
    userReducer(
      {
        token: "",
        passwordRequest: false,
        passwordFailed: false,
        refreshToken: "",

        userName: "",
        userEmail: "",
        userPassword: "",
        registerRequest: false,
        registerFailed: false,

        resetFailed: false,
        resetRequest: false,

        name: "",
        email: "",
        password: "",
        userFailed: false,
        userRequest: false,

        getRequest: false,
        getFailed: false,

        logoutRequest: false,
        logoutFailed: false,

        infoRequest: false,
        infoFailed: false,
      },
      {
        type: LOGOUT_FAILED,
      }
    )
  ).toEqual({
    token: "",
    passwordRequest: false,
    passwordFailed: false,
    refreshToken: "",

    userName: "",
    userEmail: "",
    userPassword: "",
    registerRequest: false,
    registerFailed: false,

    resetFailed: false,
    resetRequest: false,

    name: "",
    email: "",
    password: "",
    userFailed: false,
    userRequest: false,

    getRequest: false,
    getFailed: false,

    logoutRequest: false,
    logoutFailed: true,

    infoRequest: false,
    infoFailed: false,
  });
});

it("should call change info api", () => {
  expect(
    userReducer(
      {
        token: "",
        passwordRequest: false,
        passwordFailed: false,
        refreshToken: "",

        userName: "",
        userEmail: "",
        userPassword: "",
        registerRequest: false,
        registerFailed: false,

        resetFailed: false,
        resetRequest: false,

        name: "",
        email: "",
        password: "",
        userFailed: false,
        userRequest: false,

        getRequest: false,
        getFailed: false,

        logoutRequest: false,
        logoutFailed: false,

        infoRequest: false,
        infoFailed: false,
      },
      {
        type: CHANGE_INFO_REQUEST,
      }
    )
  ).toEqual({
    token: "",
    passwordRequest: false,
    passwordFailed: false,
    refreshToken: "",

    userName: "",
    userEmail: "",
    userPassword: "",
    registerRequest: false,
    registerFailed: false,

    resetFailed: false,
    resetRequest: false,

    name: "",
    email: "",
    password: "",
    userFailed: false,
    userRequest: false,

    getRequest: false,
    getFailed: false,

    logoutRequest: false,
    logoutFailed: false,

    infoRequest: false,
    infoFailed: false,
  });
});

it("should approve change info api", () => {
  expect(
    userReducer(
      {
        token: "",
        passwordRequest: false,
        passwordFailed: false,
        refreshToken: "",

        userName: "",
        userEmail: "",
        userPassword: "",
        registerRequest: false,
        registerFailed: false,

        resetFailed: false,
        resetRequest: false,

        name: "Igor",
        email: "ibudnik@yandex.ru",
        password: "123",
        userFailed: false,
        userRequest: false,

        getRequest: false,
        getFailed: false,

        logoutRequest: false,
        logoutFailed: false,

        infoRequest: false,
        infoFailed: false,
      },
      {
        type: CHANGE_INFO_SUCCESS,

        name: "Panter",
        password: "321",
        email: "i@yandex.ru",
      }
    )
  ).toEqual({
    token: "",
    passwordRequest: false,
    passwordFailed: false,
    refreshToken: "",

    userName: "",
    userEmail: "",
    userPassword: "",
    registerRequest: false,
    registerFailed: false,

    resetFailed: false,
    resetRequest: false,

    name: "Panter",
    email: "i@yandex.ru",
    password: "321",
    userFailed: false,
    userRequest: false,

    getRequest: false,
    getFailed: false,

    logoutRequest: false,
    logoutFailed: false,

    infoRequest: true,
    infoFailed: false,
  });
});

it("should fail change info api", () => {
  expect(
    userReducer(
      {
        token: "",
        passwordRequest: false,
        passwordFailed: false,
        refreshToken: "",

        userName: "",
        userEmail: "",
        userPassword: "",
        registerRequest: false,
        registerFailed: false,

        resetFailed: false,
        resetRequest: false,

        name: "",
        email: "",
        password: "",
        userFailed: false,
        userRequest: false,

        getRequest: false,
        getFailed: false,

        logoutRequest: false,
        logoutFailed: false,

        infoRequest: false,
        infoFailed: false,
      },
      {
        type: CHANGE_INFO_FAILED,
      }
    )
  ).toEqual({
    token: "",
    passwordRequest: false,
    passwordFailed: false,
    refreshToken: "",

    userName: "",
    userEmail: "",
    userPassword: "",
    registerRequest: false,
    registerFailed: false,

    resetFailed: false,
    resetRequest: false,

    name: "",
    email: "",
    password: "",
    userFailed: false,
    userRequest: false,

    getRequest: false,
    getFailed: false,

    logoutRequest: false,
    logoutFailed: false,

    infoRequest: false,
    infoFailed: true,
  });
});

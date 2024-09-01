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
import { initialState, userReducer } from "./password";

describe("user reducer", () => {
  it("should return the initial state", () => {
    expect(userReducer(undefined, {})).toEqual({
      ...initialState,
    });
  });
});

it("should call change password api", () => {
  expect(
    userReducer(
      {
        ...initialState,
      },
      {
        type: CHANGE_PASSWORD_REQUEST,
      }
    )
  ).toEqual({
    ...initialState,
  });
});

it("should approve api call", () => {
  expect(
    userReducer(
      {
        ...initialState,
      },
      {
        type: CHANGE_PASSWORD_SUCCESS,
      }
    )
  ).toEqual({
    ...initialState,
    passwordRequest: true,
  });
});

it("should fail api call", () => {
  expect(
    userReducer(
      {
        ...initialState,
      },
      {
        type: CHANGE_PASSWORD_FAILED,
      }
    )
  ).toEqual({
    ...initialState,
    passwordFailed: true,
  });
});

it("should call register api", () => {
  expect(
    userReducer(
      {
        ...initialState,
      },
      {
        type: REGISTER_REQUEST,
      }
    )
  ).toEqual({
    ...initialState,
  });
});

it("should approve register api", () => {
  expect(
    userReducer(
      {
        ...initialState,
      },
      {
        type: REGISTER_SUCCESS,
        username: "Igor",
        email: "ibudnik@yandex.ru",
        password: "123",
      }
    )
  ).toEqual({
    ...initialState,

    userName: "Igor",
    userEmail: "ibudnik@yandex.ru",
    userPassword: "123",
    registerRequest: true,
  });
});

it("should fail register api", () => {
  expect(
    userReducer(
      {
        ...initialState,
      },
      {
        type: REGISTER_FAILED,
      }
    )
  ).toEqual({
    ...initialState,
    registerFailed: true,
  });
});

it("should call reset api", () => {
  expect(
    userReducer(
      {
        ...initialState,
      },
      {
        type: RESET_REQUEST,
      }
    )
  ).toEqual({
    ...initialState,
  });
});

it("should approve reset api", () => {
  expect(
    userReducer(
      {
        ...initialState,
      },
      {
        type: RESET_SUCCESS,
      }
    )
  ).toEqual({
    ...initialState,
    resetRequest: true,
  });
});

it("should fail reset api", () => {
  expect(
    userReducer(
      {
        ...initialState,
      },
      {
        type: RESET_FAILED,
      }
    )
  ).toEqual({
    ...initialState,
    resetFailed: true,
  });
});

it("should call login api", () => {
  expect(
    userReducer(
      {
        ...initialState,
      },
      {
        type: LOGIN_REQUEST,
      }
    )
  ).toEqual({
    ...initialState,
  });
});

it("should approve login api", () => {
  expect(
    userReducer(
      {
        ...initialState,
      },
      {
        type: LOGIN_SUCCESS,
        email: "ibudnik@yandex.ru",
        password: "123",
      }
    )
  ).toEqual({
    ...initialState,
    email: "ibudnik@yandex.ru",
    password: "123",

    userRequest: true,
  });
});

it("should fail login api", () => {
  expect(
    userReducer(
      {
        ...initialState,
      },
      {
        type: LOGIN_FAILED,
      }
    )
  ).toEqual({
    ...initialState,
    userFailed: true,
  });
});

it("should call get user api", () => {
  expect(
    userReducer(
      {
        ...initialState,
      },
      {
        type: GET_USER_REQUEST,
      }
    )
  ).toEqual({
    ...initialState,
  });
});

it("should approve get user api", () => {
  expect(
    userReducer(
      {
        ...initialState,
      },
      {
        type: GET_USER_SUCCESS,
        email: "ibudnik@yandex.ru",
        name: "Igor",
      }
    )
  ).toEqual({
    ...initialState,
    name: "Igor",
    email: "ibudnik@yandex.ru",

    getRequest: true,
  });
});

it("should fail get user api", () => {
  expect(
    userReducer(
      {
        ...initialState,
      },
      {
        type: GET_USER_FAILED,
      }
    )
  ).toEqual({
    ...initialState,
  });
});

it("should call logout api", () => {
  expect(
    userReducer(
      {
        ...initialState,
      },
      {
        type: LOGOUT_REQUEST,
      }
    )
  ).toEqual({
    ...initialState,
  });
});

it("should approve logout api", () => {
  expect(
    userReducer(
      {
        ...initialState,
        refreshToken: "qwer123qwer",

        name: "Igor",
        email: "ibudnik@yandex.ru",
        password: "123",

        userRequest: true,
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
    ...initialState,
    logoutRequest: true,
  });
});

it("should fail logout api", () => {
  expect(
    userReducer(
      {
        ...initialState,
      },
      {
        type: LOGOUT_FAILED,
      }
    )
  ).toEqual({
    ...initialState,
    logoutFailed: true,
  });
});

it("should call change info api", () => {
  expect(
    userReducer(
      {
        ...initialState,
      },
      {
        type: CHANGE_INFO_REQUEST,
      }
    )
  ).toEqual({
    ...initialState,
  });
});

it("should approve change info api", () => {
  expect(
    userReducer(
      {
        ...initialState,
        name: "Igor",
        email: "ibudnik@yandex.ru",
        password: "123",
      },
      {
        type: CHANGE_INFO_SUCCESS,

        name: "Panter",
        password: "321",
        email: "i@yandex.ru",
      }
    )
  ).toEqual({
    ...initialState,
    name: "Panter",
    email: "i@yandex.ru",
    password: "321",

    infoRequest: true,
  });
});

it("should fail change info api", () => {
  expect(
    userReducer(
      {
        ...initialState,
      },
      {
        type: CHANGE_INFO_FAILED,
      }
    )
  ).toEqual({
    ...initialState,
    infoFailed: true,
  });
});

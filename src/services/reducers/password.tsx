import {
  CHANGE_PASSWORD_FAILED,
  CHANGE_PASSWORD_REQUEST,
  CHANGE_PASSWORD_SUCCESS,
  REGISTER_REQUEST,
  REGISTER_FAILED,
  REGISTER_SUCCESS,
  RESET_FAILED,
  RESET_SUCCESS,
  RESET_REQUEST,
  GET_USER_REQUEST,
  GET_USER_FAILED,
  GET_USER_SUCCESS,
  LOGIN_REQUEST,
  LOGIN_FAILED,
  LOGIN_SUCCESS,
  LOGOUT_FAILED,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  CHANGE_INFO_FAILED,
  CHANGE_INFO_REQUEST,
  CHANGE_INFO_SUCCESS,
} from "../actions/password";

interface Initial {
  token: string;
  passwordRequest: boolean;
  passwordFailed: boolean;

  refreshToken: string;

  userName: string;
  userEmail: string;
  userPassword: string;
  registerRequest: boolean;
  registerFailed: boolean;

  resetFailed: boolean;
  resetRequest: boolean;

  name: string;
  email: string;
  password: string;
  userFailed: boolean;
  userRequest: boolean;

  getRequest: boolean;
  getFailed: boolean;

  logoutRequest: boolean;
  logoutFailed: boolean;

  infoRequest: boolean;
  infoFailed: boolean;
}

const initialState: Initial = {
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
};

interface IUserInterface {
  type: string;
  accessToken: string;
  username: string;
  email: string;
  password: string;
  name: string;
}

export const userReducer = (state = initialState, action: IUserInterface) => {
  switch (action.type) {
    case CHANGE_PASSWORD_REQUEST: {
      return {
        ...state,
      };
    }
    case CHANGE_PASSWORD_SUCCESS: {
      return {
        ...state,

        passwordRequest: true,
      };
    }
    case CHANGE_PASSWORD_FAILED: {
      return {
        ...state,
        passwordFailed: true,
      };
    }
    case REGISTER_REQUEST: {
      return {
        ...state,
      };
    }
    case REGISTER_SUCCESS: {
      console.log(action.accessToken);

      return {
        ...state,
        userName: action.username,
        userEmail: action.email,
        userPassword: action.password,
        registerRequest: true,
      };
    }
    case REGISTER_FAILED: {
      return {
        ...state,
        registerFailed: true,
      };
    }
    case RESET_REQUEST: {
      return {
        ...state,
      };
    }
    case RESET_SUCCESS: {
      return {
        ...state,
        resetRequest: true,
      };
    }
    case RESET_FAILED: {
      return {
        ...state,
        resetFailed: true,
      };
    }
    case LOGIN_REQUEST: {
      return {
        ...state,
      };
    }
    case LOGIN_SUCCESS: {
      return {
        ...state,
        email: action.email,
        password: action.password,
        userRequest: true,
      };
    }
    case LOGIN_FAILED: {
      return {
        ...state,
        userFailed: true,
      };
    }
    case GET_USER_REQUEST: {
      return {
        ...state,
      };
    }
    case GET_USER_SUCCESS: {
      return {
        ...state,
        email: action.email,
        name: action.name,
        getRequest: true,
      };
    }
    case GET_USER_FAILED: {
      return {
        ...state,
        getFailed: true,
      };
    }
    case LOGOUT_REQUEST: {
      return {
        ...state,
      };
    }
    case LOGOUT_SUCCESS: {
      return {
        ...state,
        refreshToken: "",
        name: "",
        password: "",
        email: "",
        logoutRequest: true,
        userRequest: false,
      };
    }
    case LOGOUT_FAILED: {
      return {
        ...state,
        logoutFailed: true,
      };
    }
    case CHANGE_INFO_REQUEST: {
      return {
        ...state,
      };
    }
    case CHANGE_INFO_SUCCESS: {
      return {
        ...state,
        name: action.name,
        password: action.password,
        email: action.email,
        infoRequest: true,
      };
    }
    case CHANGE_INFO_FAILED: {
      return {
        ...state,
        infoFailed: true,
      };
    }

    default: {
      return state;
    }
  }
};

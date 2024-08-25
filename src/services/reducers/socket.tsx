import {
  WS_CONNECTION_SUCCESS,
  WS_CONNECTION_ERROR,
  WS_CONNECTION_CLOSED,
  WS_GET_MESSAGE,
  WS_GET_MESSAGE_ALL,
  WS_CONNECTION_ERROR_ALL,
  WS_CONNECTION_SUCCESS_ALL,
  WS_CONNECTION_CLOSED_ALL,
} from "../actions/socket";
import type {
  IMessage,
  TWSActions,
  TWSActionsAll,
} from "../../components/Types/types";

type TWSState = {
  wsConnected: boolean;
  messagesAll: IMessage[];
  messagesMy: IMessage[];
  error?: Event;
};

const initialState: TWSState = {
  wsConnected: false,
  messagesAll: [],
  messagesMy: [],
};

type IActions = TWSActions | TWSActionsAll;

export const wsReducer = (state = initialState, action: IActions) => {
  switch (action.type) {
    case WS_CONNECTION_SUCCESS:
      return {
        ...state,
        error: undefined,
        wsConnected: true,
      };

    case WS_CONNECTION_ERROR:
      return {
        ...state,
        error: action.payload,
        wsConnected: false,
      };

    case WS_CONNECTION_CLOSED:
      return {
        ...state,
        error: undefined,
        wsConnected: false,
      };

    case WS_GET_MESSAGE:
      const msg = { ...action.payload };

      return {
        ...state,
        error: undefined,
        messagesMy: [{ ...msg }],
      };
    case WS_CONNECTION_SUCCESS_ALL:
      return {
        ...state,
        error: undefined,
        wsConnected: true,
      };

    case WS_CONNECTION_ERROR_ALL:
      return {
        ...state,
        error: action.payload,
        wsConnected: false,
      };

    case WS_CONNECTION_CLOSED_ALL:
      return {
        ...state,
        error: undefined,
        wsConnected: false,
      };

    case WS_GET_MESSAGE_ALL:
      const msg_all = { ...action.payload };

      return {
        ...state,
        error: undefined,
        messagesAll: [{ ...msg_all }],
      };
    default:
      return state;
  }
};

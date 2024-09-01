import {
  WS_CONNECTION_SUCCESS,
  WS_CONNECTION_ERROR,
  WS_CONNECTION_CLOSED,
  WS_GET_MESSAGE,
} from "../actions/socket";
import type { IMessage, TWSActions } from "../../components/Types/types";

type TWSState = {
  wsConnected: boolean;
  messages: IMessage[];
  error?: Event;
};

export const initialState: TWSState = {
  wsConnected: false,
  messages: [],
};

type IActions = TWSActions;

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
        messages: [{ ...msg }],
      };
    default:
      return state;
  }
};

import type { Middleware, MiddlewareAPI } from "redux";
import { AppDispatch, RootState } from "..";

import type {
  TWSActions,
  TWSStoreActions,
  IMessage,
} from "../components/Types/types";
import { refreshToken } from "../services/api";
import {
  GET_USER_FAILED,
  GET_USER_SUCCESS,
} from "../services/actions/password";

export const wsUrl = "wss://norma.nomoreparties.space/orders";

export const socketMiddleware = (wsActions: TWSStoreActions): Middleware => {
  return ((store: MiddlewareAPI<AppDispatch, RootState>) => {
    let socket: WebSocket | null = null;

    return (next) => (action: TWSActions) => {
      const { dispatch, getState } = store;
      const { type } = action;
      const { wsInit, wsSendMessage, onOpen, onClose, onError, onMessage } =
        wsActions;

      const token = localStorage.getItem("accessToken");

      if (type === wsInit) {
        socket = new WebSocket(action.url);
      }
      if (socket) {
        socket.onopen = (event) => {
          dispatch({ type: onOpen, payload: event });
        };

        socket.onerror = (event) => {
          dispatch({ type: onError, payload: event });
        };

        socket.onmessage = (event) => {
          const { data } = event;
          const parsedData: IMessage = JSON.parse(data);
          const { success, ...restParsedData } = parsedData;

          if (parsedData.message === "jwt expired") {
            refreshToken().then((refreshData) => {
              const wssUrl = new URL(wsUrl);
              wssUrl.searchParams.set(
                "token",
                refreshData.accessToken.replace("Bearer ", "")
              );
              dispatch({ type: wsInit, payload: wssUrl });
            });
          } else {
            dispatch({
              type: onMessage,
              payload: parsedData,
            });
          }

          dispatch({
            type: onMessage,
            payload: { ...restParsedData },
          });
        };

        socket.onclose = (event) => {
          dispatch({ type: onClose, payload: event });
        };

        if (type === wsSendMessage) {
          const payload = action.payload;
          const message = { ...payload };
          socket.send(JSON.stringify(message));
        }
      }

      next(action);
    };
  }) as Middleware;
};

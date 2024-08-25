import type { Middleware, MiddlewareAPI } from "redux";
import { AppDispatch, RootState, useAppDispatch, useAppSelector } from "..";

import type {
  TWSActions,
  TWSStoreActions,
  IMessage,
  TWSStoreActionsAll,
  TWSActionsAll,
} from "../components/Types/types";
import { refreshToken } from "../services/api";

export const wsUrl = "wss://norma.nomoreparties.space/orders/all";

export const socketMiddlewareAll = (
  wsActionsAll: TWSStoreActionsAll
): Middleware => {
  return ((store: MiddlewareAPI<AppDispatch, RootState>) => {
    let socket: WebSocket | null = null;

    return (next) => (action: TWSActionsAll) => {
      const { dispatch, getState } = store;
      const { type } = action;
      const {
        wsInitAll,
        wsSendMessageAll,
        onOpenAll,
        onCloseAll,
        onErrorAll,
        onMessageAll,
      } = wsActionsAll;

      const token = localStorage.getItem("accessToken");

      if (type === wsInitAll) {
        socket = new WebSocket(`${wsUrl}?token=${token}`);
      }
      if (socket) {
        socket.onopen = (event) => {
          dispatch({ type: onOpenAll, payload: event });
        };

        socket.onerror = (event) => {
          dispatch({ type: onErrorAll, payload: event });
        };

        socket.onmessage = (event) => {
          const { data } = event;
          const parsedData: IMessage = JSON.parse(data);
          const { success, ...restParsedData } = parsedData;

          if (parsedData.message === "Invalid or missing token") {
            refreshToken().then((refreshData) => {
              const wssUrl = new URL(wsUrl);
              wssUrl.searchParams.set(
                "token",
                refreshData.accessToken.replace("Bearer ", "")
              );
              dispatch({ type: wsInitAll, payload: wssUrl });
            });
          } else {
            dispatch({
              type: onMessageAll,
              payload: parsedData,
            });
          }
          dispatch({
            type: onMessageAll,
            payload: { ...restParsedData },
          });
        };

        socket.onclose = (event) => {
          dispatch({ type: onCloseAll, payload: event });
        };

        if (type === wsSendMessageAll) {
          const payload = action.payload;
          const message = { ...payload };
          socket.send(JSON.stringify(message));
        }
      }

      next(action);
    };
  }) as Middleware;
};

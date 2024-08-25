import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App/app";
import reportWebVitals from "./reportWebVitals";
import { rootReducer } from "./services/reducers/index";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { socketMiddleware } from "./middleware/socketMiddleware";
import {
  WS_CONNECTION_CLOSED,
  WS_CONNECTION_CLOSED_ALL,
  WS_CONNECTION_ERROR,
  WS_CONNECTION_ERROR_ALL,
  WS_CONNECTION_START,
  WS_CONNECTION_START_ALL,
  WS_CONNECTION_SUCCESS,
  WS_CONNECTION_SUCCESS_ALL,
  WS_GET_MESSAGE,
  WS_GET_MESSAGE_ALL,
  WS_SEND_MESSAGE,
  WS_SEND_MESSAGE_ALL,
} from "./services/actions/socket";
import { TWSStoreActions, TWSStoreActionsAll } from "./components/Types/types";
import { socketMiddlewareAll } from "./middleware/socketMiddlewareAll";

const wsActions: TWSStoreActions = {
  wsInit: WS_CONNECTION_START,
  wsSendMessage: WS_SEND_MESSAGE,
  onOpen: WS_CONNECTION_SUCCESS,
  onClose: WS_CONNECTION_CLOSED,
  onError: WS_CONNECTION_ERROR,
  onMessage: WS_GET_MESSAGE,
};

const wsActionsAll: TWSStoreActionsAll = {
  wsInitAll: WS_CONNECTION_START_ALL,
  wsSendMessageAll: WS_SEND_MESSAGE_ALL,
  onOpenAll: WS_CONNECTION_SUCCESS_ALL,
  onCloseAll: WS_CONNECTION_CLOSED_ALL,
  onErrorAll: WS_CONNECTION_ERROR_ALL,
  onMessageAll: WS_GET_MESSAGE_ALL,
};
const middlewareAll = socketMiddlewareAll(wsActionsAll);
const middleware = socketMiddleware(wsActions);

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(
      middleware,
      middlewareAll
    ),
});

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

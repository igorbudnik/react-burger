import {
  WS_CONNECTION_CLOSED,
  WS_CONNECTION_ERROR,
  WS_CONNECTION_SUCCESS,
  WS_GET_MESSAGE,
} from "../actions/socket";
import { initialState, wsReducer } from "./socket";

describe("initial socket reducer", () => {
  it("should return the initial state", () => {
    expect(wsReducer(undefined, {})).toEqual({
      ...initialState,
    });
  });
});

it("should get ws connection", () => {
  expect(
    wsReducer(
      {
        ...initialState,
      },
      { type: WS_CONNECTION_SUCCESS }
    )
  ).toEqual({
    ...initialState,
    wsConnected: true,
    error: undefined,
  });
});

it("should return error", () => {
  expect(
    wsReducer(
      {
        ...initialState,
      },
      { type: WS_CONNECTION_ERROR, payload: "Connection error" }
    )
  ).toEqual({
    ...initialState,
    error: "Connection error",
  });
});

it("should close ws connection", () => {
  expect(
    wsReducer(
      {
        ...initialState,
      },
      { type: WS_CONNECTION_CLOSED }
    )
  ).toEqual({
    ...initialState,
    error: undefined,
  });
});

it("should get message from ws", () => {
  expect(
    wsReducer(
      {
        ...initialState,
        wsConnected: true,
      },
      { type: WS_GET_MESSAGE, payload: { message: "Hello", ingredient: "bun" } }
    )
  ).toEqual({
    wsConnected: true,
    messages: [{ message: "Hello", ingredient: "bun" }],
    error: undefined,
  });
});

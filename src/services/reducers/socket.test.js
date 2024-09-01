import { error } from "console";
import {
  WS_CONNECTION_CLOSED,
  WS_CONNECTION_ERROR,
  WS_CONNECTION_SUCCESS,
  WS_GET_MESSAGE,
} from "../actions/socket";
import { wsReducer } from "./socket";

describe("initial socket reducer", () => {
  it("should return the initial state", () => {
    expect(wsReducer(undefined, {})).toEqual({
      wsConnected: false,
      messages: [],
    });
  });
});

it("should get ws connection", () => {
  expect(
    wsReducer(
      {
        wsConnected: false,
        messages: [],
      },
      { type: WS_CONNECTION_SUCCESS }
    )
  ).toEqual({
    wsConnected: true,
    messages: [],
    error: undefined,
  });
});

it("should return error", () => {
  expect(
    wsReducer(
      {
        wsConnected: false,
        messages: [],
      },
      { type: WS_CONNECTION_ERROR, payload: "Connection error" }
    )
  ).toEqual({
    wsConnected: false,
    messages: [],
    error: "Connection error",
  });
});

it("should close ws connection", () => {
  expect(
    wsReducer(
      {
        wsConnected: false,
        messages: [],
      },
      { type: WS_CONNECTION_CLOSED }
    )
  ).toEqual({
    wsConnected: false,
    messages: [],
    error: undefined,
  });
});

it("should get message from ws", () => {
  expect(
    wsReducer(
      {
        wsConnected: true,
        messages: [],
      },
      { type: WS_GET_MESSAGE, payload: { message: "Hello", ingredient: "bun" } }
    )
  ).toEqual({
    wsConnected: true,
    messages: [{ message: "Hello", ingredient: "bun" }],
    error: undefined,
  });
});

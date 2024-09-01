import { CLOSE_ORDER, SHOW_ORDER } from "../actions/modal";
import { initialState, orderReducer } from "./modal";

describe("modal opener reducer", () => {
  it("should return the initial state", () => {
    expect(orderReducer(undefined, {})).toEqual({
      ...initialState,
    });
  });
});

it("should open a modal", () => {
  expect(
    orderReducer([], {
      type: SHOW_ORDER,
    })
  ).toEqual({
    orderOpened: true,
  });
});

it("should close a modal", () => {
  expect(
    orderReducer([], {
      type: CLOSE_ORDER,
    })
  ).toEqual({
    orderOpened: false,
  });
});

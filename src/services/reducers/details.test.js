import { CLOSE_INGREDIENT, SHOW_INGREDIENT } from "../actions/details";
import { chosenIngredientReducer, initialState } from "./details";
import { cratorBun } from "./ingredients.test";

describe("chosen ingredient reducer", () => {
  it("should return the initial state", () => {
    expect(chosenIngredientReducer(undefined, {})).toEqual(initialState);
  });
});

it("should handle open modal with ingredient", () => {
  expect(
    chosenIngredientReducer(initialState, {
      type: SHOW_INGREDIENT,
      ingredient: [cratorBun],
    })
  ).toEqual({
    ingredient: [cratorBun],
    ingredientOpened: true,
  });
});

it("should handle close modal and return to initial state", () => {
  expect(
    chosenIngredientReducer([], {
      type: CLOSE_INGREDIENT,
    })
  ).toEqual({
    ingredient: { ...initialState.ingredient },
    ingredientOpened: false,
  });
});

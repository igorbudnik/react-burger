import { CLOSE_INGREDIENT, SHOW_INGREDIENT } from "../actions/details";
import { chosenIngredientReducer } from "./details";

describe("chosen ingredient reducer", () => {
  it("should return the initial state", () => {
    expect(chosenIngredientReducer(undefined, {})).toEqual({
      ingredient: {
        ingredients: [],
        _id: "",
        name: "",
        status: "",
        number: 0,
        createdAt: "",
        updatedAt: "",
      },
      ingredientOpened: false,
    });
  });
});

it("should handle open modal with ingredient", () => {
  expect(
    chosenIngredientReducer([], {
      type: SHOW_INGREDIENT,
      ingredient: [
        {
          _id: "643d69a5c3f7b9001cfa093c",
          name: "Краторная булка N-200i",
          type: "bun",
          proteins: 80,
          fat: 24,
          carbohydrates: 53,
          calories: 420,
          price: 1255,
          image: "https://code.s3.yandex.net/react/code/bun-02.png",
          image_mobile:
            "https://code.s3.yandex.net/react/code/bun-02-mobile.png",
          image_large: "https://code.s3.yandex.net/react/code/bun-02-large.png",
          __v: 0,
        },
      ],
    })
  ).toEqual({
    ingredient: [
      {
        __v: 0,
        _id: "643d69a5c3f7b9001cfa093c",
        calories: 420,
        carbohydrates: 53,
        fat: 24,
        image: "https://code.s3.yandex.net/react/code/bun-02.png",
        image_large: "https://code.s3.yandex.net/react/code/bun-02-large.png",
        image_mobile: "https://code.s3.yandex.net/react/code/bun-02-mobile.png",
        name: "Краторная булка N-200i",
        price: 1255,
        proteins: 80,
        type: "bun",
      },
    ],
    ingredientOpened: true,
  });
});

it("should handle close modal and return to initial state", () => {
  expect(
    chosenIngredientReducer([], {
      type: CLOSE_INGREDIENT,
    })
  ).toEqual({
    ingredient: {
      ingredients: [],
      _id: "",
      name: "",
      status: "",
      number: 0,
      createdAt: "",
      updatedAt: "",
    },
    ingredientOpened: false,
  });
});

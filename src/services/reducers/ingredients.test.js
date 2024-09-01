import {
  ADD_CONSTRUCTOR_ITEM,
  CHANGE_BUN,
  CHANGE_INGREDIENTS_PLACE,
  COMPARE_INGREDIENTS,
  DELETE_CONSTRUCTOR_ITEM,
  GET_INGREDIENTS_FAILED,
  GET_INGREDIENTS_REQUEST,
  GET_INGREDIENTS_SUCCESS,
  GET_ORDER_FAILED,
  GET_ORDER_REQUEST,
  GET_ORDER_SUCCESS,
} from "../actions/ingredients";
import { getIngredientsReducer } from "./ingredients";

describe("ingredients and orders reducer", () => {
  it("should return the initial state", () => {
    expect(getIngredientsReducer(undefined, {})).toEqual({
      allIngredients: [],
      modalIngredient: [],
      modalRequest: false,
      ingredientsRequest: false,
      ingredientsFailed: false,
      ingredientsConstructor: [],
      bun: null,
      orderRequest: false,
      orderFailed: false,
      orderNumber: "",
    });
  });
});

it("should find needed ingredient by id", () => {
  expect(
    getIngredientsReducer(
      {
        allIngredients: [
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
            image_large:
              "https://code.s3.yandex.net/react/code/bun-02-large.png",
            __v: 0,
          },
          {
            _id: "643d69a5c3f7b9001cfa0941",
            name: "Биокотлета из марсианской Магнолии",
            type: "main",
            proteins: 420,
            fat: 142,
            carbohydrates: 242,
            calories: 4242,
            price: 424,
            image: "https://code.s3.yandex.net/react/code/meat-01.png",
            image_mobile:
              "https://code.s3.yandex.net/react/code/meat-01-mobile.png",
            image_large:
              "https://code.s3.yandex.net/react/code/meat-01-large.png",
            __v: 0,
          },
          {
            _id: "643d69a5c3f7b9001cfa093e",
            name: "Филе Люминесцентного тетраодонтимформа",
            type: "main",
            proteins: 44,
            fat: 26,
            carbohydrates: 85,
            calories: 643,
            price: 988,
            image: "https://code.s3.yandex.net/react/code/meat-03.png",
            image_mobile:
              "https://code.s3.yandex.net/react/code/meat-03-mobile.png",
            image_large:
              "https://code.s3.yandex.net/react/code/meat-03-large.png",
            __v: 0,
          },
          {
            _id: "643d69a5c3f7b9001cfa0942",
            name: "Соус Spicy-X",
            type: "sauce",
            proteins: 30,
            fat: 20,
            carbohydrates: 40,
            calories: 30,
            price: 90,
            image: "https://code.s3.yandex.net/react/code/sauce-02.png",
            image_mobile:
              "https://code.s3.yandex.net/react/code/sauce-02-mobile.png",
            image_large:
              "https://code.s3.yandex.net/react/code/sauce-02-large.png",
            __v: 0,
          },
          {
            _id: "643d69a5c3f7b9001cfa0943",
            name: "Соус фирменный Space Sauce",
            type: "sauce",
            proteins: 50,
            fat: 22,
            carbohydrates: 11,
            calories: 14,
            price: 80,
            image: "https://code.s3.yandex.net/react/code/sauce-04.png",
            image_mobile:
              "https://code.s3.yandex.net/react/code/sauce-04-mobile.png",
            image_large:
              "https://code.s3.yandex.net/react/code/sauce-04-large.png",
            __v: 0,
          },
          {
            _id: "643d69a5c3f7b9001cfa093f",
            name: "Мясо бессмертных моллюсков Protostomia",
            type: "main",
            proteins: 433,
            fat: 244,
            carbohydrates: 33,
            calories: 420,
            price: 1337,
            image: "https://code.s3.yandex.net/react/code/meat-02.png",
            image_mobile:
              "https://code.s3.yandex.net/react/code/meat-02-mobile.png",
            image_large:
              "https://code.s3.yandex.net/react/code/meat-02-large.png",
            __v: 0,
          },
          {
            _id: "643d69a5c3f7b9001cfa0940",
            name: "Говяжий метеорит (отбивная)",
            type: "main",
            proteins: 800,
            fat: 800,
            carbohydrates: 300,
            calories: 2674,
            price: 3000,
            image: "https://code.s3.yandex.net/react/code/meat-04.png",
            image_mobile:
              "https://code.s3.yandex.net/react/code/meat-04-mobile.png",
            image_large:
              "https://code.s3.yandex.net/react/code/meat-04-large.png",
            __v: 0,
          },
          {
            _id: "643d69a5c3f7b9001cfa093d",
            name: "Флюоресцентная булка R2-D3",
            type: "bun",
            proteins: 44,
            fat: 26,
            carbohydrates: 85,
            calories: 643,
            price: 988,
            image: "https://code.s3.yandex.net/react/code/bun-01.png",
            image_mobile:
              "https://code.s3.yandex.net/react/code/bun-01-mobile.png",
            image_large:
              "https://code.s3.yandex.net/react/code/bun-01-large.png",
            __v: 0,
          },
          {
            _id: "643d69a5c3f7b9001cfa0944",
            name: "Соус традиционный галактический",
            type: "sauce",
            proteins: 42,
            fat: 24,
            carbohydrates: 42,
            calories: 99,
            price: 15,
            image: "https://code.s3.yandex.net/react/code/sauce-03.png",
            image_mobile:
              "https://code.s3.yandex.net/react/code/sauce-03-mobile.png",
            image_large:
              "https://code.s3.yandex.net/react/code/sauce-03-large.png",
            __v: 0,
          },
          {
            _id: "643d69a5c3f7b9001cfa0945",
            name: "Соус с шипами Антарианского плоскоходца",
            type: "sauce",
            proteins: 101,
            fat: 99,
            carbohydrates: 100,
            calories: 100,
            price: 88,
            image: "https://code.s3.yandex.net/react/code/sauce-01.png",
            image_mobile:
              "https://code.s3.yandex.net/react/code/sauce-01-mobile.png",
            image_large:
              "https://code.s3.yandex.net/react/code/sauce-01-large.png",
            __v: 0,
          },
          {
            _id: "643d69a5c3f7b9001cfa0946",
            name: "Хрустящие минеральные кольца",
            type: "main",
            proteins: 808,
            fat: 689,
            carbohydrates: 609,
            calories: 986,
            price: 300,
            image: "https://code.s3.yandex.net/react/code/mineral_rings.png",
            image_mobile:
              "https://code.s3.yandex.net/react/code/mineral_rings-mobile.png",
            image_large:
              "https://code.s3.yandex.net/react/code/mineral_rings-large.png",
            __v: 0,
          },
          {
            _id: "643d69a5c3f7b9001cfa0947",
            name: "Плоды Фалленианского дерева",
            type: "main",
            proteins: 20,
            fat: 5,
            carbohydrates: 55,
            calories: 77,
            price: 874,
            image: "https://code.s3.yandex.net/react/code/sp_1.png",
            image_mobile:
              "https://code.s3.yandex.net/react/code/sp_1-mobile.png",
            image_large: "https://code.s3.yandex.net/react/code/sp_1-large.png",
            __v: 0,
          },
          {
            _id: "643d69a5c3f7b9001cfa0948",
            name: "Кристаллы марсианских альфа-сахаридов",
            type: "main",
            proteins: 234,
            fat: 432,
            carbohydrates: 111,
            calories: 189,
            price: 762,
            image: "https://code.s3.yandex.net/react/code/core.png",
            image_mobile:
              "https://code.s3.yandex.net/react/code/core-mobile.png",
            image_large: "https://code.s3.yandex.net/react/code/core-large.png",
            __v: 0,
          },
          {
            _id: "643d69a5c3f7b9001cfa0949",
            name: "Мини-салат Экзо-Плантаго",
            type: "main",
            proteins: 1,
            fat: 2,
            carbohydrates: 3,
            calories: 6,
            price: 4400,
            image: "https://code.s3.yandex.net/react/code/salad.png",
            image_mobile:
              "https://code.s3.yandex.net/react/code/salad-mobile.png",
            image_large:
              "https://code.s3.yandex.net/react/code/salad-large.png",
            __v: 0,
          },
          {
            _id: "643d69a5c3f7b9001cfa094a",
            name: "Сыр с астероидной плесенью",
            type: "main",
            proteins: 84,
            fat: 48,
            carbohydrates: 420,
            calories: 3377,
            price: 4142,
            image: "https://code.s3.yandex.net/react/code/cheese.png",
            image_mobile:
              "https://code.s3.yandex.net/react/code/cheese-mobile.png",
            image_large:
              "https://code.s3.yandex.net/react/code/cheese-large.png",
            __v: 0,
          },
        ],
        modalIngredient: [],
        modalRequest: false,
        ingredientsRequest: false,
        ingredientsFailed: false,
        ingredientsConstructor: [],
        bun: null,
        orderRequest: false,
        orderFailed: false,
        orderNumber: "",
      },

      {
        type: COMPARE_INGREDIENTS,
        modalIngredientId: "643d69a5c3f7b9001cfa093c",
      }
    )
  ).toEqual({
    allIngredients: [
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
        image_mobile: "https://code.s3.yandex.net/react/code/bun-02-mobile.png",
        image_large: "https://code.s3.yandex.net/react/code/bun-02-large.png",
        __v: 0,
      },
      {
        _id: "643d69a5c3f7b9001cfa0941",
        name: "Биокотлета из марсианской Магнолии",
        type: "main",
        proteins: 420,
        fat: 142,
        carbohydrates: 242,
        calories: 4242,
        price: 424,
        image: "https://code.s3.yandex.net/react/code/meat-01.png",
        image_mobile:
          "https://code.s3.yandex.net/react/code/meat-01-mobile.png",
        image_large: "https://code.s3.yandex.net/react/code/meat-01-large.png",
        __v: 0,
      },
      {
        _id: "643d69a5c3f7b9001cfa093e",
        name: "Филе Люминесцентного тетраодонтимформа",
        type: "main",
        proteins: 44,
        fat: 26,
        carbohydrates: 85,
        calories: 643,
        price: 988,
        image: "https://code.s3.yandex.net/react/code/meat-03.png",
        image_mobile:
          "https://code.s3.yandex.net/react/code/meat-03-mobile.png",
        image_large: "https://code.s3.yandex.net/react/code/meat-03-large.png",
        __v: 0,
      },
      {
        _id: "643d69a5c3f7b9001cfa0942",
        name: "Соус Spicy-X",
        type: "sauce",
        proteins: 30,
        fat: 20,
        carbohydrates: 40,
        calories: 30,
        price: 90,
        image: "https://code.s3.yandex.net/react/code/sauce-02.png",
        image_mobile:
          "https://code.s3.yandex.net/react/code/sauce-02-mobile.png",
        image_large: "https://code.s3.yandex.net/react/code/sauce-02-large.png",
        __v: 0,
      },
      {
        _id: "643d69a5c3f7b9001cfa0943",
        name: "Соус фирменный Space Sauce",
        type: "sauce",
        proteins: 50,
        fat: 22,
        carbohydrates: 11,
        calories: 14,
        price: 80,
        image: "https://code.s3.yandex.net/react/code/sauce-04.png",
        image_mobile:
          "https://code.s3.yandex.net/react/code/sauce-04-mobile.png",
        image_large: "https://code.s3.yandex.net/react/code/sauce-04-large.png",
        __v: 0,
      },
      {
        _id: "643d69a5c3f7b9001cfa093f",
        name: "Мясо бессмертных моллюсков Protostomia",
        type: "main",
        proteins: 433,
        fat: 244,
        carbohydrates: 33,
        calories: 420,
        price: 1337,
        image: "https://code.s3.yandex.net/react/code/meat-02.png",
        image_mobile:
          "https://code.s3.yandex.net/react/code/meat-02-mobile.png",
        image_large: "https://code.s3.yandex.net/react/code/meat-02-large.png",
        __v: 0,
      },
      {
        _id: "643d69a5c3f7b9001cfa0940",
        name: "Говяжий метеорит (отбивная)",
        type: "main",
        proteins: 800,
        fat: 800,
        carbohydrates: 300,
        calories: 2674,
        price: 3000,
        image: "https://code.s3.yandex.net/react/code/meat-04.png",
        image_mobile:
          "https://code.s3.yandex.net/react/code/meat-04-mobile.png",
        image_large: "https://code.s3.yandex.net/react/code/meat-04-large.png",
        __v: 0,
      },
      {
        _id: "643d69a5c3f7b9001cfa093d",
        name: "Флюоресцентная булка R2-D3",
        type: "bun",
        proteins: 44,
        fat: 26,
        carbohydrates: 85,
        calories: 643,
        price: 988,
        image: "https://code.s3.yandex.net/react/code/bun-01.png",
        image_mobile: "https://code.s3.yandex.net/react/code/bun-01-mobile.png",
        image_large: "https://code.s3.yandex.net/react/code/bun-01-large.png",
        __v: 0,
      },
      {
        _id: "643d69a5c3f7b9001cfa0944",
        name: "Соус традиционный галактический",
        type: "sauce",
        proteins: 42,
        fat: 24,
        carbohydrates: 42,
        calories: 99,
        price: 15,
        image: "https://code.s3.yandex.net/react/code/sauce-03.png",
        image_mobile:
          "https://code.s3.yandex.net/react/code/sauce-03-mobile.png",
        image_large: "https://code.s3.yandex.net/react/code/sauce-03-large.png",
        __v: 0,
      },
      {
        _id: "643d69a5c3f7b9001cfa0945",
        name: "Соус с шипами Антарианского плоскоходца",
        type: "sauce",
        proteins: 101,
        fat: 99,
        carbohydrates: 100,
        calories: 100,
        price: 88,
        image: "https://code.s3.yandex.net/react/code/sauce-01.png",
        image_mobile:
          "https://code.s3.yandex.net/react/code/sauce-01-mobile.png",
        image_large: "https://code.s3.yandex.net/react/code/sauce-01-large.png",
        __v: 0,
      },
      {
        _id: "643d69a5c3f7b9001cfa0946",
        name: "Хрустящие минеральные кольца",
        type: "main",
        proteins: 808,
        fat: 689,
        carbohydrates: 609,
        calories: 986,
        price: 300,
        image: "https://code.s3.yandex.net/react/code/mineral_rings.png",
        image_mobile:
          "https://code.s3.yandex.net/react/code/mineral_rings-mobile.png",
        image_large:
          "https://code.s3.yandex.net/react/code/mineral_rings-large.png",
        __v: 0,
      },
      {
        _id: "643d69a5c3f7b9001cfa0947",
        name: "Плоды Фалленианского дерева",
        type: "main",
        proteins: 20,
        fat: 5,
        carbohydrates: 55,
        calories: 77,
        price: 874,
        image: "https://code.s3.yandex.net/react/code/sp_1.png",
        image_mobile: "https://code.s3.yandex.net/react/code/sp_1-mobile.png",
        image_large: "https://code.s3.yandex.net/react/code/sp_1-large.png",
        __v: 0,
      },
      {
        _id: "643d69a5c3f7b9001cfa0948",
        name: "Кристаллы марсианских альфа-сахаридов",
        type: "main",
        proteins: 234,
        fat: 432,
        carbohydrates: 111,
        calories: 189,
        price: 762,
        image: "https://code.s3.yandex.net/react/code/core.png",
        image_mobile: "https://code.s3.yandex.net/react/code/core-mobile.png",
        image_large: "https://code.s3.yandex.net/react/code/core-large.png",
        __v: 0,
      },
      {
        _id: "643d69a5c3f7b9001cfa0949",
        name: "Мини-салат Экзо-Плантаго",
        type: "main",
        proteins: 1,
        fat: 2,
        carbohydrates: 3,
        calories: 6,
        price: 4400,
        image: "https://code.s3.yandex.net/react/code/salad.png",
        image_mobile: "https://code.s3.yandex.net/react/code/salad-mobile.png",
        image_large: "https://code.s3.yandex.net/react/code/salad-large.png",
        __v: 0,
      },
      {
        _id: "643d69a5c3f7b9001cfa094a",
        name: "Сыр с астероидной плесенью",
        type: "main",
        proteins: 84,
        fat: 48,
        carbohydrates: 420,
        calories: 3377,
        price: 4142,
        image: "https://code.s3.yandex.net/react/code/cheese.png",
        image_mobile: "https://code.s3.yandex.net/react/code/cheese-mobile.png",
        image_large: "https://code.s3.yandex.net/react/code/cheese-large.png",
        __v: 0,
      },
    ],
    modalIngredient: [
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
        image_mobile: "https://code.s3.yandex.net/react/code/bun-02-mobile.png",
        image_large: "https://code.s3.yandex.net/react/code/bun-02-large.png",
        __v: 0,
      },
    ],
    modalRequest: false,
    ingredientsRequest: false,
    ingredientsFailed: false,
    ingredientsConstructor: [],
    bun: null,
    orderRequest: false,
    orderFailed: false,
    orderNumber: "",
  });
});

it("should start call api", () => {
  expect(
    getIngredientsReducer(
      {
        allIngredients: [],
        modalIngredient: [],
        modalRequest: false,
        ingredientsRequest: false,
        ingredientsFailed: false,
        ingredientsConstructor: [],
        bun: null,
        orderRequest: false,
        orderFailed: false,
        orderNumber: "",
      },
      {
        type: GET_INGREDIENTS_REQUEST,
      }
    )
  ).toEqual({
    allIngredients: [],
    modalIngredient: [],
    modalRequest: false,
    ingredientsRequest: false,
    ingredientsFailed: false,
    ingredientsConstructor: [],
    bun: null,
    orderRequest: false,
    orderFailed: false,
    orderNumber: "",
  });
});

it("should get ingredients from api", () => {
  expect(
    getIngredientsReducer(
      {
        allIngredients: [],
        modalIngredient: [],
        modalRequest: false,
        ingredientsRequest: false,
        ingredientsFailed: false,
        ingredientsConstructor: [],
        bun: null,
        orderRequest: false,
        orderFailed: false,
        orderNumber: "",
      },
      {
        type: GET_INGREDIENTS_SUCCESS,
        ingredients: [
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
            image_large:
              "https://code.s3.yandex.net/react/code/bun-02-large.png",
            __v: 0,
          },
        ],
      }
    )
  ).toEqual({
    allIngredients: [
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
        image_mobile: "https://code.s3.yandex.net/react/code/bun-02-mobile.png",
        image_large: "https://code.s3.yandex.net/react/code/bun-02-large.png",
        __v: 0,
      },
    ],
    modalIngredient: [],
    modalRequest: false,
    ingredientsRequest: true,
    ingredientsFailed: false,
    ingredientsConstructor: [],
    bun: null,
    orderRequest: false,
    orderFailed: false,
    orderNumber: "",
  });
});

it("should start call api", () => {
  expect(
    getIngredientsReducer(
      {
        allIngredients: [],
        modalIngredient: [],
        modalRequest: false,
        ingredientsRequest: false,
        ingredientsFailed: false,
        ingredientsConstructor: [],
        bun: null,
        orderRequest: false,
        orderFailed: false,
        orderNumber: "",
      },
      {
        type: GET_INGREDIENTS_FAILED,
      }
    )
  ).toEqual({
    allIngredients: [],
    modalIngredient: [],
    modalRequest: false,
    ingredientsRequest: true,
    ingredientsFailed: true,
    ingredientsConstructor: [],
    bun: null,
    orderRequest: false,
    orderFailed: false,
    orderNumber: "",
  });
});

it("should find needed ingredient by id", () => {
  expect(
    getIngredientsReducer(
      {
        allIngredients: [
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
            image_large:
              "https://code.s3.yandex.net/react/code/bun-02-large.png",
            __v: 0,
          },
          {
            _id: "643d69a5c3f7b9001cfa0941",
            name: "Биокотлета из марсианской Магнолии",
            type: "main",
            proteins: 420,
            fat: 142,
            carbohydrates: 242,
            calories: 4242,
            price: 424,
            image: "https://code.s3.yandex.net/react/code/meat-01.png",
            image_mobile:
              "https://code.s3.yandex.net/react/code/meat-01-mobile.png",
            image_large:
              "https://code.s3.yandex.net/react/code/meat-01-large.png",
            __v: 0,
          },
          {
            _id: "643d69a5c3f7b9001cfa093e",
            name: "Филе Люминесцентного тетраодонтимформа",
            type: "main",
            proteins: 44,
            fat: 26,
            carbohydrates: 85,
            calories: 643,
            price: 988,
            image: "https://code.s3.yandex.net/react/code/meat-03.png",
            image_mobile:
              "https://code.s3.yandex.net/react/code/meat-03-mobile.png",
            image_large:
              "https://code.s3.yandex.net/react/code/meat-03-large.png",
            __v: 0,
          },
          {
            _id: "643d69a5c3f7b9001cfa0942",
            name: "Соус Spicy-X",
            type: "sauce",
            proteins: 30,
            fat: 20,
            carbohydrates: 40,
            calories: 30,
            price: 90,
            image: "https://code.s3.yandex.net/react/code/sauce-02.png",
            image_mobile:
              "https://code.s3.yandex.net/react/code/sauce-02-mobile.png",
            image_large:
              "https://code.s3.yandex.net/react/code/sauce-02-large.png",
            __v: 0,
          },
          {
            _id: "643d69a5c3f7b9001cfa0943",
            name: "Соус фирменный Space Sauce",
            type: "sauce",
            proteins: 50,
            fat: 22,
            carbohydrates: 11,
            calories: 14,
            price: 80,
            image: "https://code.s3.yandex.net/react/code/sauce-04.png",
            image_mobile:
              "https://code.s3.yandex.net/react/code/sauce-04-mobile.png",
            image_large:
              "https://code.s3.yandex.net/react/code/sauce-04-large.png",
            __v: 0,
          },
          {
            _id: "643d69a5c3f7b9001cfa093f",
            name: "Мясо бессмертных моллюсков Protostomia",
            type: "main",
            proteins: 433,
            fat: 244,
            carbohydrates: 33,
            calories: 420,
            price: 1337,
            image: "https://code.s3.yandex.net/react/code/meat-02.png",
            image_mobile:
              "https://code.s3.yandex.net/react/code/meat-02-mobile.png",
            image_large:
              "https://code.s3.yandex.net/react/code/meat-02-large.png",
            __v: 0,
          },
          {
            _id: "643d69a5c3f7b9001cfa0940",
            name: "Говяжий метеорит (отбивная)",
            type: "main",
            proteins: 800,
            fat: 800,
            carbohydrates: 300,
            calories: 2674,
            price: 3000,
            image: "https://code.s3.yandex.net/react/code/meat-04.png",
            image_mobile:
              "https://code.s3.yandex.net/react/code/meat-04-mobile.png",
            image_large:
              "https://code.s3.yandex.net/react/code/meat-04-large.png",
            __v: 0,
          },
          {
            _id: "643d69a5c3f7b9001cfa093d",
            name: "Флюоресцентная булка R2-D3",
            type: "bun",
            proteins: 44,
            fat: 26,
            carbohydrates: 85,
            calories: 643,
            price: 988,
            image: "https://code.s3.yandex.net/react/code/bun-01.png",
            image_mobile:
              "https://code.s3.yandex.net/react/code/bun-01-mobile.png",
            image_large:
              "https://code.s3.yandex.net/react/code/bun-01-large.png",
            __v: 0,
          },
          {
            _id: "643d69a5c3f7b9001cfa0944",
            name: "Соус традиционный галактический",
            type: "sauce",
            proteins: 42,
            fat: 24,
            carbohydrates: 42,
            calories: 99,
            price: 15,
            image: "https://code.s3.yandex.net/react/code/sauce-03.png",
            image_mobile:
              "https://code.s3.yandex.net/react/code/sauce-03-mobile.png",
            image_large:
              "https://code.s3.yandex.net/react/code/sauce-03-large.png",
            __v: 0,
          },
          {
            _id: "643d69a5c3f7b9001cfa0945",
            name: "Соус с шипами Антарианского плоскоходца",
            type: "sauce",
            proteins: 101,
            fat: 99,
            carbohydrates: 100,
            calories: 100,
            price: 88,
            image: "https://code.s3.yandex.net/react/code/sauce-01.png",
            image_mobile:
              "https://code.s3.yandex.net/react/code/sauce-01-mobile.png",
            image_large:
              "https://code.s3.yandex.net/react/code/sauce-01-large.png",
            __v: 0,
          },
          {
            _id: "643d69a5c3f7b9001cfa0946",
            name: "Хрустящие минеральные кольца",
            type: "main",
            proteins: 808,
            fat: 689,
            carbohydrates: 609,
            calories: 986,
            price: 300,
            image: "https://code.s3.yandex.net/react/code/mineral_rings.png",
            image_mobile:
              "https://code.s3.yandex.net/react/code/mineral_rings-mobile.png",
            image_large:
              "https://code.s3.yandex.net/react/code/mineral_rings-large.png",
            __v: 0,
          },
          {
            _id: "643d69a5c3f7b9001cfa0947",
            name: "Плоды Фалленианского дерева",
            type: "main",
            proteins: 20,
            fat: 5,
            carbohydrates: 55,
            calories: 77,
            price: 874,
            image: "https://code.s3.yandex.net/react/code/sp_1.png",
            image_mobile:
              "https://code.s3.yandex.net/react/code/sp_1-mobile.png",
            image_large: "https://code.s3.yandex.net/react/code/sp_1-large.png",
            __v: 0,
          },
          {
            _id: "643d69a5c3f7b9001cfa0948",
            name: "Кристаллы марсианских альфа-сахаридов",
            type: "main",
            proteins: 234,
            fat: 432,
            carbohydrates: 111,
            calories: 189,
            price: 762,
            image: "https://code.s3.yandex.net/react/code/core.png",
            image_mobile:
              "https://code.s3.yandex.net/react/code/core-mobile.png",
            image_large: "https://code.s3.yandex.net/react/code/core-large.png",
            __v: 0,
          },
          {
            _id: "643d69a5c3f7b9001cfa0949",
            name: "Мини-салат Экзо-Плантаго",
            type: "main",
            proteins: 1,
            fat: 2,
            carbohydrates: 3,
            calories: 6,
            price: 4400,
            image: "https://code.s3.yandex.net/react/code/salad.png",
            image_mobile:
              "https://code.s3.yandex.net/react/code/salad-mobile.png",
            image_large:
              "https://code.s3.yandex.net/react/code/salad-large.png",
            __v: 0,
          },
          {
            _id: "643d69a5c3f7b9001cfa094a",
            name: "Сыр с астероидной плесенью",
            type: "main",
            proteins: 84,
            fat: 48,
            carbohydrates: 420,
            calories: 3377,
            price: 4142,
            image: "https://code.s3.yandex.net/react/code/cheese.png",
            image_mobile:
              "https://code.s3.yandex.net/react/code/cheese-mobile.png",
            image_large:
              "https://code.s3.yandex.net/react/code/cheese-large.png",
            __v: 0,
          },
        ],
        modalIngredient: [],
        modalRequest: false,
        ingredientsRequest: false,
        ingredientsFailed: false,
        ingredientsConstructor: [],
        bun: null,
        orderRequest: false,
        orderFailed: false,
        orderNumber: "",
      },

      {
        type: ADD_CONSTRUCTOR_ITEM,
        payload: {
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
      }
    )
  ).toEqual({
    allIngredients: [
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
        image_mobile: "https://code.s3.yandex.net/react/code/bun-02-mobile.png",
        image_large: "https://code.s3.yandex.net/react/code/bun-02-large.png",
        __v: 2,
      },
      {
        _id: "643d69a5c3f7b9001cfa0941",
        name: "Биокотлета из марсианской Магнолии",
        type: "main",
        proteins: 420,
        fat: 142,
        carbohydrates: 242,
        calories: 4242,
        price: 424,
        image: "https://code.s3.yandex.net/react/code/meat-01.png",
        image_mobile:
          "https://code.s3.yandex.net/react/code/meat-01-mobile.png",
        image_large: "https://code.s3.yandex.net/react/code/meat-01-large.png",
        __v: 0,
      },
      {
        _id: "643d69a5c3f7b9001cfa093e",
        name: "Филе Люминесцентного тетраодонтимформа",
        type: "main",
        proteins: 44,
        fat: 26,
        carbohydrates: 85,
        calories: 643,
        price: 988,
        image: "https://code.s3.yandex.net/react/code/meat-03.png",
        image_mobile:
          "https://code.s3.yandex.net/react/code/meat-03-mobile.png",
        image_large: "https://code.s3.yandex.net/react/code/meat-03-large.png",
        __v: 0,
      },
      {
        _id: "643d69a5c3f7b9001cfa0942",
        name: "Соус Spicy-X",
        type: "sauce",
        proteins: 30,
        fat: 20,
        carbohydrates: 40,
        calories: 30,
        price: 90,
        image: "https://code.s3.yandex.net/react/code/sauce-02.png",
        image_mobile:
          "https://code.s3.yandex.net/react/code/sauce-02-mobile.png",
        image_large: "https://code.s3.yandex.net/react/code/sauce-02-large.png",
        __v: 0,
      },
      {
        _id: "643d69a5c3f7b9001cfa0943",
        name: "Соус фирменный Space Sauce",
        type: "sauce",
        proteins: 50,
        fat: 22,
        carbohydrates: 11,
        calories: 14,
        price: 80,
        image: "https://code.s3.yandex.net/react/code/sauce-04.png",
        image_mobile:
          "https://code.s3.yandex.net/react/code/sauce-04-mobile.png",
        image_large: "https://code.s3.yandex.net/react/code/sauce-04-large.png",
        __v: 0,
      },
      {
        _id: "643d69a5c3f7b9001cfa093f",
        name: "Мясо бессмертных моллюсков Protostomia",
        type: "main",
        proteins: 433,
        fat: 244,
        carbohydrates: 33,
        calories: 420,
        price: 1337,
        image: "https://code.s3.yandex.net/react/code/meat-02.png",
        image_mobile:
          "https://code.s3.yandex.net/react/code/meat-02-mobile.png",
        image_large: "https://code.s3.yandex.net/react/code/meat-02-large.png",
        __v: 0,
      },
      {
        _id: "643d69a5c3f7b9001cfa0940",
        name: "Говяжий метеорит (отбивная)",
        type: "main",
        proteins: 800,
        fat: 800,
        carbohydrates: 300,
        calories: 2674,
        price: 3000,
        image: "https://code.s3.yandex.net/react/code/meat-04.png",
        image_mobile:
          "https://code.s3.yandex.net/react/code/meat-04-mobile.png",
        image_large: "https://code.s3.yandex.net/react/code/meat-04-large.png",
        __v: 0,
      },
      {
        _id: "643d69a5c3f7b9001cfa093d",
        name: "Флюоресцентная булка R2-D3",
        type: "bun",
        proteins: 44,
        fat: 26,
        carbohydrates: 85,
        calories: 643,
        price: 988,
        image: "https://code.s3.yandex.net/react/code/bun-01.png",
        image_mobile: "https://code.s3.yandex.net/react/code/bun-01-mobile.png",
        image_large: "https://code.s3.yandex.net/react/code/bun-01-large.png",
        __v: 0,
      },
      {
        _id: "643d69a5c3f7b9001cfa0944",
        name: "Соус традиционный галактический",
        type: "sauce",
        proteins: 42,
        fat: 24,
        carbohydrates: 42,
        calories: 99,
        price: 15,
        image: "https://code.s3.yandex.net/react/code/sauce-03.png",
        image_mobile:
          "https://code.s3.yandex.net/react/code/sauce-03-mobile.png",
        image_large: "https://code.s3.yandex.net/react/code/sauce-03-large.png",
        __v: 0,
      },
      {
        _id: "643d69a5c3f7b9001cfa0945",
        name: "Соус с шипами Антарианского плоскоходца",
        type: "sauce",
        proteins: 101,
        fat: 99,
        carbohydrates: 100,
        calories: 100,
        price: 88,
        image: "https://code.s3.yandex.net/react/code/sauce-01.png",
        image_mobile:
          "https://code.s3.yandex.net/react/code/sauce-01-mobile.png",
        image_large: "https://code.s3.yandex.net/react/code/sauce-01-large.png",
        __v: 0,
      },
      {
        _id: "643d69a5c3f7b9001cfa0946",
        name: "Хрустящие минеральные кольца",
        type: "main",
        proteins: 808,
        fat: 689,
        carbohydrates: 609,
        calories: 986,
        price: 300,
        image: "https://code.s3.yandex.net/react/code/mineral_rings.png",
        image_mobile:
          "https://code.s3.yandex.net/react/code/mineral_rings-mobile.png",
        image_large:
          "https://code.s3.yandex.net/react/code/mineral_rings-large.png",
        __v: 0,
      },
      {
        _id: "643d69a5c3f7b9001cfa0947",
        name: "Плоды Фалленианского дерева",
        type: "main",
        proteins: 20,
        fat: 5,
        carbohydrates: 55,
        calories: 77,
        price: 874,
        image: "https://code.s3.yandex.net/react/code/sp_1.png",
        image_mobile: "https://code.s3.yandex.net/react/code/sp_1-mobile.png",
        image_large: "https://code.s3.yandex.net/react/code/sp_1-large.png",
        __v: 0,
      },
      {
        _id: "643d69a5c3f7b9001cfa0948",
        name: "Кристаллы марсианских альфа-сахаридов",
        type: "main",
        proteins: 234,
        fat: 432,
        carbohydrates: 111,
        calories: 189,
        price: 762,
        image: "https://code.s3.yandex.net/react/code/core.png",
        image_mobile: "https://code.s3.yandex.net/react/code/core-mobile.png",
        image_large: "https://code.s3.yandex.net/react/code/core-large.png",
        __v: 0,
      },
      {
        _id: "643d69a5c3f7b9001cfa0949",
        name: "Мини-салат Экзо-Плантаго",
        type: "main",
        proteins: 1,
        fat: 2,
        carbohydrates: 3,
        calories: 6,
        price: 4400,
        image: "https://code.s3.yandex.net/react/code/salad.png",
        image_mobile: "https://code.s3.yandex.net/react/code/salad-mobile.png",
        image_large: "https://code.s3.yandex.net/react/code/salad-large.png",
        __v: 0,
      },
      {
        _id: "643d69a5c3f7b9001cfa094a",
        name: "Сыр с астероидной плесенью",
        type: "main",
        proteins: 84,
        fat: 48,
        carbohydrates: 420,
        calories: 3377,
        price: 4142,
        image: "https://code.s3.yandex.net/react/code/cheese.png",
        image_mobile: "https://code.s3.yandex.net/react/code/cheese-mobile.png",
        image_large: "https://code.s3.yandex.net/react/code/cheese-large.png",
        __v: 0,
      },
    ],
    modalIngredient: [],
    modalRequest: false,
    ingredientsRequest: false,
    ingredientsFailed: false,
    ingredientsConstructor: [],
    bun: {
      _id: "643d69a5c3f7b9001cfa093c",
      name: "Краторная булка N-200i",
      type: "bun",
      proteins: 80,
      fat: 24,
      carbohydrates: 53,
      calories: 420,
      price: 1255,
      image: "https://code.s3.yandex.net/react/code/bun-02.png",
      image_mobile: "https://code.s3.yandex.net/react/code/bun-02-mobile.png",
      image_large: "https://code.s3.yandex.net/react/code/bun-02-large.png",
      __v: 0,
    },
    orderRequest: false,
    orderFailed: false,
    orderNumber: "",
  });
});

it("should change buns", () => {
  expect(
    getIngredientsReducer(
      {
        allIngredients: [],
        modalIngredient: [],
        modalRequest: false,
        ingredientsRequest: false,
        ingredientsFailed: false,
        ingredientsConstructor: [],
        bun: {
          _id: "643d69a5c3f7b9001cfa093d",
          name: "Флюоресцентная булка R2-D3",
          type: "bun",
          proteins: 44,
          fat: 26,
          carbohydrates: 85,
          calories: 643,
          price: 988,
          image: "https://code.s3.yandex.net/react/code/bun-01.png",
          image_mobile:
            "https://code.s3.yandex.net/react/code/bun-01-mobile.png",
          image_large: "https://code.s3.yandex.net/react/code/bun-01-large.png",
          __v: 2,
        },
        orderRequest: false,
        orderFailed: false,
        orderNumber: "",
      },
      {
        type: CHANGE_BUN,
        payload: {
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
      }
    )
  ).toEqual({
    allIngredients: [],
    modalIngredient: [],
    modalRequest: false,
    ingredientsRequest: false,
    ingredientsFailed: false,
    ingredientsConstructor: [],
    bun: {
      _id: "643d69a5c3f7b9001cfa093c",
      name: "Краторная булка N-200i",
      type: "bun",
      proteins: 80,
      fat: 24,
      carbohydrates: 53,
      calories: 420,
      price: 1255,
      image: "https://code.s3.yandex.net/react/code/bun-02.png",
      image_mobile: "https://code.s3.yandex.net/react/code/bun-02-mobile.png",
      image_large: "https://code.s3.yandex.net/react/code/bun-02-large.png",
      __v: 0,
    },
    orderRequest: false,
    orderFailed: false,
    orderNumber: "",
  });
});

it("should delete ingredient by uid", () => {
  expect(
    getIngredientsReducer(
      {
        allIngredients: [
          {
            _id: "643d69a5c3f7b9001cfa0944",
            name: "Соус традиционный галактический",
            type: "sauce",
            proteins: 42,
            fat: 24,
            carbohydrates: 42,
            calories: 99,
            price: 15,
            image: "https://code.s3.yandex.net/react/code/sauce-03.png",
            image_mobile:
              "https://code.s3.yandex.net/react/code/sauce-03-mobile.png",
            image_large:
              "https://code.s3.yandex.net/react/code/sauce-03-large.png",
            __v: 1,
            uid: "qwerty",
          },
        ],
        modalIngredient: [],
        modalRequest: false,
        ingredientsRequest: false,
        ingredientsFailed: false,
        ingredientsConstructor: [],
        bun: null,
        orderRequest: false,
        orderFailed: false,
        orderNumber: "",
      },

      {
        type: DELETE_CONSTRUCTOR_ITEM,
        payload: {
          _id: "643d69a5c3f7b9001cfa0944",
          name: "Соус традиционный галактический",
          type: "sauce",
          proteins: 42,
          fat: 24,
          carbohydrates: 42,
          calories: 99,
          price: 15,
          image: "https://code.s3.yandex.net/react/code/sauce-03.png",
          image_mobile:
            "https://code.s3.yandex.net/react/code/sauce-03-mobile.png",
          image_large:
            "https://code.s3.yandex.net/react/code/sauce-03-large.png",
          __v: 0,
          uid: "qwerty",
        },
      }
    )
  ).toEqual({
    allIngredients: [
      {
        _id: "643d69a5c3f7b9001cfa0944",
        name: "Соус традиционный галактический",
        type: "sauce",
        proteins: 42,
        fat: 24,
        carbohydrates: 42,
        calories: 99,
        price: 15,
        image: "https://code.s3.yandex.net/react/code/sauce-03.png",
        image_mobile:
          "https://code.s3.yandex.net/react/code/sauce-03-mobile.png",
        image_large: "https://code.s3.yandex.net/react/code/sauce-03-large.png",
        __v: 0,
        uid: "qwerty",
      },
    ],
    modalIngredient: [],
    modalRequest: false,
    ingredientsRequest: false,
    ingredientsFailed: false,
    ingredientsConstructor: [],
    bun: null,
    orderRequest: false,
    orderFailed: false,
    orderNumber: "",
  });
});

it("should start call order api", () => {
  expect(
    getIngredientsReducer(
      {
        allIngredients: [],
        modalIngredient: [],
        modalRequest: false,
        ingredientsRequest: false,
        ingredientsFailed: false,
        ingredientsConstructor: [],
        bun: null,
        orderRequest: false,
        orderFailed: false,
        orderNumber: "",
      },
      {
        type: GET_ORDER_REQUEST,
      }
    )
  ).toEqual({
    allIngredients: [],
    modalIngredient: [],
    modalRequest: false,
    ingredientsRequest: false,
    ingredientsFailed: false,
    ingredientsConstructor: [],
    bun: null,
    orderRequest: false,
    orderFailed: false,
    orderNumber: "",
  });
});

it("should get order from api", () => {
  expect(
    getIngredientsReducer(
      {
        allIngredients: [],
        modalIngredient: [],
        modalRequest: false,
        ingredientsRequest: false,
        ingredientsFailed: false,
        ingredientsConstructor: [],
        bun: null,
        orderRequest: false,
        orderFailed: false,
        orderNumber: "",
      },
      {
        type: GET_ORDER_SUCCESS,
        orderNumber: "12345",
      }
    )
  ).toEqual({
    allIngredients: [],
    modalIngredient: [],
    modalRequest: false,
    ingredientsRequest: false,
    ingredientsFailed: false,
    ingredientsConstructor: [],
    bun: null,
    orderRequest: true,
    orderFailed: false,
    orderNumber: "12345",
  });
});

it("should fail call order api", () => {
  expect(
    getIngredientsReducer(
      {
        allIngredients: [],
        modalIngredient: [],
        modalRequest: false,
        ingredientsRequest: false,
        ingredientsFailed: false,
        ingredientsConstructor: [],
        bun: null,
        orderRequest: false,
        orderFailed: false,
        orderNumber: "",
      },
      {
        type: GET_ORDER_FAILED,
      }
    )
  ).toEqual({
    allIngredients: [],
    modalIngredient: [],
    modalRequest: false,
    ingredientsRequest: false,
    ingredientsFailed: false,
    ingredientsConstructor: [],
    bun: null,
    orderRequest: true,
    orderFailed: true,
    orderNumber: "",
  });
});

it("should change places of ingredients", () => {
  expect(
    getIngredientsReducer(
      {
        allIngredients: [],
        modalIngredient: [],
        modalRequest: false,
        ingredientsRequest: false,
        ingredientsFailed: false,
        ingredientsConstructor: [
          {
            _id: "643d69a5c3f7b9001cfa0941",
            name: "Биокотлета из марсианской Магнолии",
            type: "main",
            proteins: 420,
            fat: 142,
            carbohydrates: 242,
            calories: 4242,
            price: 424,
            image: "https://code.s3.yandex.net/react/code/meat-01.png",
            image_mobile:
              "https://code.s3.yandex.net/react/code/meat-01-mobile.png",
            image_large:
              "https://code.s3.yandex.net/react/code/meat-01-large.png",
            __v: 0,
          },
          {
            _id: "643d69a5c3f7b9001cfa093e",
            name: "Филе Люминесцентного тетраодонтимформа",
            type: "main",
            proteins: 44,
            fat: 26,
            carbohydrates: 85,
            calories: 643,
            price: 988,
            image: "https://code.s3.yandex.net/react/code/meat-03.png",
            image_mobile:
              "https://code.s3.yandex.net/react/code/meat-03-mobile.png",
            image_large:
              "https://code.s3.yandex.net/react/code/meat-03-large.png",
            __v: 0,
          },
        ],
        bun: null,
        orderRequest: false,
        orderFailed: false,
        orderNumber: "",
      },
      {
        type: CHANGE_INGREDIENTS_PLACE,
        ingredients: [
          {
            _id: "643d69a5c3f7b9001cfa093e",
            name: "Филе Люминесцентного тетраодонтимформа",
            type: "main",
            proteins: 44,
            fat: 26,
            carbohydrates: 85,
            calories: 643,
            price: 988,
            image: "https://code.s3.yandex.net/react/code/meat-03.png",
            image_mobile:
              "https://code.s3.yandex.net/react/code/meat-03-mobile.png",
            image_large:
              "https://code.s3.yandex.net/react/code/meat-03-large.png",
            __v: 0,
          },
          {
            _id: "643d69a5c3f7b9001cfa0941",
            name: "Биокотлета из марсианской Магнолии",
            type: "main",
            proteins: 420,
            fat: 142,
            carbohydrates: 242,
            calories: 4242,
            price: 424,
            image: "https://code.s3.yandex.net/react/code/meat-01.png",
            image_mobile:
              "https://code.s3.yandex.net/react/code/meat-01-mobile.png",
            image_large:
              "https://code.s3.yandex.net/react/code/meat-01-large.png",
            __v: 0,
          },
        ],
      }
    )
  ).toEqual({
    allIngredients: [],
    modalIngredient: [],
    modalRequest: false,
    ingredientsRequest: false,
    ingredientsFailed: false,
    ingredientsConstructor: [
      {
        _id: "643d69a5c3f7b9001cfa093e",
        name: "Филе Люминесцентного тетраодонтимформа",
        type: "main",
        proteins: 44,
        fat: 26,
        carbohydrates: 85,
        calories: 643,
        price: 988,
        image: "https://code.s3.yandex.net/react/code/meat-03.png",
        image_mobile:
          "https://code.s3.yandex.net/react/code/meat-03-mobile.png",
        image_large: "https://code.s3.yandex.net/react/code/meat-03-large.png",
        __v: 0,
      },
      {
        _id: "643d69a5c3f7b9001cfa0941",
        name: "Биокотлета из марсианской Магнолии",
        type: "main",
        proteins: 420,
        fat: 142,
        carbohydrates: 242,
        calories: 4242,
        price: 424,
        image: "https://code.s3.yandex.net/react/code/meat-01.png",
        image_mobile:
          "https://code.s3.yandex.net/react/code/meat-01-mobile.png",
        image_large: "https://code.s3.yandex.net/react/code/meat-01-large.png",
        __v: 0,
      },
    ],
    bun: null,
    orderRequest: false,
    orderFailed: false,
    orderNumber: "",
  });
});

import {
  GET_INGREDIENTS_REQUEST,
  GET_INGREDIENTS_SUCCESS,
  GET_INGREDIENTS_FAILED,
  ADD_CONSTRUCTOR_ITEM,
  DELETE_CONSTRUCTOR_ITEM,
  CHANGE_BUN,
  GET_ORDER_REQUEST,
  GET_ORDER_FAILED,
  GET_ORDER_SUCCESS,
  CHANGE_INGREDIENTS_PLACE,
} from "../actions/ingredients";
import { Ingredient } from "../../components/App/app";

type ActionType = {
  type: string;
  ingredients: Ingredient[];
  payload: Ingredient;
  orderNumber: string;
};

interface Initial {
  allIngredients: Ingredient[];
  ingredientsRequest: boolean;
  ingredientsFailed: boolean;

  ingredientsConstructor: Ingredient[];
  bun: any;

  orderRequest: boolean;
  orderFailed: boolean;
  orderNumber: string;
}

const initialState: Initial = {
  allIngredients: [],
  ingredientsRequest: false,
  ingredientsFailed: false,
  ingredientsConstructor: [],
  bun: null,
  orderRequest: false,
  orderFailed: false,
  orderNumber: "",
};

export const getIngredientsReducer = (
  state = initialState,
  action: ActionType
) => {
  switch (action.type) {
    case GET_INGREDIENTS_REQUEST: {
      return {
        ...state,
      };
    }
    case GET_INGREDIENTS_SUCCESS: {
      return {
        ...state,
        allIngredients: [...action.ingredients],
        ingredientsFailed: false,
        ingredientsRequest: true,
      };
    }
    case GET_INGREDIENTS_FAILED: {
      return {
        ...state,
        ingredientsFailed: true,
        ingredientsRequest: true,
      };
    }
    case ADD_CONSTRUCTOR_ITEM: {
      if (action.payload.type === "bun") {
        return {
          ...state,
          bun: action.payload,
          allIngredients: [...state.allIngredients].map((ingredient) => {
            if (ingredient._id === action.payload._id && ingredient.__v !== 2) {
              return { ...ingredient, __v: ingredient.__v + 2 };
            }
            return ingredient;
          }),
        };
      }
      return {
        ...state,
        allIngredients: [...state.allIngredients].map((ingredient) => {
          if (ingredient._id === action.payload._id) {
            return { ...ingredient, __v: ingredient.__v + 1 };
          }
          return ingredient;
        }),
        ingredientsConstructor: [
          ...state.ingredientsConstructor,
          action.payload,
        ],
      };
    }
    case CHANGE_BUN: {
      if (action.payload.type === "bun") {
        return {
          ...state,
          bun: action.payload,
          allIngredients: [...state.allIngredients].map((ingredient) => {
            if (ingredient.__v === 2 && ingredient.type === "bun") {
              console.log(123);

              return { ...ingredient, __v: ingredient.__v - 2 };
            }
            return ingredient;
          }),
        };
      }
      return state;
    }
    case DELETE_CONSTRUCTOR_ITEM: {
      console.log(action.payload);
      return {
        ...state,
        ingredientsConstructor: [...state.ingredientsConstructor].filter(
          (item) => item.uid !== action.payload.uid
        ),
        allIngredients: [...state.allIngredients].map((ingredient) => {
          if (ingredient._id === action.payload._id) {
            return { ...ingredient, __v: ingredient.__v - 1 };
          }
          return ingredient;
        }),
      };
    }
    case GET_ORDER_REQUEST: {
      return {
        ...state,
      };
    }
    case GET_ORDER_SUCCESS: {
      return {
        ...state,
        orderNumber: action.orderNumber,
        orderFailed: false,
        orderRequest: true,
      };
    }
    case GET_ORDER_FAILED: {
      return {
        ...state,
        orderFailed: true,
        orderRequest: true,
      };
    }
    case CHANGE_INGREDIENTS_PLACE: {
      console.log(action.ingredients);

      return {
        ...state,
        ingredientsConstructor: [...action.ingredients],
      };
    }
    default: {
      return state;
    }
  }
};

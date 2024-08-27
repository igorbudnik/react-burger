import { Ingredient, IOrder } from "../../components/Types/types";
import { SHOW_INGREDIENT, CLOSE_INGREDIENT } from "../actions/details";

interface Initial {
  ingredient: Ingredient | IOrder;
  ingredientOpened: boolean;
}

const initialState: Initial = {
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
};

export const chosenIngredientReducer = (
  state = initialState,
  action: { type: string; ingredient: Ingredient[] | IOrder }
) => {
  switch (action.type) {
    case SHOW_INGREDIENT: {
      return {
        ingredient: action.ingredient,
        ingredientOpened: true,
      };
    }
    case CLOSE_INGREDIENT: {
      return {
        ingredient: initialState.ingredient,
        ingredientOpened: false,
      };
    }
    default: {
      return state;
    }
  }
};

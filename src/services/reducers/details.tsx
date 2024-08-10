import { SHOW_INGREDIENT, CLOSE_INGREDIENT } from "../actions/details";
import { Ingredient } from "../../pages/main-page";

interface Initial {
  ingredient: Ingredient | any;
  ingredientOpened: boolean;
}

const initialState: Initial = {
  ingredient: "",
  ingredientOpened: false,
};

export const chosenIngredientReducer = (
  state = initialState,
  action: { type: string; ingredient: Ingredient[] }
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

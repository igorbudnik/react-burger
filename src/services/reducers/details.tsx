import { SHOW_INGREDIENT, CLOSE_INGREDIENT } from "../actions/details";
import { Ingredient } from "../../components/App/app";

interface Initial {
  ingredient: Ingredient[] | [];
  ingredientOpened: boolean;
}

const initialState: Initial = {
  ingredient: [],
  ingredientOpened: false,
};

export const chosenIngredientReducer = (state = initialState, action: any) => {
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

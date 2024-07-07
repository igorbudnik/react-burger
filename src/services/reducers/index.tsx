import { combineReducers } from "redux";
import { getIngredientsReducer } from "./ingredients";
import { orderReducer } from "./modal";
import { chosenIngredientReducer } from "./details";

export const rootReducer = combineReducers({
  getIngredientsReducer,
  chosenIngredientReducer,
  orderReducer,
});

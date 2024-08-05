import { combineReducers } from "redux";
import { getIngredientsReducer } from "./ingredients";
import { orderReducer } from "./modal";
import { chosenIngredientReducer } from "./details";
import { userReducer } from "./password";

export const rootReducer = combineReducers({
  getIngredientsReducer,
  chosenIngredientReducer,
  orderReducer,
  userReducer,
});

import { useEffect, useMemo } from "react";
import AppStyle from "./app.module.css";
import AppHeader from "../AppHeader/app-header";
import BurgerIngredients from "../BurgerIngredients/burger-ingredients";
import BurgerConstructor from "../BurgerConstructor/burger-constructor";
import { getIngredients } from "../../services/actions/ingredients";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import { useAppDispatch, useAppSelector } from "../..";

export interface Ingredient {
  _id: string;
  name: string;
  type: string;
  proteins: number;
  fat: number;
  carbohydrates: number;
  calories: number;
  price: number;
  image: string;
  image_mobile: string;
  image_large: string;
  __v: number;
  uid?: string;
}

function App() {
  const dispatch = useAppDispatch();
  const { allIngredients, ingredientsFailed, ingredientsRequest } =
    useAppSelector((store) => store.getIngredientsReducer);

  useEffect(() => {
    dispatch(getIngredients());
  }, [dispatch]);

  const content = useMemo(() => {
    return ingredientsRequest ? (
      ingredientsFailed ? (
        "Ошибка"
      ) : (
        <>
          <BurgerIngredients />
          <BurgerConstructor />
        </>
      )
    ) : (
      "Загрузка"
    );
  }, [allIngredients, ingredientsRequest, ingredientsFailed]);

  return (
    <>
      <AppHeader />
      <DndProvider backend={HTML5Backend}>
        <main className={AppStyle.main}>{content}</main>
      </DndProvider>
    </>
  );
}

export default App;

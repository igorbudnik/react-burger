import { useMemo } from "react";
import AppStyle from "./main.module.css";
import BurgerIngredients from "../components/BurgerIngredients/burger-ingredients";
import BurgerConstructor from "../components/BurgerConstructor/burger-constructor";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import { useAppSelector } from "..";

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

interface IInterface {
  ingredientSaved: Ingredient;
}

function MainPage(props: IInterface) {
  const { ingredientSaved } = props;
  const { allIngredients, ingredientsFailed, ingredientsRequest } =
    useAppSelector((store) => store.getIngredientsReducer);

  const content = useMemo(() => {
    return ingredientsRequest ? (
      ingredientsFailed ? (
        "Ошибка"
      ) : (
        <>
          <BurgerIngredients ingredientSaved={ingredientSaved} />
          <BurgerConstructor />
        </>
      )
    ) : (
      "Загрузка"
    );
  }, [allIngredients, ingredientsRequest, ingredientsFailed]);

  return (
    <>
      <DndProvider backend={HTML5Backend}>
        <main className={AppStyle.main}>{content}</main>
      </DndProvider>
    </>
  );
}

export default MainPage;

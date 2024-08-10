import { useMemo } from "react";
import AppStyle from "./main.module.css";
import BurgerIngredients from "../components/BurgerIngredients/burger-ingredients";
import BurgerConstructor from "../components/BurgerConstructor/burger-constructor";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import { useAppSelector } from "..";
import { IIngredient } from "../components/Types/types";

function MainPage(props: IIngredient) {
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

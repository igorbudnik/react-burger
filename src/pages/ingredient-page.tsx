import { useCallback, useEffect, useState } from "react";
import MainPage, { Ingredient } from "./main-page";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { getIngredients } from "../services/actions/ingredients";
import { useAppDispatch, useAppSelector } from "..";
import { COMPARE_INGREDIENTS } from "../services/actions/ingredients";
import AppHeader from "../components/AppHeader/app-header";
import modalStyle from "../components/Modal/modal.module.css";
import ModalIngredient from "../components/BurgerIngredients/modal-ingredient";
import BurgerIngredients from "../components/BurgerIngredients/burger-ingredients";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";

const IngredientPage = () => {
  const { id } = useParams();
  // const { state } = useLocation();
  const dispatch = useAppDispatch();
  // console.log(state);

  const { modalIngredient, ingredientsRequest } = useAppSelector(
    (store) => store.getIngredientsReducer
  );

  const loadIngredientsInfo = useCallback(() => {
    dispatch(getIngredients());
  }, [id]);

  useEffect(() => {
    loadIngredientsInfo();
    dispatch({ type: COMPARE_INGREDIENTS, modalIngredientId: id });
  }, [id, loadIngredientsInfo, ingredientsRequest]);

  return (
    <>
      {localStorage.getItem("modal") === "opened" ? (
        <DndProvider backend={HTML5Backend}>
          <MainPage />
        </DndProvider>
      ) : ingredientsRequest ? (
        <>
          <AppHeader />
          <div className={modalStyle.not_modal}>
            <ModalIngredient modalIngredient={modalIngredient[0]} />
          </div>
        </>
      ) : (
        <>
          <AppHeader />
          <span>Загрузка...</span>
        </>
      )}
    </>
  );
};

export default IngredientPage;

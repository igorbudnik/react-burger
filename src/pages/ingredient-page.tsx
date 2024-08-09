import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "..";
import { COMPARE_INGREDIENTS } from "../services/actions/ingredients";
import modalStyle from "../components/Modal/modal.module.css";
import IngredientDetails from "../components/IngredientDetails/ingredient-details";

const IngredientPage = () => {
  const { id } = useParams();

  const dispatch = useAppDispatch();

  const { modalIngredient, ingredientsRequest } = useAppSelector(
    (store) => store.getIngredientsReducer
  );

  useEffect(() => {
    dispatch({ type: COMPARE_INGREDIENTS, modalIngredientId: id });
  }, [id, ingredientsRequest]);
  return (
    <>
      {ingredientsRequest ? (
        <>
          <div className={modalStyle.not_modal}>
            <IngredientDetails currentIngredient={modalIngredient[0]} />
          </div>
        </>
      ) : (
        <>
          <span>Загрузка...</span>
        </>
      )}
    </>
  );
};

export default IngredientPage;
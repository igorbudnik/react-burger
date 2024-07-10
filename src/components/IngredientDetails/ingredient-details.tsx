import modalStyle from "../Modal/modal.module.css";
import { Ingredient } from "../App/app";
import { ReactNode } from "react";

export interface AppProps {
  currentIngredient: Ingredient;
}

const OrderDetails = (props: AppProps) => {
  const { currentIngredient } = props;
  return (
    <>
      <h1 className={`${modalStyle.h1} text text_type_main-large`}>
        Детали ингредиента
      </h1>
      <img
        className={modalStyle.img}
        src={currentIngredient?.image}
        alt={currentIngredient?.name}
        height={240}
        width={520}
      />
      <h2 className="text text_type_main-medium">{currentIngredient?.name}</h2>
      <ul className={modalStyle.ul}>
        <li className={modalStyle.li}>
          <span className="text text_type_main-default text_color_inactive">
            <b>Калории,ккал</b>
          </span>
          <span className="text text_type_main-medium text_color_inactive">
            <b>{currentIngredient?.calories}</b>
          </span>
        </li>
        <li className={modalStyle.li}>
          <span className="text text_type_main-default text_color_inactive">
            <b>Белки, г</b>
          </span>
          <span className="text text_type_main-medium text_color_inactive">
            <b>{currentIngredient?.proteins}</b>
          </span>
        </li>
        <li className={modalStyle.li}>
          <span className="text text_type_main-default text_color_inactive">
            <b>Жиры, г</b>
          </span>
          <span className="text text_type_main-medium text_color_inactive">
            <b>{currentIngredient?.fat}</b>
          </span>
        </li>
        <li className={modalStyle.li}>
          <span className="text text_type_main-default text_color_inactive">
            <b>Углеводы, г</b>
          </span>
          <span className="text text_type_main-medium text_color_inactive">
            <b>{currentIngredient?.carbohydrates}</b>
          </span>
        </li>
      </ul>
    </>
  );
};

export default OrderDetails;

import modalStyle from "../Modal/modal.module.css";
import { Ingredient } from "../../pages/main-page";

interface ModalIngredientType {
  modalIngredient: Ingredient;
}

const ModalIngredient = (props: ModalIngredientType) => {
  const { modalIngredient } = props;
  console.log(modalIngredient);

  return (
    <div>
      <h1 className={`${modalStyle.h1} text text_type_main-large`}>
        Детали ингредиента
      </h1>
      <img
        className={modalStyle.img}
        src={modalIngredient?.image}
        alt={modalIngredient?.name}
        height={240}
        width={520}
      />
      <h2 className="text text_type_main-medium">{modalIngredient?.name}</h2>
      <ul className={modalStyle.ul}>
        <li className={modalStyle.li}>
          <span className="text text_type_main-default text_color_inactive">
            <b>Калории,ккал</b>
          </span>
          <span className="text text_type_main-medium text_color_inactive">
            <b>{modalIngredient?.calories}</b>
          </span>
        </li>
        <li className={modalStyle.li}>
          <span className="text text_type_main-default text_color_inactive">
            <b>Белки, г</b>
          </span>
          <span className="text text_type_main-medium text_color_inactive">
            <b>{modalIngredient?.proteins}</b>
          </span>
        </li>
        <li className={modalStyle.li}>
          <span className="text text_type_main-default text_color_inactive">
            <b>Жиры, г</b>
          </span>
          <span className="text text_type_main-medium text_color_inactive">
            <b>{modalIngredient?.fat}</b>
          </span>
        </li>
        <li className={modalStyle.li}>
          <span className="text text_type_main-default text_color_inactive">
            <b>Углеводы, г</b>
          </span>
          <span className="text text_type_main-medium text_color_inactive">
            <b>{modalIngredient?.carbohydrates}</b>
          </span>
        </li>
      </ul>
    </div>
  );
};

export default ModalIngredient;

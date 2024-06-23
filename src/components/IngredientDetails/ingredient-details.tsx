import Modal from "../Modal/modal";
import modalStyle from "../Modal/modal.module.css";
import { Ingredient } from "../App/app";
import { ReactNode } from "react";

export interface AppProps {
  isVisible: boolean;
  child?: Ingredient;
  changeOpen: (opener: boolean) => void;
  children?: ReactNode;
}

const OrderDetails = (props: AppProps) => {
  const { isVisible, child, changeOpen } = props;
  return (
    <Modal isVisible={isVisible} changeOpen={changeOpen}>
      <img
        className={modalStyle.img}
        src={child?.image}
        alt={child?.name}
        height={240}
        width={520}
      />
      <h2 className="text text_type_main-medium">{child?.name}</h2>
      <ul className={modalStyle.ul}>
        <li className={modalStyle.li}>
          <span className="text text_type_main-default text_color_inactive">
            <b>Калории,ккал</b>
          </span>
          <span className="text text_type_main-medium text_color_inactive">
            <b>{child?.calories}</b>
          </span>
        </li>
        <li className={modalStyle.li}>
          <span className="text text_type_main-default text_color_inactive">
            <b>Белки, г</b>
          </span>
          <span className="text text_type_main-medium text_color_inactive">
            <b>{child?.proteins}</b>
          </span>
        </li>
        <li className={modalStyle.li}>
          <span className="text text_type_main-default text_color_inactive">
            <b>Жиры, г</b>
          </span>
          <span className="text text_type_main-medium text_color_inactive">
            <b>{child?.fat}</b>
          </span>
        </li>
        <li className={modalStyle.li}>
          <span className="text text_type_main-default text_color_inactive">
            <b>Углеводы, г</b>
          </span>
          <span className="text text_type_main-medium text_color_inactive">
            <b>{child?.carbohydrates}</b>
          </span>
        </li>
      </ul>
    </Modal>
  );
};

export default OrderDetails;

import ReactDOM from "react-dom";
import infoStyle from "./order-detail.module.css";
import Modal from "../Modal/modal";
import ok from "../../images/ok.png";
import { AppProps } from "../IngredientDetails/ingredient-details";

const modalRoot = document.getElementById("react-modals") as HTMLElement;

const OrderDetails = (props: AppProps) => {
  const { isVisible, changeOpen } = props;
  return ReactDOM.createPortal(
    <Modal changeOpen={changeOpen} isVisible={isVisible}>
      <section className={infoStyle.section}>
        <h1 className={infoStyle.h1}>
          <b>034536</b>
        </h1>
        <span className="text text_type_main-medium">
          <b>идентификатор заказа</b>
        </span>
        <img
          className={infoStyle.img}
          src={ok}
          alt="approve"
          width={120}
          height={120}
        />
        <p className="text text_type_main-default">Ваш заказ начали готовить</p>
        <p className="text text_type_main-default text_color_inactive">
          Дождитесь готовности на орбитальной станции
        </p>
      </section>
    </Modal>,
    modalRoot
  );
};

export default OrderDetails;

import ReactDOM from "react-dom";
import infoStyle from "./order-detail.module.css";
import ok from "../../images/ok.png";

const OrderDetails = () => {
  return (
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
  );
};

export default OrderDetails;

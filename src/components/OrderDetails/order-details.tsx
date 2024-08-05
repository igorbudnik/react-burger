import infoStyle from "./order-detail.module.css";
import ok from "../../images/ok.png";
import { useAppSelector } from "../..";

const OrderDetails = () => {
  const { orderNumber, orderFailed, orderRequest } = useAppSelector(
    (store) => store.getIngredientsReducer
  );
  return (
    <>
      {orderFailed ? (
        <h1 className={infoStyle.head}>Ошибка</h1>
      ) : !orderRequest ? (
        <h1 className={infoStyle.head}>Загрузка заказа...</h1>
      ) : (
        <section className={infoStyle.section}>
          <h1 className={infoStyle.h1}>
            <b>{orderNumber}</b>
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
          <p className="text text_type_main-default">
            Ваш заказ начали готовить
          </p>
          <p className="text text_type_main-default text_color_inactive">
            Дождитесь готовности на орбитальной станции
          </p>
        </section>
      )}
    </>
  );
};

export default OrderDetails;

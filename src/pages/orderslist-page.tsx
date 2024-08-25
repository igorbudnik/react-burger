import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IOrder } from "../components/Types/types";
import { checkReponse } from "../services/api";
import FeedDetails from "../components/Feed/feed-details";
import itemStyles from "../components/Feed/feed-item.module.css";

const HistoryOrderListPage = () => {
  const { number } = useParams();
  const [order, setOrder] = useState<IOrder[]>();
  const [load, setLoad] = useState(false);

  useEffect(() => {
    fetch("https://norma.nomoreparties.space/api/orders/" + `${number}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
    })
      .then(checkReponse)
      .then((res) => {
        if (res.orders.length !== 0 && res.success) {
          setOrder(res.orders);
          setLoad(true);
        } else {
          setOrder([]);
          return Promise.reject(`Ошибка: ${res.message}`);
        }
      })
      .catch((err) => console.log(err));
  }, [load]);

  return (
    <>
      {order ? (
        load ? (
          <div className={itemStyles.full}>
            <FeedDetails currentOrder={order[0]} />
          </div>
        ) : (
          <>
            <span>Ошибка</span>
          </>
        )
      ) : (
        <span>Загрузка...</span>
      )}
    </>
  );
};

export default HistoryOrderListPage;

import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "..";
import FeedItem from "../components/Feed/feed-item";
import {
  WS_CONNECTION_CLOSED,
  WS_CONNECTION_START,
} from "../services/actions/socket";
import feedStyles from "./feed.module.css";
import { wsUrl } from "../middleware/socketMiddleware";

const FeedPage = () => {
  const dispatch = useAppDispatch();
  const { messages } = useAppSelector((store) => store.wsReducer);
  const token = localStorage.getItem("accessToken");

  useEffect(() => {
    if (token) {
      dispatch({
        type: WS_CONNECTION_START,
        url: wsUrl + `/all?token=${token}`,
      });
    }

    return () => {
      dispatch({ type: WS_CONNECTION_CLOSED });
    };
  }, [token]);
  console.log(messages);

  return (
    <>
      {messages.length === 0 ? (
        <div>Пожалуйста, авторизируйтесь, чтобы увидеть ленту</div>
      ) : (
        <div>
          <h1 className={feedStyles.h1}>
            <p className="text text_type_main-large">Лента заказов</p>
          </h1>
          <section className={feedStyles.section}>
            <div className={feedStyles.scroll}>
              {messages[0]?.orders.map((order, index) => {
                return <FeedItem key={index} order={order} url={"feed"} />;
              })}
            </div>
            <div>
              <div className={feedStyles.table}>
                <div className={feedStyles.item_table}>
                  <h2 className={feedStyles.h2}>Готовы:</h2>
                  <ul className={feedStyles.ul_ready}>
                    {messages[0]?.orders.slice(0, 10).map((order, index) => {
                      if (order.status === "done") {
                        return (
                          <li key={index}>
                            <p className={feedStyles.orders}>{order.number}</p>
                          </li>
                        );
                      }
                    })}
                  </ul>
                </div>
                <div className={feedStyles.item_table}>
                  <h2 className={feedStyles.h2}>В работе:</h2>
                  <ul className={feedStyles.ul_pending}>
                    {messages[0]?.orders.map((order, index) => {
                      if (order.status === "pending") {
                        return (
                          <li key={index}>
                            <p className={feedStyles.orders}>{order.number}</p>
                          </li>
                        );
                      }
                    })}
                  </ul>
                </div>
              </div>
              <h2>Выполнено за все время:</h2>
              <p className={`${feedStyles.p} text text_type_digits-large`}>
                {messages[0]?.total}
              </p>
              <h2>Выполнено за сегодня:</h2>
              <p className={`${feedStyles.p} text text_type_digits-large`}>
                {messages[0]?.totalToday}
              </p>
            </div>
          </section>
        </div>
      )}
    </>
  );
};

export default FeedPage;

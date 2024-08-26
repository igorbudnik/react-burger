import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "..";
import itemStyles from "../components/Feed/feed-item.module.css";
import {
  WS_CONNECTION_CLOSED,
  WS_CONNECTION_START,
} from "../services/actions/socket";
import FeedItem from "../components/Feed/feed-item";
import { wsUrl } from "../middleware/socketMiddleware";

const HistoryOrderPage = () => {
  const dispatch = useAppDispatch();
  const { messages } = useAppSelector((store) => store.wsReducer);
  const token = localStorage.getItem("accessToken");
  const { getFailed, getRequest } = useAppSelector(
    (store) => store.userReducer
  );

  useEffect(() => {
    if (token) {
      dispatch({
        type: WS_CONNECTION_START,
        url: wsUrl + `?token=${token}`,
      });
    }

    return () => {
      dispatch({ type: WS_CONNECTION_CLOSED });
    };
  }, [token]);

  return (
    <>
      {getRequest && !messages[0]?.message ? (
        <div className={itemStyles.my_orders}>
          {messages[0]?.orders.map((order, index) => (
            <FeedItem key={index} order={order} url="profile/orders" />
          ))}
        </div>
      ) : (
        <div>Обновите, пожалуйста, страницу</div>
      )}
    </>
  );
};

export default HistoryOrderPage;

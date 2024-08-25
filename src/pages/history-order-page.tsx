import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "..";
import itemStyles from "../components/Feed/feed-item.module.css";
import {
  WS_CONNECTION_CLOSED,
  WS_CONNECTION_START,
} from "../services/actions/socket";
import FeedItem from "../components/Feed/feed-item";

const HistoryOrderPage = () => {
  const dispatch = useAppDispatch();
  const { messagesMy } = useAppSelector((store) => store.wsReducer);
  const token = localStorage.getItem("accessToken");

  useEffect(() => {
    if (token) {
      dispatch({ type: WS_CONNECTION_START });
    }
    return () => {
      dispatch({ type: WS_CONNECTION_CLOSED });
    };
  }, [token]);

  return (
    <div className={itemStyles.my_orders}>
      {messagesMy[0]?.orders.map((order, index) => (
        <FeedItem key={index} order={order} url="profile/orders" />
      ))}
    </div>
  );
};

export default HistoryOrderPage;

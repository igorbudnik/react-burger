import { useMemo } from "react";
import {
  Button,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { Ingredient } from "../App/app";
import mainStyle from "./burger-constructor.module.css";
import OrderDetails from "../OrderDetails/order-details";
import Modal from "../Modal/modal";
import { useAppDispatch, useAppSelector } from "../..";
import { SHOW_ORDER, CLOSE_ORDER } from "../../services/actions/modal";
import { getOrder } from "../../services/actions/ingredients";
import { IngredientsConstructor } from "./burger-element";

const BurgerConstructor = () => {
  const dispatch = useAppDispatch();
  const { orderOpened } = useAppSelector((store) => store.orderReducer);

  const { ingredientsConstructor, bun } = useAppSelector(
    (store) => store.getIngredientsReducer
  );

  const setOrder = (ingredients: Ingredient[]) => {
    console.log(ingredients);

    dispatch(
      getOrder([...ingredients, bun].map((item: Ingredient) => item?._id))
    );
    dispatch({ type: SHOW_ORDER });
  };

  const price = useMemo(() => {
    return [...ingredientsConstructor, bun, bun].reduce(
      (acc: number, x: Ingredient) => acc + Number(x?.price ? x.price : 0),
      0
    );
  }, [ingredientsConstructor, bun]);

  const setClosed = () => {
    dispatch({ type: CLOSE_ORDER });
  };

  return (
    <section className={mainStyle.section}>
      <div>
        <IngredientsConstructor />
      </div>
      <div className={mainStyle.div}>
        <div className={mainStyle.price}>
          <span className={`${mainStyle.text}`}>{price}</span>
          <CurrencyIcon type="primary" />
        </div>
        {orderOpened && (
          <>
            <Modal changeClose={setClosed}>
              <OrderDetails />
            </Modal>
          </>
        )}
        <Button
          onClick={() => setOrder(ingredientsConstructor)}
          htmlType="button"
          type="primary"
          size="large"
        >
          Оформить заказ
        </Button>
      </div>
    </section>
  );
};

export default BurgerConstructor;

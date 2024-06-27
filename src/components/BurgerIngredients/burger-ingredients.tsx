import React, { ReactNode, useState } from "react";
import {
  ConstructorElement,
  DragIcon,
  Button,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { Ingredient } from "../App/app";
import mainStyle from "../BurgerIngredients/burger-ingredients.module.css";
import OrderDetails from "../OrderDetails/order-details";
import Modal from "../Modal/modal";

const BurgerIngredients = (props: Ingredient[] | any) => {
  const { ingredients } = props;
  const [opened, setOpened] = useState<boolean>(false);
  const price: number = ingredients
    .filter((item: Ingredient) => item.name.length <= 30)
    .reduce((acc: number, x: Ingredient) => acc + Number(x.price), 0);

  const changeOpen = (opener: boolean): void => {
    setOpened(opener);
  };

  const boughtIngredients: Ingredient[] = ingredients.filter(
    (item: Ingredient) => item.name.length <= 30
  );
  const ingredients_constructor = (): ReactNode => {
    return (
      <div className={mainStyle.all_options}>
        <ConstructorElement
          type="top"
          isLocked={true}
          text={boughtIngredients[0].name + " (верх)"}
          price={boughtIngredients[0].price}
          thumbnail={boughtIngredients[0].image}
          extraClass="ml-8"
        />
        <div className={mainStyle.scroll}>
          {boughtIngredients
            .splice(1, boughtIngredients.length - 2)
            .map((ingredient: Ingredient, i: number) => {
              return (
                <div key={i} className={mainStyle.inner_items}>
                  <DragIcon type="primary" />
                  <ConstructorElement
                    text={ingredient.name}
                    price={ingredient.price}
                    thumbnail={ingredient.image}
                  />
                </div>
              );
            })}
        </div>

        <ConstructorElement
          type="bottom"
          isLocked={true}
          text={boughtIngredients[boughtIngredients.length - 1].name + " (низ)"}
          price={boughtIngredients[boughtIngredients.length - 1].price}
          thumbnail={boughtIngredients[boughtIngredients.length - 1].image}
          extraClass="ml-8"
        />
      </div>
    );
  };
  return (
    <section className={mainStyle.section}>
      <div>{ingredients_constructor()}</div>
      <div className={mainStyle.div}>
        <div className={mainStyle.price}>
          <span className={`${mainStyle.text}`}>{price}</span>
          <CurrencyIcon type="primary" />
        </div>
        {opened && (
          <>
            <Modal changeOpen={changeOpen}>
              <OrderDetails />
            </Modal>
          </>
        )}
        <Button
          onClick={() => setOpened(true)}
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

export default BurgerIngredients;

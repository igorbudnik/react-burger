import React from "react";
import { data } from "../App/utils/data";
import {
  ConstructorElement,
  DragIcon,
  Button,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import mainStyle from "../BurgerIngredients/burger-ingredients.module.css";

class BurgerIngredients extends React.Component {
  state = {
    price: data
      .filter((item) => item.name.length <= 30)
      .reduce((acc, x) => acc + Number(x.price), 0),
  };

  render() {
    const len = data.filter((item) => item.name.length <= 30);
    const ingredients_constructor = () => {
      return (
        <div
          // className={mainStyle.scroll}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            marginTop: "100px",
          }}
        >
          <ConstructorElement
            type="top"
            isLocked={true}
            text={len[0].name}
            price={len[0].price}
            thumbnail={len[0].image}
            extraClass="ml-8"
          />
          <div
            className={mainStyle.scroll}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "16px",
            }}
          >
            {len.splice(1, len.length - 2).map((ingredient) => {
              return (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: "10px",
                    alignItems: "center",
                  }}
                >
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
            text={len[len.length - 1].name}
            price={len[len.length - 1].price}
            thumbnail={len[len.length - 1].image}
            extraClass="ml-8"
          />
        </div>
      );
    };
    return (
      <section className={mainStyle.section}>
        <div>{ingredients_constructor()}</div>
        <div className={mainStyle.div}>
          <div style={{ display: "flex", gap: "7px", alignItems: "center" }}>
            <span className="text text_type_main-large">
              {this.state.price}
            </span>
            <CurrencyIcon type="primary" />
          </div>

          <Button htmlType="button" type="primary" size="large">
            Оформить заказ
          </Button>
        </div>
      </section>
    );
  }
}

export default BurgerIngredients;

import React from "react";
import mainStyle from "./burger-constructor.module.css";
import {
  Tab,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

const Counter = (props: any) => {
  return (
    <div className={mainStyle.counter}>
      <p className="text text_type_main-default">
        <svg
          className={mainStyle.svg}
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16Z"
            fill="#4C4CFF"
          />
        </svg>
        <span className={mainStyle.span}>{props.count}</span>
      </p>
    </div>
  );
};

class BurgerConstructor extends React.Component<any, any> {
  constructor(props: any) {
    super(props);

    this.state = {
      current: "one",
    };
  }

  render() {
    const ingredients_need = (ingredient_type: string) => {
      return (
        <>
          {this.props.ingredients
            .filter((item: any) => item.type === ingredient_type)
            .map((ingredient_type: any) => {
              return (
                <div key={ingredient_type._id} className={mainStyle.div}>
                  <img src={ingredient_type.image} alt={ingredient_type.name} />
                  {ingredient_type.name.length <= 30 && <Counter count={1} />}
                  <section className={mainStyle.section_item}>
                    <p className="text text_type_main-default">
                      {ingredient_type.price}
                    </p>
                    <CurrencyIcon type="primary" />
                  </section>
                  <p className="text text_type_main-default">
                    {ingredient_type.name}
                  </p>
                </div>
              );
            })}
        </>
      );
    };
    return (
      <section className={mainStyle.section}>
        <p className="text text_type_main-large mt-10">Соберите бургер</p>
        <div
          style={{ display: "flex", marginTop: "20px", marginBottom: "40px" }}
        >
          <Tab
            value="one"
            active={this.state.current === "one"}
            onClick={() => this.setState({ current: "one" })}
          >
            Булки
          </Tab>
          <Tab
            value="two"
            active={this.state.current === "two"}
            onClick={() => this.setState({ current: "two" })}
          >
            Соусы
          </Tab>
          <Tab
            value="three"
            active={this.state.current === "three"}
            onClick={() => this.setState({ current: "three" })}
          >
            Начинки
          </Tab>
        </div>
        <div className={mainStyle.scroll}>
          <p className="text text_type_main-medium mb-6">Булки</p>
          <div className={mainStyle.div_main}>{ingredients_need("bun")}</div>
          <p className="text text_type_main-medium mt-10 mb-6">Соусы</p>
          <div className={mainStyle.div_main}>{ingredients_need("sauce")}</div>
          <p className="text text_type_main-medium mt-10 mb-6">Начинка</p>
          <div className={mainStyle.div_main}>{ingredients_need("main")}</div>
        </div>
      </section>
    );
  }
}

export default BurgerConstructor;

import { ReactNode, useState } from "react";
import mainStyle from "./burger-constructor.module.css";
import { Ingredient } from "../App/app";
import {
  Tab,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import ModalOverlay from "../ModalOverlay/modal-overlay";
import IngredientDetails from "../IngredientDetails/ingredient-details";
import { useEffect } from "react";

const Counter = () => {
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
        <span className={mainStyle.span}>1</span>
      </p>
    </div>
  );
};

const BurgerConstructor = (props: Ingredient[] | any) => {
  const { ingredients } = props;
  const [current, setCurrent] = useState<string>("one");
  const [opened, setOpened] = useState<boolean>(false);
  const [child, setChild] = useState<Ingredient>();
  const isVisible = true;

  const changeOpen = (opener: boolean): void => {
    setOpened(opener);
  };

  const scroll = (tab: string) => {
    const elem = document.getElementById(tab);
    if (elem) {
      elem.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const ingredientsNeed = (ingredientType: string): ReactNode => {
    return (
      <>
        {ingredients
          .filter((item: Ingredient) => item.type === ingredientType)
          .map((ingredientType: Ingredient) => {
            return (
              <div
                onClick={() => (setOpened(true), setChild(ingredientType))}
                key={ingredientType._id}
                className={mainStyle.div}
              >
                <img src={ingredientType.image} alt={ingredientType.name} />
                {ingredientType.name.length <= 30 && <Counter />}
                <section className={mainStyle.section_item}>
                  <span className={mainStyle.text}>{ingredientType.price}</span>
                  <CurrencyIcon type="primary" />
                </section>
                <p className="text text_type_main-default">
                  {ingredientType.name}
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
      <div className={mainStyle.tab}>
        <Tab
          value="one"
          active={current === "one"}
          onClick={() => (setCurrent("one"), scroll("one"))}
        >
          Булки
        </Tab>
        <Tab
          value="two"
          active={current === "two"}
          onClick={() => (setCurrent("two"), scroll("two"))}
        >
          Соусы
        </Tab>
        <Tab
          value="three"
          active={current === "three"}
          onClick={() => (setCurrent("three"), scroll("three"))}
        >
          Начинки
        </Tab>
      </div>

      {opened && (
        <>
          <ModalOverlay changeOpen={changeOpen} />
          <IngredientDetails
            isVisible={isVisible}
            child={child}
            changeOpen={changeOpen}
          />
        </>
      )}
      <div className={mainStyle.scroll}>
        <p id="one" className="text text_type_main-medium mb-6">
          Булки
        </p>
        <div className={mainStyle.div_main}>{ingredientsNeed("bun")}</div>
        <p id="two" className="text text_type_main-medium mt-10 mb-6">
          Соусы
        </p>
        <div className={mainStyle.div_main}>{ingredientsNeed("sauce")}</div>
        <p id="three" className="text text_type_main-medium mt-10 mb-6">
          Начинка
        </p>
        <div className={mainStyle.div_main}>{ingredientsNeed("main")}</div>
      </div>
    </section>
  );
};

export default BurgerConstructor;

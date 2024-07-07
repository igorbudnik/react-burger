import { ReactNode, useMemo, useState } from "react";
import mainStyle from "./burger-ingredients.module.css";
import { Ingredient } from "../App/app";
import {
  Tab,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import IngredientDetails from "../IngredientDetails/ingredient-details";
import Modal from "../Modal/modal";
import { useAppDispatch, useAppSelector } from "../..";
import {
  SHOW_INGREDIENT,
  CLOSE_INGREDIENT,
} from "../../services/actions/details";
import { useDrag } from "react-dnd";

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

const BurgerIngredients = () => {
  const dispatch = useAppDispatch();
  const { ingredient, ingredientOpened } = useAppSelector(
    (store) => store.chosenIngredientReducer
  );
  const { allIngredients } = useAppSelector(
    (store) => store.getIngredientsReducer
  );
  const [current, setCurrent] = useState<string>("one");

  const scroll = (tab: string) => {
    const elem = document.getElementById(tab);
    if (elem) {
      elem.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const setClosed = () => {
    dispatch({ type: CLOSE_INGREDIENT });
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

      {ingredientOpened && (
        <>
          <Modal changeClose={setClosed}>
            <IngredientDetails currentIngredient={ingredient} />
          </Modal>
        </>
      )}
      <div className={mainStyle.scroll}>
        <p id="one" className="text text_type_main-medium mb-6">
          Булки
        </p>
        <div className={mainStyle.div_main}>
          {allIngredients
            .filter((item: Ingredient) => item.type === "bun")
            .map((ingredient: Ingredient, index: number) => {
              return <IngredientsNeed key={index} ingredient={ingredient} />;
            })}
        </div>
        <p id="two" className="text text_type_main-medium mt-10 mb-6">
          Соусы
        </p>
        <div className={mainStyle.div_main}>
          {allIngredients
            .filter((item: Ingredient) => item.type === "sauce")
            .map((ingredient: Ingredient, index: number) => {
              return (
                <IngredientsNeed
                  key={(index + 1) * 10}
                  ingredient={ingredient}
                />
              );
            })}
        </div>
        <p id="three" className="text text_type_main-medium mt-10 mb-6">
          Начинка
        </p>
        <div className={mainStyle.div_main}>
          {allIngredients
            .filter((item: Ingredient) => item.type === "main")
            .map((ingredient: Ingredient, index: number) => {
              return (
                <IngredientsNeed
                  key={(index + 1) * 20}
                  ingredient={ingredient}
                />
              );
            })}
        </div>
      </div>
    </section>
  );
};

const IngredientsNeed = (props: any) => {
  const { ingredient } = props;
  const [, dragRef] = useDrag(
    {
      type: ingredient.type,
      item: { ...ingredient },
    },
    []
  );
  const dispatch = useAppDispatch();
  const setOpened = (ingredient: Ingredient) => {
    dispatch({ type: SHOW_INGREDIENT, ingredient });
  };

  return (
    <>
      <div
        ref={dragRef}
        onClick={() => setOpened(ingredient)}
        key={ingredient._id}
        className={mainStyle.div}
      >
        <img src={ingredient.image} alt={ingredient.name} />
        {ingredient.__v > 0 && (
          <Counter key={ingredient._id} count={ingredient.__v} />
        )}
        <section className={mainStyle.section_item}>
          <span className={mainStyle.text}>{ingredient.price}</span>
          <CurrencyIcon type="primary" />
        </section>
        <p className="text text_type_main-default">{ingredient.name}</p>
      </div>
    </>
  );
};

export default BurgerIngredients;

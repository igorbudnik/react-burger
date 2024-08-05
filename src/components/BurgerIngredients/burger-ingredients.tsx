import { useState } from "react";
import mainStyle from "./burger-ingredients.module.css";

import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import OrderDetails from "../IngredientDetails/ingredient-details";
import Modal from "../Modal/modal";
import { useAppDispatch, useAppSelector } from "../..";
import { CLOSE_INGREDIENT } from "../../services/actions/details";
import CatigoryIngredient from "./category-ingredient";
import { useLocation, useNavigate } from "react-router-dom";

const BurgerIngredients = () => {
  const dispatch = useAppDispatch();
  const { state } = useLocation();
  const { ingredient } = useAppSelector(
    (store) => store.chosenIngredientReducer
  );
  const [current, setCurrent] = useState<string>("one");
  console.log(state);
  const navigate = useNavigate();
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
    navigate("/");
    localStorage.setItem("modal", "");
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

      {localStorage.getItem("modal") === "opened" && (
        <>
          <Modal changeClose={setClosed}>
            <OrderDetails
              currentIngredient={state ? state.ingredient : ingredient}
            />
          </Modal>
        </>
      )}
      <div className={mainStyle.scroll}>
        <p id="one" className="text text_type_main-medium mb-6">
          Булки
        </p>
        <div className={mainStyle.div_main}>
          <CatigoryIngredient category={"bun"} />
        </div>
        <p id="two" className="text text_type_main-medium mt-10 mb-6">
          Соусы
        </p>
        <div className={mainStyle.div_main}>
          <CatigoryIngredient category={"sauce"} />
        </div>
        <p id="three" className="text text_type_main-medium mt-10 mb-6">
          Начинка
        </p>
        <div className={mainStyle.div_main}>
          <CatigoryIngredient category={"main"} />
        </div>
      </div>
    </section>
  );
};

export default BurgerIngredients;

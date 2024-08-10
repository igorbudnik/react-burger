import mainStyle from "./burger-ingredients.module.css";

import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import IngredientDetails from "../IngredientDetails/ingredient-details";
import Modal from "../Modal/modal";
import { useAppDispatch, useAppSelector } from "../..";
import { CLOSE_INGREDIENT } from "../../services/actions/details";
import CategoryIngredient from "./category-ingredient";
import { useLocation, useNavigate } from "react-router-dom";
import { Ingredient } from "../../pages/main-page";
import { useInView } from "react-intersection-observer";

interface IIngredient {
  ingredientSaved: Ingredient;
}

const BurgerIngredients = (props: IIngredient) => {
  const { ingredientSaved } = props;
  const dispatch = useAppDispatch();

  const [refBun, inViewBun] = useInView({
    threshold: 1,
  });
  const [refSauce, inViewSauce] = useInView({
    threshold: 1,
  });
  const [refMain, inViewMain] = useInView({
    threshold: 0.15,
  });

  const { ingredient } = useAppSelector(
    (store) => store.chosenIngredientReducer
  );
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
        <div>
          <Tab value="one" active={inViewBun} onClick={() => scroll("one")}>
            Булки
          </Tab>
        </div>
        <div>
          <Tab value="two" active={inViewSauce} onClick={() => scroll("two")}>
            Соусы
          </Tab>
        </div>
        <div>
          <Tab
            value="three"
            active={inViewMain}
            onClick={() => scroll("three")}
          >
            Начинки
          </Tab>
        </div>
      </div>

      {localStorage.getItem("modal") === "opened" && (
        <>
          <Modal changeClose={setClosed}>
            <IngredientDetails
              currentIngredient={ingredient ? ingredient : ingredientSaved}
            />
          </Modal>
        </>
      )}
      <div className={mainStyle.scroll}>
        <p id="one" className="text text_type_main-medium mb-6">
          Булки
        </p>
        <div className={mainStyle.div_main} ref={refBun}>
          <CategoryIngredient category={"bun"} />
        </div>
        <p id="two" className="text text_type_main-medium mt-10 mb-6">
          Соусы
        </p>
        <div className={mainStyle.div_main} ref={refSauce}>
          <CategoryIngredient category={"sauce"} />
        </div>
        <p id="three" className="text text_type_main-medium mt-10 mb-6">
          Начинка
        </p>
        <div className={mainStyle.div_main} ref={refMain}>
          <CategoryIngredient category={"main"} />
        </div>
      </div>
    </section>
  );
};

export default BurgerIngredients;

import mainStyle from "./burger-ingredients.module.css";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import CategoryIngredient from "./category-ingredient";
import { useInView } from "react-intersection-observer";
import { IIngredient } from "../Types/types";

const BurgerIngredients = (props: IIngredient) => {
  const [refBun, inViewBun] = useInView({
    threshold: 1,
  });
  const [refSauce, inViewSauce] = useInView({
    threshold: 1,
  });
  const [refMain, inViewMain] = useInView({
    threshold: 0.15,
  });

  const scroll = (tab: string) => {
    const elem = document.getElementById(tab);
    if (elem) {
      elem.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
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

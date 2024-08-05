import mainStyle from "./burger-ingredients.module.css";
import { Ingredient } from "../../pages/main-page";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { useAppDispatch } from "../..";
import { SHOW_INGREDIENT } from "../../services/actions/details";
import { useDrag } from "react-dnd";
import { useNavigate, useSearchParams } from "react-router-dom";

type PropsType = {
  ingredient: Ingredient;
  key: number;
};

type CounterProps = {
  count: number;
};

const Counter = (props: CounterProps) => {
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

const IngredientsNeed = (props: PropsType) => {
  const { ingredient } = props;
  const navigate = useNavigate();
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
    localStorage.setItem("modal", "opened");
    navigate(`/ingredients/${ingredient._id}`, {
      state: { ingredient: ingredient },
    });
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
        {ingredient.__v > 0 && <Counter count={ingredient.__v} />}
        <section className={mainStyle.section_item}>
          <span className={mainStyle.text}>{ingredient.price}</span>
          <CurrencyIcon type="primary" />
        </section>
        <p className="text text_type_main-default">{ingredient.name}</p>
      </div>
    </>
  );
};

export default IngredientsNeed;

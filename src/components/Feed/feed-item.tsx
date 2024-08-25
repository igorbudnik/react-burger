import {
  Counter,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import itemStyle from "./feed-item.module.css";
import { IFeed, IOrder } from "../Types/types";
import { useAppDispatch, useAppSelector } from "../..";
import { SHOW_INGREDIENT } from "../../services/actions/details";
import { useLocation, useNavigate } from "react-router-dom";

export const res = (ingredients: string[]) =>
  ingredients.reduce((acc: any, i) => {
    if (acc.hasOwnProperty(i)) {
      acc[i] += 1;
    } else {
      acc[i] = 1;
    }
    return acc;
  }, {});

export const timeString = (time: string) =>
  [time.split("T")[0], time.split("T")[1].slice(0, 8)].join(" ");

const FeedItem = (props: IFeed) => {
  const { name, createdAt, ingredients, number } = props.order;
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const { allIngredients } = useAppSelector(
    (store) => store.getIngredientsReducer
  );

  const setOpened = (ingredient: IOrder) => {
    dispatch({ type: SHOW_INGREDIENT, ingredient });
    navigate(`/${props.url}/${number}`, {
      state: { background: location, ingredient: ingredient },
    });
  };

  return (
    <>
      <div
        key={number}
        className={itemStyle.container}
        onClick={() => setOpened(props.order)}
      >
        <section className={itemStyle.section}>
          <span className={itemStyle.number}>#{number}</span>
          <time className="text text_type_main-default text_color_inactive">
            {timeString(createdAt)}
          </time>
        </section>
        <section className={itemStyle.section}>
          <p className={`${itemStyle.p} text text_type_main-medium`}>{name}</p>
        </section>
        <div className={itemStyle.div}>
          <div className={itemStyle.photos}>
            {Array.from(new Set(ingredients)).map((x, i) => {
              return (
                <div key={i} className={itemStyle.width}>
                  <div className={itemStyle.cyrcle}>
                    <img
                      height={56}
                      width={112}
                      src={
                        allIngredients.filter(
                          (ingredient) => ingredient._id === x
                        )[0].image
                      }
                      alt={
                        allIngredients.filter(
                          (ingredient) => ingredient._id === x
                        )[0].name
                      }
                    />
                    <div className={itemStyle.count}>
                      {res(ingredients)[x] === 1 ? null : (
                        <Counter count={res(ingredients)[x]} />
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className={itemStyle.cost}>
            <p className="text text_type_digits-default">
              {ingredients
                .map((ingredient) => {
                  return allIngredients.find((x) => x._id === ingredient)
                    ?.price;
                })
                .reduce((acc: number, sum: any) => acc + sum, 0)}
            </p>
            <CurrencyIcon type="primary" />
          </div>
        </div>
      </div>
    </>
  );
};

export default FeedItem;

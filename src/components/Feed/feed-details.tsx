import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { IFeedDetails } from "../Types/types";
import itemStyle from "./feed-item.module.css";
import { res, timeString } from "./feed-item";
import { useAppSelector } from "../..";

const FeedDetails = (props: IFeedDetails) => {
  const { name, _id, createdAt, ingredients, number, status } =
    props.currentOrder;
  const { allIngredients } = useAppSelector(
    (store) => store.getIngredientsReducer
  );

  const filterIngredient = (x: string) =>
    allIngredients.filter((ingredient) => ingredient._id === x)[0];

  return (
    <div className={itemStyle.order_container}>
      <p className="text text_type_main-default">#{number}</p>
      <p className={`${itemStyle.ingr_name}  text text_type_main-medium `}>
        {name}
      </p>
      <span
        className="text text_type_main-default"
        style={{
          color: status === "done" ? "green" : "white",
        }}
      >
        {status === "done"
          ? "Выполнен"
          : status === "pending"
          ? "Готовится"
          : "Создан"}
      </span>
      <p className="text text_type_main-medium">Состав:</p>
      <section className={itemStyle.ingrediens}>
        {Array.from(new Set(ingredients)).map((x, i) => {
          return (
            <div key={i} className={itemStyle.width}>
              <div className={itemStyle.cyrcle}>
                <img
                  height={56}
                  width={112}
                  src={filterIngredient(x)?.image}
                  alt={filterIngredient(x)?.name}
                />
              </div>
              <div className={itemStyle.info_ingredient}>
                <span className="text text_type_main-default">
                  {filterIngredient(x)?.name}
                </span>
                <span
                  className={`${itemStyle.currency} text text_type_main-default`}
                >
                  {res(ingredients)[x]} x {filterIngredient(x)?.price}
                  <CurrencyIcon type="primary" />
                </span>
              </div>
            </div>
          );
        })}
      </section>

      <section className={itemStyle.time_curr}>
        <p className="text text_type_main-default text_color_inactive">
          {timeString(createdAt)}
        </p>
        <div>
          <span className={`${itemStyle.currency} text text_type_main-medium`}>
            {ingredients
              .map((ingredient) => {
                return allIngredients.find((x) => x._id === ingredient)?.price;
              })
              .reduce((acc: number, sum: any) => acc + sum, 0)}
            <CurrencyIcon type="primary" />
          </span>
        </div>
      </section>
    </div>
  );
};

export default FeedDetails;

import { useAppSelector } from "../..";

import IngredientsNeed from "./ingredient-item";

type CategoryType = {
  category: string;
};

const CatigoryIngredient = (props: CategoryType) => {
  const { category } = props;
  const { allIngredients } = useAppSelector(
    (store) => store.getIngredientsReducer
  );
  return (
    <>
      {allIngredients
        .filter((item) => item.type === category)
        .map((ingredient, index: number) => {
          return (
            <IngredientsNeed key={(index + 1) * 20} ingredient={ingredient} />
          );
        })}
    </>
  );
};

export default CatigoryIngredient;

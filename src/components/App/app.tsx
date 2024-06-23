import { useEffect, useState } from "react";
import AppStyle from "./app.module.css";
import AppHeader from "../AppHeader/app-header";
import BurgerConstructor from "../BurgerConstructor/burger-constructor";
import BurgerIngredients from "../BurgerIngredients/burger-ingredients";

const url = "https://norma.nomoreparties.space/api/ingredients";

export interface Ingredient {
  _id: string;
  name: string;
  type: string;
  proteins: number;
  fat: number;
  carbohydrates: number;
  calories: number;
  price: number;
  image: string;
  image_mobile: string;
  image_large: string;
  __v: number;
}

function App() {
  const [ingredients, setIngredients] = useState<Ingredient[]>([]);
  const [error, setError] = useState<any>(null);
  const [isLoading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(url);
        const info = await res.json();
        setIngredients(info.data);
        setLoading(false);
      } catch (err: any) {
        setError(err);
      }
    })();
  }, []);

  return (
    <>
      <AppHeader />
      {isLoading ? (
        ""
      ) : error ? (
        <main className={AppStyle.main}>{error}</main>
      ) : (
        <main className={AppStyle.main}>
          <BurgerConstructor ingredients={[...ingredients]} />
          <BurgerIngredients ingredients={[...ingredients]} />
        </main>
      )}
    </>
  );
}

export default App;

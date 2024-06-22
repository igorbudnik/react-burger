import React from "react";
import AppStyle from "./app.module.css";
import AppHeader from "../AppHeader/app-header";
import BurgerConstructor from "../BurgerConstructor/burger-constructor";
import BurgerIngredients from "../BurgerIngredients/burger-ingredients";
import { data } from "./utils/data";

function App() {
  return (
    <>
      <AppHeader />
      <main className={AppStyle.main}>
        <BurgerConstructor ingredients={data} />
        <BurgerIngredients ingredients={data} />
      </main>
    </>
  );
}

export default App;

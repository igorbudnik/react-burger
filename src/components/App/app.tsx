import React from "react";
import AppStyle from "./app.module.css";
import AppHeader from "../AppHeader/app-header";
import BurgerConstructor from "../BurgerConstructor/burger-constructor";
import BurgerIngredients from "../BurgerIngredients/burger-ingredients";

function App() {
  return (
    <>
      <AppHeader />
      <main className={AppStyle.main}>
        <BurgerConstructor />
        <BurgerIngredients />
      </main>
    </>
  );
}

export default App;

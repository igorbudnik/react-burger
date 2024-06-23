import React from "react";
import {
  Button,
  Logo,
  BurgerIcon,
  ListIcon,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import headerStyle from "./app-header.module.css";

class AppHeader extends React.Component {
  render() {
    return (
      <header className={headerStyle.header}>
        <nav className={headerStyle.nav}>
          <section className={headerStyle.button_left}>
            <Button
              extraClass={headerStyle.button}
              htmlType="button"
              type="secondary"
              size="large"
            >
              <BurgerIcon type="secondary" />
              <span className={headerStyle.span}>Конструктор</span>
            </Button>

            <Button
              extraClass={headerStyle.button}
              htmlType="button"
              type="secondary"
              size="large"
            >
              <ListIcon type="secondary" />
              <span className={headerStyle.span}>Лист заказов</span>
            </Button>
          </section>
          <section className={headerStyle.logo}>
            <Logo />
          </section>
          <section>
            <Button
              extraClass={headerStyle.button}
              htmlType="button"
              type="secondary"
              size="large"
            >
              <ProfileIcon type="secondary" />
              <span className={headerStyle.span_right}>Личный кабинет</span>
            </Button>
          </section>
        </nav>
      </header>
    );
  }
}

export default AppHeader;

import {
  Button,
  Logo,
  BurgerIcon,
  ListIcon,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import headerStyle from "./app-header.module.css";
import { useNavigate } from "react-router-dom";
import { SyntheticEvent } from "react";

const AppHeader = () => {
  const navigate = useNavigate();

  const changePage = (e: SyntheticEvent, url: string) => {
    e.preventDefault();
    navigate(url);
  };

  return (
    <header className={headerStyle.header}>
      <nav className={headerStyle.nav}>
        <section className={headerStyle.button_left}>
          <Button
            onClick={(e) => changePage(e, "/")}
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
        <section
          className={headerStyle.logo}
          onClick={(e) => changePage(e, "/")}
        >
          <Logo />
        </section>
        <section>
          <Button
            onClick={(e) => changePage(e, "/profile")}
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
};

export default AppHeader;

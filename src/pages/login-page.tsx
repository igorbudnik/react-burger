import {
  Button,
  Input,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { Link, useNavigate } from "react-router-dom";
import AppHeader from "../components/AppHeader/app-header";
import loginStyles from "./login.module.css";
import { SyntheticEvent, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "..";
import { loginUser } from "../services/actions/password";

interface loginProps {
  showed: boolean;
  onIconClick: () => void;
  emailValue: string;
  onEmailChange: (e: SyntheticEvent) => void;
  passwordValue: string;
  onPasswordChange: (e: SyntheticEvent) => void;
}

const LoginPage = (props: loginProps) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { userRequest } = useAppSelector((store) => store.userReducer);

  const {
    showed,
    onIconClick,
    emailValue,
    onEmailChange,
    passwordValue,
    onPasswordChange,
  } = props;

  const signIn = () => {
    dispatch(loginUser(emailValue, passwordValue));
  };
  const token = localStorage.getItem("accessToken");

  useEffect(() => {
    if (token) {
      navigate("/", { replace: true });
    }
  }, [navigate, token, userRequest]);

  return (
    <>
      <AppHeader />
      <div className={loginStyles.main}>
        <h1>Вход</h1>
        <Input
          name={"email"}
          type={"text"}
          placeholder={emailValue ? "" : "E-mail"}
          onChange={onEmailChange}
          value={emailValue}
          error={false}
          errorText={"Ошибка"}
          size={"default"}
          extraClass="ml-1"
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        />
        <Input
          type={"text"}
          placeholder={passwordValue ? "" : "Пароль"}
          onChange={onPasswordChange}
          icon={showed ? "HideIcon" : "ShowIcon"}
          value={passwordValue}
          name={"password"}
          error={false}
          // ref={""}
          onIconClick={onIconClick}
          errorText={"Ошибка"}
          size={"default"}
          extraClass="ml-1"
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        />
        <Button onClick={signIn} htmlType="button" type="primary" size="large">
          Войти
        </Button>
      </div>
      <section className={loginStyles.section}>
        <span className={loginStyles.span}>
          Вы — новый пользователь?{" "}
          <Link to="/register">
            <Button
              htmlType="button"
              type="secondary"
              size="large"
              extraClass={loginStyles.button}
            >
              Зарегистрироваться
            </Button>
          </Link>
        </span>
        <span className={loginStyles.span}>
          Забыли пароль?{" "}
          <Link to="/forgot-password">
            <Button
              htmlType="button"
              type="secondary"
              size="large"
              extraClass={loginStyles.button}
            >
              Восстановить пароль
            </Button>
          </Link>
        </span>
      </section>
    </>
  );
};

export default LoginPage;

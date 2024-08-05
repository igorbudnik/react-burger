import { Link, useNavigate } from "react-router-dom";
import loginStyles from "./login.module.css";
import AppHeader from "../components/AppHeader/app-header";
import {
  Button,
  Input,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useAppDispatch, useAppSelector } from "..";
import { registerUser } from "../services/actions/password";
import { SyntheticEvent, useEffect } from "react";

interface registerProps {
  showed: boolean;
  onIconClick: () => void;
  loginValue: string;
  onLoginChange: (e: SyntheticEvent) => void;
  emailValue: string;
  onEmailChange: (e: SyntheticEvent) => void;
  passwordValue: string;
  onPasswordChange: (e: SyntheticEvent) => void;
  registerRequest: boolean;
}

const RegisterPage = (props: registerProps) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const {
    showed,
    onIconClick,
    loginValue,
    onLoginChange,
    emailValue,
    onEmailChange,
    passwordValue,
    onPasswordChange,
  } = props;

  const { registerRequest } = useAppSelector((store) => store.userReducer);

  useEffect(() => {
    if (registerRequest) {
      navigate("/login");
    }
  }, [registerRequest]);

  const onClick = () => {
    dispatch(registerUser(loginValue, emailValue, passwordValue));
  };

  return (
    <>
      <AppHeader />
      <div className={loginStyles.main}>
        <h1>Регистрация</h1>
        <Input
          type={"text"}
          placeholder={loginValue ? "" : "Имя"}
          onChange={onLoginChange}
          value={loginValue}
          name={"name"}
          error={false}
          errorText={"Ошибка"}
          size={"default"}
          extraClass="ml-1"
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        />
        <Input
          type={"text"}
          placeholder={emailValue ? "" : "E-mail"}
          onChange={onEmailChange}
          value={emailValue}
          name={"name"}
          error={false}
          // ref={""}

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
          name={"name"}
          error={false}
          // ref={""}
          onIconClick={onIconClick}
          errorText={"Ошибка"}
          size={"default"}
          extraClass="ml-1"
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        />
        {/* <Link to="/"> */}
        <Button onClick={onClick} htmlType="button" type="primary" size="large">
          Зарегистрироваться
        </Button>
        {/* </Link> */}
      </div>
      <section className={loginStyles.section}>
        <span className={loginStyles.span}>
          Уже зарегистрированы?{" "}
          <Link to="/login">
            <Button
              htmlType="button"
              type="secondary"
              size="medium"
              extraClass={loginStyles.button}
            >
              Войти
            </Button>
          </Link>
        </span>
      </section>
    </>
  );
};

export default RegisterPage;

import {
  Button,
  Input,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { Link, useNavigate } from "react-router-dom";
import AppHeader from "../components/AppHeader/app-header";
import loginStyles from "./login.module.css";
import { newPassword } from "../services/actions/password";
import { useAppDispatch, useAppSelector } from "..";
import { SyntheticEvent, useEffect } from "react";

interface loginProps {
  emailValue: string;
  onEmailChange: (e: SyntheticEvent) => void;
}

const ForgotPage = (props: loginProps) => {
  const { emailValue, onEmailChange } = props;
  const { passwordFailed, passwordRequest } = useAppSelector(
    (store) => store.userReducer
  );
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onClick = () => {
    dispatch(newPassword(emailValue));
  };

  useEffect(() => {
    if (passwordRequest) {
      console.log(emailValue);

      navigate("/reset-password");
    }
  }, [passwordRequest, passwordFailed]);

  return (
    <>
      <AppHeader />
      <div className={loginStyles.main}>
        <h1>Восстановление пароля</h1>
        <Input
          type={"text"}
          placeholder={emailValue ? "" : "Укажите E-mail"}
          onChange={onEmailChange}
          value={emailValue}
          name={"name"}
          error={false}
          errorText={"Ошибка"}
          size={"default"}
          extraClass="ml-1"
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        />
        <Button onClick={onClick} htmlType="button" type="primary" size="large">
          Восстановить
        </Button>
      </div>
      <section className={loginStyles.section}>
        <span className={loginStyles.span}>
          Вспомнили пароль?{" "}
          <Link to="/login">
            <Button
              htmlType="button"
              type="secondary"
              size="large"
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

export default ForgotPage;

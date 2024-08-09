import {
  Button,
  Input,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { Link, useNavigate } from "react-router-dom";
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

  const onClick = (event: SyntheticEvent) => {
    event.preventDefault();
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
      <div className={loginStyles.main}>
        <h1>Восстановление пароля</h1>
        <form className={loginStyles.form} onSubmit={onClick}>
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

          <Button htmlType="submit" type="primary" size="large">
            Восстановить
          </Button>
        </form>
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

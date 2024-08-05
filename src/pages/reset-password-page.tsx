import {
  Button,
  Input,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { Link, useNavigate } from "react-router-dom";
import AppHeader from "../components/AppHeader/app-header";
import loginStyles from "./login.module.css";
import { useAppDispatch, useAppSelector } from "..";
import { resetPassword } from "../services/actions/password";
import { SyntheticEvent, useEffect } from "react";

interface loginProps {
  showed: boolean;
  onIconClick: () => void;
  codeValue: string;
  onCodeChange: (e: SyntheticEvent) => void;
  passwordValue: string;
  onPasswordChange: (e: SyntheticEvent) => void;
}

const ResetPage = (props: loginProps) => {
  const {
    showed,
    onIconClick,
    passwordValue,
    onPasswordChange,
    codeValue,
    onCodeChange,
  } = props;

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { resetFailed, resetRequest } = useAppSelector(
    (store) => store.userReducer
  );

  const onClick = () => {
    dispatch(resetPassword(passwordValue, codeValue));
  };

  useEffect(() => {
    if (resetRequest) {
      navigate("/login");
    }
  }, [resetRequest, resetFailed]);

  return (
    <>
      <AppHeader />
      <div className={loginStyles.main}>
        <h1>Восстановление пароля</h1>
        <Input
          type={"text"}
          placeholder={passwordValue ? "" : "Введите новый пароль"}
          onChange={onPasswordChange}
          value={passwordValue}
          name={"name"}
          error={false}
          icon={showed ? "HideIcon" : "ShowIcon"}
          onIconClick={onIconClick}
          errorText={"Ошибка"}
          size={"default"}
          extraClass="ml-1"
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        />
        <Input
          type={"text"}
          placeholder={codeValue ? "" : "Введите код из письма"}
          onChange={onCodeChange}
          value={codeValue}
          name={"name"}
          error={false}
          errorText={"Ошибка"}
          size={"default"}
          extraClass="ml-1"
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        />

        <Button onClick={onClick} htmlType="button" type="primary" size="large">
          Сохранить
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

export default ResetPage;

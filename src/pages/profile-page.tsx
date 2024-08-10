import {
  Input,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useNavigate, NavLink } from "react-router-dom";
import loginStyles from "./login.module.css";
import { useAppDispatch, useAppSelector } from "..";
import {
  ChangeEvent,
  SyntheticEvent,
  useEffect,
  useMemo,
  useState,
} from "react";
import { changeInfo, logoutUser } from "../services/actions/password";

interface profileProps {
  edited: boolean[];
  onEditClick: (index: SyntheticEvent) => void;
  loginValue: string;
  onLoginChange: (e: SyntheticEvent) => void;
  emailValue: string;
  onEmailChange: (e: SyntheticEvent) => void;
  passwordValue: string;
  onPasswordChange: (e: SyntheticEvent) => void;
}

const ProfilePage = (props: profileProps) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const links = [
    { name: "Профиль", link: "/profile" },
    { name: "История заказов", link: "/history" },
    { name: "Выход", link: "/login" },
  ];

  const { passwordFailed, passwordRequest } = useAppSelector(
    (store) => store.userReducer
  );

  const onClick = async (name: string) => {
    if (name === "Выход") {
      localStorage.removeItem("accessToken");

      dispatch(logoutUser());
    }
  };

  const { edited, loginValue, emailValue, passwordValue } = props;

  interface User {
    field: string;
    name: string;
    value: string;
    active: boolean;
  }

  const [info, setInfo] = useState<User[]>([
    {
      field: "Имя",
      name: "name",
      value: localStorage.getItem("name") || "",
      active: false,
    },
    {
      field: "Логин",
      name: "email",
      value: localStorage.getItem("email") || "",
      active: false,
    },
    { field: "Пароль", name: "password", value: "", active: false },
  ]);

  const newInfo = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    setInfo(
      info.map((item, i) => {
        if (i === index) {
          item.value = e.target.value;
        }
        return item;
      })
    );
  };

  const onEditClick = (index: number) => {
    setInfo(
      info.map((item, i) => {
        if (i === index) {
          item.active = !item.active;
        }
        return item;
      })
    );
  };

  const cancelInfo = () => {
    setInfo([
      {
        field: "Имя",
        name: "name",
        value: localStorage.getItem("name") || "",
        active: false,
      },
      {
        field: "Логин",
        name: "email",
        value: localStorage.getItem("email") || "",
        active: false,
      },
      { field: "Пароль", name: "password", value: "", active: false },
    ]);
  };

  const onChangeInfo = (event: SyntheticEvent) => {
    event.preventDefault();
    dispatch(changeInfo(info[0].value, info[1].value, info[2].value));
  };

  useEffect(() => {
    if (passwordRequest) {
      navigate("/reset-password");
    }
  }, [passwordRequest, passwordFailed]);

  return (
    <>
      <div className={loginStyles.main}>
        <div className={loginStyles.inner}>
          <section className={loginStyles.left_section}>
            <nav className={loginStyles.nav}>
              {links.map((item, index) => {
                return (
                  <div className={loginStyles.container}>
                    <NavLink
                      onClick={() => onClick(item.name)}
                      className={loginStyles.navlink}
                      style={({ isActive }) => ({
                        color: isActive ? "white" : "gray",
                      })}
                      key={index}
                      to={item.link}
                    >
                      {item.name}
                    </NavLink>
                  </div>
                );
              })}
            </nav>
            <span className={loginStyles.text}>В этом разделе вы можете</span>
            <span className={loginStyles.text}>
              изменить свои персональные данные
            </span>
          </section>
          <section className={loginStyles.section}>
            <form className={loginStyles.form} onSubmit={onChangeInfo}>
              {info.map((input, index) => {
                return (
                  <Input
                    key={index}
                    type={"text"}
                    placeholder={input.value ? "" : input.field}
                    onChange={(e) => newInfo(e, index)}
                    value={input.value}
                    name={input.name}
                    disabled={!input.active}
                    icon={input.active ? "CheckMarkIcon" : "EditIcon"}
                    onIconClick={() => onEditClick(index)}
                    error={false}
                    errorText={"Ошибка"}
                    size={"default"}
                    extraClass="ml-1"
                    onPointerEnterCapture={undefined}
                    onPointerLeaveCapture={undefined}
                  />
                );
              })}
              <div className={loginStyles.confirm_button}>
                <Button
                  onClick={cancelInfo}
                  htmlType="button"
                  type="secondary"
                  size="large"
                >
                  Отменить
                </Button>
                <Button htmlType="submit" type="primary" size="large">
                  Сохранить
                </Button>
              </div>
            </form>
          </section>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;

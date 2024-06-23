import ReactDOM from "react-dom";
import modalStyle from "./modal.module.css";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { AppProps } from "../IngredientDetails/ingredient-details";
import { useEffect } from "react";

const modalRoot = document.getElementById("react-modals") as HTMLElement;

const Modal = (props: AppProps) => {
  const { isVisible, changeOpen, children } = props;

  useEffect(() => {
    document.addEventListener("keyup", function (e) {
      if (e.key == "Escape") {
        console.log(e.key);

        changeOpen(false);
      }
    });
  });
  return ReactDOM.createPortal(
    <div tabIndex={0} className={modalStyle.full}>
      <div className={modalStyle.modal}>
        <section id="head" className={modalStyle.section}>
          <h1
            style={{ visibility: isVisible ? "visible" : "hidden" }}
            className={`${modalStyle.h1} text text_type_main-large`}
          >
            Детали ингредиента
          </h1>
          <div className={modalStyle.close}>
            <CloseIcon type="primary" onClick={() => changeOpen(false)} />
          </div>
          {children}
        </section>
      </div>
    </div>,
    modalRoot
  );
};

export default Modal;

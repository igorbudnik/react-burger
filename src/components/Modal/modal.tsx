import ReactDOM from "react-dom";
import modalStyle from "./modal.module.css";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { AppProps } from "../IngredientDetails/ingredient-details";
import { useEffect } from "react";
import ModalOverlay from "../ModalOverlay/modal-overlay";

const modalRoot = document.getElementById("react-modals") as HTMLElement;

const Modal = (props: AppProps) => {
  const { changeOpen, children } = props;

  const modalEsc = (e: any) => {
    if (e.key === "Escape") {
      changeOpen(false);
    }
  };
  useEffect(() => {
    document.addEventListener("keyup", modalEsc);

    return () => document.removeEventListener("keyup", modalEsc);
  }, []);
  return ReactDOM.createPortal(
    <div tabIndex={0} className={modalStyle.full}>
      <ModalOverlay changeOpen={changeOpen} />
      <div className={modalStyle.modal}>
        <section id="head" className={modalStyle.section}>
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

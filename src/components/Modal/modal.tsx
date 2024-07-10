import ReactDOM from "react-dom";
import modalStyle from "./modal.module.css";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { useEffect, ReactNode } from "react";
import ModalOverlay from "../ModalOverlay/modal-overlay";

const modalRoot = document.getElementById("react-modals") as HTMLElement;

export interface AppProps {
  changeClose: () => void;
  children: ReactNode;
}

const Modal = (props: AppProps) => {
  const { changeClose, children } = props;

  const modalEsc = (e: KeyboardEvent) => {
    if (e.key === "Escape") {
      changeClose();
    }
  };
  useEffect(() => {
    document.addEventListener("keyup", modalEsc);

    return () => document.removeEventListener("keyup", modalEsc);
  }, []);
  return ReactDOM.createPortal(
    <div tabIndex={0} className={modalStyle.full}>
      <ModalOverlay changeOpen={changeClose} />
      <div className={modalStyle.modal}>
        <section id="head" className={modalStyle.section}>
          <div className={modalStyle.close}>
            <CloseIcon type="primary" onClick={() => changeClose()} />
          </div>
          {children}
        </section>
      </div>
    </div>,
    modalRoot
  );
};

export default Modal;

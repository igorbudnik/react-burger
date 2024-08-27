import ReactDOM from "react-dom";
import modalStyle from "./modal.module.css";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { useEffect } from "react";
import ModalOverlay from "../ModalOverlay/modal-overlay";
import { ModalProps } from "../Types/types";
import { useAppDispatch } from "../..";
import { useNavigate } from "react-router-dom";
import { CLOSE_INGREDIENT } from "../../services/actions/details";
import { CLOSE_ORDER } from "../../services/actions/modal";

const modalRoot = document.getElementById("react-modals") as HTMLElement;

const Modal = (props: ModalProps) => {
  const { url, children } = props;

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const setClosed = (url: string) => {
    dispatch({ type: CLOSE_INGREDIENT });
    dispatch({ type: CLOSE_ORDER });
    navigate(url);
  };

  const modalEsc = (e: KeyboardEvent) => {
    if (e.key === "Escape") {
      setClosed(url);
    }
  };
  useEffect(() => {
    document.addEventListener("keyup", modalEsc);

    return () => document.removeEventListener("keyup", modalEsc);
  }, []);
  return ReactDOM.createPortal(
    <div tabIndex={0} className={modalStyle.full}>
      <ModalOverlay changeOpen={() => setClosed(url)} />
      <div className={modalStyle.modal}>
        <section id="head" className={modalStyle.section}>
          <div className={modalStyle.close}>
            <CloseIcon type="primary" onClick={() => setClosed(url)} />
          </div>
          {children}
        </section>
      </div>
    </div>,
    modalRoot
  );
};

export default Modal;

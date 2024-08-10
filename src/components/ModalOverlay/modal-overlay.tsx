import { PropsOverlay } from "../Types/types";
import modalStyle from "./modal-overlay.module.css";

const ModalOverlay = (props: PropsOverlay) => {
  const { changeOpen } = props;

  return (
    <div onClick={() => changeOpen(false)} className={modalStyle.full}></div>
  );
};

export default ModalOverlay;

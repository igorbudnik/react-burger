import modalStyle from "./modal-overlay.module.css";

// const overlay = document.getElementById("overlay")
interface PropsOverlay {
  changeOpen: (opened: boolean) => void;
}

const ModalOverlay = (props: PropsOverlay) => {
  const { changeOpen } = props;

  return (
    <div onClick={() => changeOpen(false)} className={modalStyle.full}></div>
  );
};

export default ModalOverlay;

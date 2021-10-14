import { useEffect } from "react";

import style from "./Modal.module.css";

function Modal({ modalImg, modalClose }) {
  // componentDidMount() {
  //   window.addEventListener("keydown", this.closeModalByESC);
  // }

  // componentWillUnmount() {
  //   window.removeEventListener("keydown", this.closeModalByESC);
  // }

  useEffect(() => {
    window.addEventListener("keydown", closeModalByESC);

    return () => {
      window.removeEventListener("keydown", closeModalByESC);
    };
  });

  const closeModalByESC = (e) => {
    if (e.key !== "Escape") {
      return;
    }
    modalClose();
    console.log("1");
  };

  return (
    <div onClick={modalClose} className={style.Overlay}>
      <div className={style.Modal}>
        <img src={modalImg} alt="" />
      </div>
    </div>
  );
}

export default Modal;

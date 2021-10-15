import { useEffect } from "react";

import style from "./Modal.module.css";

function Modal({ modalImg, modalClose }) {
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

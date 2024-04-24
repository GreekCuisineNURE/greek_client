import React from "react";
import cl from "./ModalType.module.css";

const ModalType = ({ show, onHide }) => {
  return (
    <div
      show={show}
      onHide={onHide}
      className={show ? `${cl.modal} ${cl.active}` : cl.modal}
      onClick={() => onHide(false)}
    >
      <div className={cl.modal_content} onClick={(e) => e.stopPropagation()}>
        <input type="text" placeholder="Впищіть назву типу" />
        <button className={cl.button}>Створити</button>
      </div>
    </div>
  );
};

export default ModalType;

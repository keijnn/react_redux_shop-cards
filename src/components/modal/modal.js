import React from "react";
import "./modal.css";

export const Modal = ({active, setActive, children}) => {
  return (
    <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}> {/*bg*/}
        <div className={active ? "modal__content active" : "modal__content"} onClick={e => e.stopPropagation()}> {/*for multiple using in other code*/}
            {children}
        </div>
    </div>
  );
};
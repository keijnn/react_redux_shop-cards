import React from "react";
import { Link } from "react-router-dom";
import "./header.css";
import { Modal } from '../modal/modal.js'
import { useState } from "react";

export const Header = () => {
  const [modalActive, setModalActive] = useState(false)
  return (
    <div className="header">
      <div className="wrapper">
        <Link to="/" className="header__store-title">
          Store
        </Link>
      </div>
      <div className="wrapper add">
        <button onClick={() => setModalActive(true)}>Add</button> {/*Add dosen't word*/}
      </div>
      <Modal active={modalActive}>
        <form action="">
          <button setActive={setModalActive}>x</button>
        </form>
      </Modal>
    </div>
  );
};

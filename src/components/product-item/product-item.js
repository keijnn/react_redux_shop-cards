import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { setCurrentProduct } from "../../store/products/reducer";
import "./product-item.css";
import { Modal } from "../modal/modal.js"
import { useState } from 'react'

export const ProductItem = ({ product }) => {
  const history = useHistory();
  const [modalActive, setModalActive] = useState(false)
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(setCurrentProduct(product));
    history.push(`/app/${product.name}`); /*custom url*/
  };

  return (
    <div className="product-item">
      <div className="product-item__details">
        <span className="product-item__title">{product.name}</span> {/*title*/}
        <img alt="some" className="img" src={product.imageUrl}></img> {/*img*/}
        <div className="product-interactive">
        <button onClick={handleClick} className="buttons">Info</button>
        <button  className="buttons" onClick={() => setModalActive(true)}>Delete</button> {/*not work*/}
      </div>
      </div>
      <Modal active={modalActive}>
        <form action="">
          <p>Are you sure you want to delete this?</p>
          <button setActive={setModalActive}>No</button> {/*delete doesn't work. Please wait new vesion */} 
        </form>
      </Modal>
    </div>
  );
};

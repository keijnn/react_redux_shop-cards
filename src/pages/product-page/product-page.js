import React from "react";
import { useSelector} from 'react-redux';
import "./product-page.css";
import { useState } from 'react'
import { Modal } from './../../components/modal/modal';

export const ProductPage = () => {
  const product = useSelector(state => state.products.currentProduct); /*current product page*/
  const [modalActive, setModalActive] = useState(false)
  if(!product) return null

  return (
    <div className="product-page">
      <h1 className="product-page__title">{ product.name }</h1>
      <div className="product-page__content">
        <div className="product-page__left">
        <img alt="some" className="img" src={product.imageUrl}></img> {/*image*/}
        <button className="change_info" onClick={() => setModalActive(true)}>Change info</button>
        </div>
        <div className="product-page__right">
          <p>Count: {product.count}</p>
          <p>Weight: {product.weight}</p>
          <p>Width: {product.size.height}</p>
          <p>Height: {product.size.height}</p>
        </div>
      </div>
      <Modal className="modal__style" active={modalActive}>
        <p>Change info</p>
        <form action="">
          <input disabled></input>
          <input disabled></input>
          <input disabled></input>
          <input disabled></input>
          <button setActive={setModalActive}>x</button> {/*if you reload or press any button you will be taken to a new page. I don't know how fix*/}
          <button>Submit</button> {/*Submit doesn't work*/}
        </form>
      </Modal>
    </div>
  );
};

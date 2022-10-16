import React from "react";
import ColorPicker from './components/color-picker/ColorPicker';
import StoragePicker from './components/storage-picker/StoragePicker';
import Quantity from './components/quantity/Quantity';
import Shipping from './components/shipping/Shipping';
import ConfirmOrder from './components/confirm-order/ConfirmOrder';

import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as icons from '@fortawesome/free-solid-svg-icons'
import "./styles.scss";

const Details = () => {
  const priceSelector = useSelector((state) => state.price);
  const {qtyPrice, shippingPrice, total} = priceSelector;

  return (
    <>
      <section className="details-container">
        <div className="details-header">
            <h5>Single SIM 11 Pro Max Phone Gold 512GB6.5 Inch Hot Selling Phone Wholesale</h5>
        </div>
        <div className="details-code-rate">
            <span className="code">Product Code:  578902-00</span>
            <span className="rate-icon">
                <FontAwesomeIcon className="star" icon={icons.faStar} />
                <FontAwesomeIcon className="star" icon={icons.faStar} />
                <FontAwesomeIcon className="star" icon={icons.faStar} />
                <FontAwesomeIcon className="star" icon={icons.faStar} />
                <FontAwesomeIcon className="star" icon={icons.faStar} />
            </span>
            <span className="rate">4.6<span className="total">(200)</span></span>
        </div>
        <div className="details-pieces-price">
            <div className="price-1">
                <p>10 - 25 Pieces</p>
                <h5>$1,150,50.00</h5>
            </div>
            <div className="price-2">
                <p>10-19 Pieces</p>
                <h5>$1,145.00</h5>
            </div>
            <div className="price-3">
                <p>50+ Pieces</p>
                <h5>$1,145.00</h5>
            </div>
        </div>
        <div className="color-picker">
            <h6>Availble color</h6>
            <ColorPicker />
        </div>
        <div className="storage-picker">
            <h6>Storage capacity</h6>
            <StoragePicker />
        </div>
        <div className="quantity">
            <div className="qty-heading">
              <h6>Quantity</h6>
              <p>${qtyPrice}</p>
            </div>
            <Quantity />
        </div>
        <div className="shipping">
            <div className="shipping-heading">
              <h6>Shipping</h6>
              <p>${shippingPrice}</p>
            </div>
            <Shipping />
        </div>
        <div className="confirm-order">
            <div className="confirm-order-heading">
              <h6>Shipping</h6>
              <p>${total}</p>
            </div>
            <ConfirmOrder />
        </div>
      </section>
    </>
  );
};

export default Details;

import React, { useState, useContext }  from "react";
import { shippingContext } from "../../../../context";
import { useDispatch } from 'react-redux'
import { setShippingPriceAndTotal } from '../../../../redux/sliceReducers/priceSlice';

import "./styles.scss";

const Shipping = () => {
    const dispatch = useDispatch()
    const shipping = useContext(shippingContext);
    const [activeId, setActiveId] = useState(shipping[1].id);
  
    const buttons = shipping.map((price) => {
      return (
        <button
          className={activeId === price.id ? "active" : null}
          onClick={() => {
            setActiveId(price.id);
            dispatch(setShippingPriceAndTotal(price.price))
          }}
          key={price.id}>
          {price.type}<span>{price.estimate}</span>
        </button>
      );
    });
    return (
      <>
        <div className="shipping-btn">{buttons}</div>
      </>
    );
};

export default Shipping;

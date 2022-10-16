import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  incrementQty,
  decrementQty,
} from "../../../../redux/sliceReducers/priceSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as icons from "@fortawesome/free-solid-svg-icons";

import "./styles.scss";

const Quantity = () => {
  const dispatch = useDispatch();
  const [counter, setCounter] = useState(1);
  const priceSelector = useSelector((state) => state.price);
  const {totalQuantity, storagePrice} = priceSelector;

  useEffect(() => {
    setCounter(1);
  }, [storagePrice]);

  const handleMinusCounter = () => {
    if (counter > 1) {
      let res = counter - 1;
      setCounter(res);
      dispatch(decrementQty(res));
    }
  };

  const handlePlussCounter = () => {
    if (counter < totalQuantity) {
      let res = counter + 1;
      setCounter(res);
      dispatch(incrementQty(res));
    }
  };

  return (
    <>
      <span className="quantity-btn">
        <span
          onClick={() => {
            handleMinusCounter();
          }}
          className="minus">
          <FontAwesomeIcon icon={icons.faMinus} />
        </span>
        <span
          onClick={() => {
            handlePlussCounter();
          }}
          className="plus">
          <FontAwesomeIcon icon={icons.faPlus} />
        </span>
      </span>
      <span className="total-text">{totalQuantity} Pieces</span>
    </>
  );
};

export default Quantity;

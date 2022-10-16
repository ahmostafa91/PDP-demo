import React, { useState, useContext }  from "react";
import { storageContext } from "../../../../context";
import { useDispatch } from 'react-redux'
import { setStoragePrice } from '../../../../redux/sliceReducers/priceSlice';

import "./styles.scss";

const StoragePicker = () => {
    const dispatch = useDispatch()
    const storage = useContext(storageContext);
    const [activeId, setActiveId] = useState(storage[0].id);
  
    const buttons = storage.map((storage) => {
      return (
        <button
          className={activeId === storage.id ? "active" : null}
          onClick={() => {
            setActiveId(storage.id);
            dispatch(setStoragePrice(storage.price))
          }}
          key={storage.id}>
          {storage.size}<span>GB</span>
        </button>
      );
    });
    return (
      <>
        <div className="stoarge-btn">{buttons}</div>
      </>
    );
};

export default StoragePicker;

import React, { useState, useContext } from "react";
import { buttonTypesContext } from "../../../../context";
// redux
import { useDispatch } from 'react-redux'
import { setImageId } from '../../../../redux/sliceReducers/colorPickerSlice';

import "./styles.scss";

const ColorPicker = () => {
  const dispatch = useDispatch()
  const types = useContext(buttonTypesContext);
  const [activeId, setActiveId] = useState(types[0].id);

  const buttons = types.map((btn) => {
    return (
      <button
        className={activeId === btn.id ? "active" : null}
        onClick={() => {
          setActiveId(btn.id);
          dispatch(setImageId(btn.id))
        }}
        key={btn.id}>
        <div style={{ backgroundColor: btn.type }}></div>
        {btn.type}
      </button>
    );
  });
  return (
    <>
      <div className="pickers">{buttons}</div>
    </>
  );
};

export default ColorPicker;

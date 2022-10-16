import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as icons from "@fortawesome/free-solid-svg-icons";

import "./styles.scss";

const ConfirmOrder = () => {
  return (
    <>
      <div className="confirm-order-btn">
        <button className="confirm">Confirm order</button>
        <button className="call">
        <span><FontAwesomeIcon icon={icons.faPhone} /></span> Call us
        </button>
      </div>
    </>
  );
};

export default ConfirmOrder;

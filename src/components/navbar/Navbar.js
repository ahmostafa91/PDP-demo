import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as iconsSolid from '@fortawesome/free-solid-svg-icons'

import "./styles.scss";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", changeWidth);

    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

  return (
    <div className="nav">
      {(toggleMenu || screenWidth > 765) && (
        <ul className="list">
          <li className="items">Services</li>
          <li className="items">Orders</li>
          <li className="items">Accounts</li>
          <li className="items">
            <span className="cart">
              {!toggleMenu ? <FontAwesomeIcon icon={iconsSolid.faBagShopping} /> : 'Cart'}
              {!toggleMenu && <span className="notification">2</span>}
            </span>
          </li>
        </ul>
      )}
      <FontAwesomeIcon icon={iconsSolid.faBars} className="btn" onClick={toggleNav} />
    </div>
  );
};

export default Navbar;

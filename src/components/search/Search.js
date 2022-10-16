import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as iconsSolid from "@fortawesome/free-solid-svg-icons";

import "./styles.scss";

const Search = () => {
  return (
    <>
      <div className="search">
        <div className="search-container">
          <input type="text" placeholder="Search" />
          <FontAwesomeIcon className="search-icon" icon={iconsSolid.faSearch} />
        </div>
        <div className="select-container">
          <select>
            <option>Phone</option>
            <option>TV</option>
          </select>
        </div>
      </div>
    </>
  );
};

export default Search;

import React from "react";
import Gallery from "../../components/gallery/Gallery";
import Details from "../../components/details/Details";

import './styles.scss';

const Body = () => {
  return (
    <main>
        <div className="gallery">
            <Gallery />
        </div>
        <div className="details">
            <Details />
        </div>
    </main>
  );
};

export default Body;

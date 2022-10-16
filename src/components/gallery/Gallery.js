import React, { useState, useContext, useEffect } from "react";
import { buttonTypesContext } from "../../context";
import { useSelector } from "react-redux";

import "./styles.scss";

const Gallery = () => {
  const images = useContext(buttonTypesContext);
  const imageId = useSelector((state) => state.colorPicker);

  const [imageSrc, setImageSrc] = useState();
  const [imageAlt, setImageAlt] = useState();
  const [imageObj, setImageObj] = useState(images[0]);
  const [colUi, setColUi] = useState([]);

  const createCol = (images, defImage) => {
    let imagesUiArr = images.map((src, i) => {
      return (
        <div className="column" key={src + " col " + i}>
          <img
            src={src}
            alt={`${i}`}
            onClick={(e) => myFunction(e)}
            key={src + " " + i}
          />
        </div>
      );
    });
    imagesUiArr.unshift(
      <div className="column" key={`${defImage} colKey`}>
        <img
          src={defImage}
          alt={`def`}
          key={`${defImage} newDef`}
          onClick={(e) => myFunction(e)}
        />
      </div>
    );
    return imagesUiArr;
  };

  useEffect(() => {
    setImageObj(images.find((obj) => obj.id === imageId.imageId));
    // eslint-disable-next-line
  }, [imageId]);

  useEffect(() => {
    setImageSrc(imageObj.image);
    setImageAlt(imageObj.type);

    setColUi(createCol(imageObj.images, imageObj.image));
    // eslint-disable-next-line
  }, [imageObj.id]);

  const myFunction = (img) => {
    setImageSrc(img.target.src);
    setImageAlt(img.target.alt);
  };

  return (
    <>
      <section className="gallery-container">
        <div className="main-image">
          <img alt={imageAlt} src={imageSrc} />
        </div>
        <div className="row">{colUi}</div>
      </section>
    </>
  );
};

export default Gallery;

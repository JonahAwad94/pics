import "./ImageList.css";
import React from "react";

const ImageList = props => {
  // destructor so you don't need to type image.description, image.id, image.regular
  const images = props.images.map(({ description, id, urls }) => {
    return <img alt={description} key={id} src={urls.regular} />;
  });

  return <div className="image-list">{images}</div>;
};

export default ImageList;

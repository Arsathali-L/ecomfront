

import React from "react";
import "./Card.scss";
import { Link } from "react-router-dom";

// Fallback image if no image is available
const FALLBACK_IMAGE = "https://via.placeholder.com/300x400?text=No+Image";

const Card = ({ item }) => {
  const mainImg =
    item?.attributes?.img?.data?.attributes?.url
      ? process.env.REACT_APP_UPLOAD_URL + item.attributes.img.data.attributes.url
      : FALLBACK_IMAGE;

  const secondImg =
    item?.attributes?.img2?.data?.attributes?.url
      ? process.env.REACT_APP_UPLOAD_URL + item.attributes.img2.data.attributes.url
      : mainImg;

  return (
    <Link className="link" to={`/product/${item?.id}`}>
      <div className="card">
        <div className="image">
          {item?.attributes?.isNew && <span>New Season</span>}
          <img src={mainImg} alt={item?.attributes?.title || "Product"} className="mainImg" />
          <img src={secondImg} alt={item?.attributes?.title || "Product"} className="secondImg" />
        </div>
        <h2>{item?.attributes?.title || "Untitled Product"}</h2>
        <div className="prices">
          <h3>${item?.attributes?.oldPrice || (item?.attributes?.price ? item.attributes.price + 20 : 0)}</h3>
          <h3>${item?.attributes?.price || 0}</h3>
        </div>
      </div>
    </Link>
  );
};

export default Card;


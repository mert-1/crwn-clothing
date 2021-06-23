import React from "react";

import "./collection-item.styles.scss";

const CollectionItem = ({ id, name, price, imageUrl }) => (
  <div className="w-100 m-3 d-flex flex-column collection-item">
    <div
      className="h-100 image"
      style={{ backgroundImage: `url(${imageUrl})` }}
    />
    <div className="d-flex justify-content-between mt-2 fs-5">
      <span>{name}</span>
      <span>{price}</span>
    </div>
  </div>
);

export default CollectionItem;

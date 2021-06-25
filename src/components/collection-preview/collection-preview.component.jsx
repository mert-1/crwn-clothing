import React from "react";
import CollectionItem from "../collection-item/collection-item.components";

const CollectionPreview = ({ title, items }) => (
  <div className="d-flex flex-column pb-4">
    <h1 className="fs-1">{title.toUpperCase()}</h1>
    <div className="d-flex justify-content-between">
      {items
        .filter((item, idx) => idx < 4)
        .map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </div>
  </div>
);

export default CollectionPreview;

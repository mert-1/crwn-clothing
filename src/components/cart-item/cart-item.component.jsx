import React from "react";

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
  <div className="d-flex mb-3">
    <img src={imageUrl} alt="item" style={{ width: "30%" }} />
    <div className="d-flex flex-column justify-content-center p-3">
      <span>{name}</span>
      <span>
        {quantity} x ${price}
      </span>
    </div>
  </div>
);

export default CartItem;

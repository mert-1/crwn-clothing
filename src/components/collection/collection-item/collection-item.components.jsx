import React from "react";
import CustomButton from "../../custom-button/custom-button.component";
import "./collection-item.styles.scss";
import { connect } from "react-redux";
import { addItem } from "../../../redux/cart/cart.actions";

const CollectionItem = ({ item, addItem }) => (
  <div className="w-100 m-3 d-flex flex-column collection-item">
    <div
      className="h-100 image"
      style={{ backgroundImage: `url(${item.imageUrl})` }}
    >
      <CustomButton onClick={() => addItem(item)} inverted>
        ADD TO CART
      </CustomButton>
    </div>
    <div className="d-flex justify-content-between mt-2 fs-5">
      <span>{item.name}</span>
      <span>{item.price}</span>
    </div>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);

import React from "react";
import { connect } from "react-redux";
import { toggleCartHidden } from "../../../redux/cart/cart.actions";

import { selectCartItemsCount } from "../../../redux/cart/cart.selectors";
import { CartIconContainer, ShoppingIcon, ItemCount } from "./cart-icon.styles";
import { createStructuredSelector } from "reselect";

const CartIcon = ({ toggleCartHidden, itemCount }) => (
  <CartIconContainer onClick={toggleCartHidden}>
    <ShoppingIcon />
    <ItemCount className="item-count">{itemCount}</ItemCount>
  </CartIconContainer>
);

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
});

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);

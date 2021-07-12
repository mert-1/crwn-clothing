import React from "react";
import { connect } from "react-redux";
import CustomButton from "../../custom-button/custom-button.component";
import {
  CartDropdownContainer,
  CartElements,
  CartItems,
} from "./cart-dropdown.styles.jsx";
import { selectCartItems } from "../../../redux/cart/cart.selectors";

import CartItem from "../cart-item/cart-item.component";

import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";
import { toggleCartHidden } from "../../../redux/cart/cart.actions";

const CartDropdown = ({ cartItems, history, dispatch }) => (
  <CartDropdownContainer>
    {cartItems.length > 0 ? (
      <CartElements>
        <CartItems>
          {cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))}
        </CartItems>
        <CustomButton
          onClick={() => {
            history.push("/checkout");
            dispatch(toggleCartHidden());
          }}
        >
          GO TO CHECKOUT
        </CustomButton>
      </CartElements>
    ) : (
      <div>Your Bag is empty.</div>
    )}
  </CartDropdownContainer>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default withRouter(connect(mapStateToProps)(CartDropdown));

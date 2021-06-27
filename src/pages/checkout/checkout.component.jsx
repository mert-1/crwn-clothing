import React from "react";

import "./checkout.styles.scss";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cart.selectors.js";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import CustomButton from "../../components/custom-button/custom-button.component";

import { withRouter } from "react-router-dom";
import StripeCheckoutButton from "../../components/stripe-button/stripe-button";

const CheckoutPage = ({ cartItems, total, history }) => {
  console.log("cartItems", cartItems);
  return (
    <div className="checkout-page">
      {cartItems.length > 0 ? (
        <div>
          <div className="checkout-header">
            <div className="header-block">
              <span>Product</span>
            </div>
            <div className="header-block">
              <span>Description</span>
            </div>
            <div className="header-block">
              <span>Quantity</span>
            </div>
            <div className="header-block">
              <span>Price</span>
            </div>
            <div className="header-block">
              <span>Remove</span>
            </div>
          </div>
          {cartItems.map((cartItem) => (
            <CheckoutItem key={cartItem.id} cartItem={cartItem} />
          ))}
          <div className="total">TOTAL: ${total}</div>
          <div className="test-warning">
            *Please use the following test credit card for payments*
            <br />
            4242 4242 4242 4242 4242 - exp any future date - any CVC
          </div>
          <div className="d-flex justify-content-center mt-4">
            <StripeCheckoutButton price={total} />
          </div>
        </div>
      ) : (
        <div className="d-flex flex-column justify-content-center align-items-center ">
          <span className="fs-4 mb-3">Your Bag is empty.</span>
          <CustomButton onClick={() => history.push("/shop")}>
            Go To Shopping Page
          </CustomButton>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export default withRouter(connect(mapStateToProps)(CheckoutPage));

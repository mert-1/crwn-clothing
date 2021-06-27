import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51J6yFWGixSeOAf9eAnkBwm2FsbbVZBwdPiCEnweriwyflMj6ZKdqacj0mtiulT3VANcZ5blWU3Xd22vI0Q5aEJtZ003h0J5c0H";

  const onToken = (token) => {
    console.log("token", token);
    alert("Payment Sucessful");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;

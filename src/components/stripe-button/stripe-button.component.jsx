import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

export default function StripeButton({ price }) {
  const priceForStripe = price * 100;
  const publishableKey =
    'pk_test_51JIEcAIavDMraSIYJttFd3HIHCgEfApUPswws9mLRU0u7zGCtRLZUKZrOZbGh8NGAtNruONNSwudznmgwxxn8D0q00eqpLJQC4';
  const onToken = token => {
    console.log(token);
    alert('payment succsess');
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/Cuz.svg"
      description={`Your total price is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
}

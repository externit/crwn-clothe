import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeButton from '../../components/stripe-button/stripe-button.component';

import {
  selectCartItemsTotal,
  selectCartItems,
} from '../../redux/cart/cart.selectors';

import './checkout.styles.scss';

const CheckoutPage = ({ total, cartItems }) => {
  return (
    <div className="checkout-page">
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
      {cartItems.map(cartItem => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <div className="total">TOTAL: ${total}</div>
      <div className="test-warning">
        *Please use the folliwing test credit card for payments*
        <br />
        4242 4242 4242 4242 - {('0' + (new Date().getMonth() + 1)).slice(-2)}/
        {new Date().getFullYear().toString().substr(-2)} - CVV: 123
      </div>
      <StripeButton price={total} />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartItemsTotal,
});
export default connect(mapStateToProps)(CheckoutPage);

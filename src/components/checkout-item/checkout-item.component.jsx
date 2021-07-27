import React from 'react';
import './checkout-item.styles.scss';

import { removeItem, addItem , decreaseQuantity } from '../../redux/cart/cart.actions';
import { connect } from 'react-redux';

const CheckoutItem = ({ cartItem, removeItem , addItem, decreaseQuantity}) => {
  const { name, imageUrl, quantity, price, id } = cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={()=>decreaseQuantity(cartItem)}>&#10094;</div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={()=>addItem(cartItem)}>&#10095;</div>
      </span>

      <span className="price">{price}</span>
      <div className="remove-button" onClick={() => removeItem(id)}>
        &#10005;
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  removeItem: (id) => dispatch(removeItem(id)),
  addItem: item => dispatch(addItem(item)),
  decreaseQuantity: (item)=>dispatch(decreaseQuantity(item))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);

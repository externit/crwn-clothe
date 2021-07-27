import React from 'react';

import { ReactComponent as ShoppingItem } from '../../assets/shopping-bag.svg';

import './cart-icon.styles.scss';

import { connect } from 'react-redux';
import { toggleCartVisability } from '../../redux/cart/cart.actions';

import { createStructuredSelector } from 'reselect';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

function CartIcon({ toggleCartVisability, quantity }) {
  return (
    <div className="cart-icon" onClick={toggleCartVisability}>
      <ShoppingItem className="shopping-icon" />
      <span className="item-count">{quantity}</span>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  quantity: selectCartItemsCount,
});

const mapDispatchToProps = (dispatch) => ({
  toggleCartVisability: () => dispatch(toggleCartVisability),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);

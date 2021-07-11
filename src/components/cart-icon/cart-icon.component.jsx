import React from 'react';

import { ReactComponent as ShoppingItem } from '../../assets/shopping-bag.svg';

import './cart-icon.styles.scss';

import { connect } from 'react-redux';
import { toggleCartVisability } from '../../redux/cart/cart.actions';

function CartIcon({ toggleCartVisability }) {
  return (
    <div className="cart-icon" onClick={toggleCartVisability}>
      <ShoppingItem className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  toggleCartVisability: () => dispatch(toggleCartVisability),
});

export default connect(null, mapDispatchToProps)(CartIcon);

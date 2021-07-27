import ActionCartTypes from './cart.types';
import {
  addItemToCart,
  removeItemFromCart,
  decreaseItemQuantity,
} from './cart.utils';

const INITIAL_STATE = {
  isVisible: false,
  cartItems: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionCartTypes.TOGGLE_CART_VISABILITY:
      return {
        ...state,
        isVisible: !state.isVisible,
      };
    case ActionCartTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      };
    case ActionCartTypes.REMOVE_ITEM:
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload),
      };
    case ActionCartTypes.DECREASE_ITEM_QUANTITY:
      return {
        ...state,
        cartItems: decreaseItemQuantity(state.cartItems, action.payload),
      };
    default:
      return state;
  }
};

export default cartReducer;

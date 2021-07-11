import { ActionCartTypes } from './cart.types';

const INITIAL_STATE = {
  isVisible: false,
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionCartTypes.TOGGLE_CART_VISABILITY:
      return {
        ...state,
        isVisible: !state.isVisible,
      };

    default:
      return state;
  }
};

export default cartReducer;

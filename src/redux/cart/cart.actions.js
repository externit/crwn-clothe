import ActionCartTypes from './cart.types';

export const toggleCartVisability = {
  type: ActionCartTypes.TOGGLE_CART_VISABILITY,
};

export const addItem = (item) => ({
  type: ActionCartTypes.ADD_ITEM,
  payload: item,
});

export const removeItem = (id) => ({
  type: ActionCartTypes.REMOVE_ITEM,
  payload: id,
});

export const decreaseQuantity = (item) => ({
  type: ActionCartTypes.DECREASE_ITEM_QUANTITY,
  payload: item,
});

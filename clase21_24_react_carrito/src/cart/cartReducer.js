import { TYPES } from "./actionTypes";

export const cartInitialState = {
  products: [],
  cart: [],
};

export function cartReducer(state, action) {
  switch (action.type) {
    case TYPES.ADD_TO_CART: {
      const newCartItem = state.products.find(
        (product) => product.id === action.payload
      );

      const itemInCart = state.cart.find((item) => item.id === action.payload);
      //console.log("producto ya agregado?", itemInCart);

      return itemInCart
        ? {
            ...state,
            cart: state.cart.map((item) =>
              item.id === action.payload
                ? { ...newCartItem, cantidad: item.cantidad + 1 }
                : item
            ),
          }
        : {
            ...state,
            cart: [...state.cart, { ...newCartItem, cantidad: 1 }],
          };
    }
    case TYPES.REMOVE_ITEM: {
      const itemToDelete = state.cart.find(
        (item) => item.id === action.payload
      );

      return itemToDelete.cantidad > 1
        ? {
            ...state,
            cart: state.cart.map((item) =>
              item.id === action.payload
                ? { ...itemToDelete, cantidad: item.cantidad - 1 }
                : item
            ),
          }
        : {
            ...state,
            cart: state.cart.filter((item) => item.id !== action.payload),
          };
    }
    case TYPES.REMOVE_ALL_ITEMS: {
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };
    }
    case TYPES.CLEAR_CART:
      return cartInitialState;
    case TYPES.READ_STATE:
      return {...state, products: action.payload}
    default:
      return state;
  }
}

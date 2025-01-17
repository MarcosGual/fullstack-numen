import { useReducer } from "react";
import { createContext } from "react";

export const CartContext = createContext();

const cartInitialState = {
    itemCount: 0
}

const cartReducer = (state, action) => {
  switch (action.type) {
    case "addItem":
      return {...state, itemCount: state.itemCount + 1};
    case "resetCart":
      return {...state, itemCount: 0};
    default:
      return state;
  }
};

export const CartProvider = ({children}) =>{
    const [state, dispatch] = useReducer(cartReducer, cartInitialState);

    return (
        <CartContext.Provider value={{state, dispatch}}>
            {children}
        </CartContext.Provider>
    )
}
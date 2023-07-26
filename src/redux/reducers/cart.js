const INIT_STATE = {
  cart:[],
  totalAmount:0,
   totalItem:0
};

export const cart = (state=INIT_STATE, action) => {

  if (action.type === "ADD_TO_CART") {
    return {
      ...state,
      cart:[...state.cart, action.payload]
    };
  }

  if (action.type === "REMOVE_ITEM") {
    return {
      ...state,
      cart: state.cart.filter((curElem) => {
        return curElem.id !== action.payload;
      }),
    };
  }

  if (action.type === "CLEAR_CART") {
    return { ...state, cart: [] };
  }
 
  if (action.type === "INCREMENT") {
    const updatedCart = state.cart.map((curElem) => {
      if (curElem.id === action.payload) {
        return { ...curElem, quantity: curElem.quantity + 1 };
      }
      return curElem;
    });
    return { ...state, cart: updatedCart };
  }

  if (action.type === "DECREMENT") {
    const updatedCart = state.cart
      .map((curElem) => {
        if (curElem.id === action.payload) {
          return { ...curElem, quantity: curElem.quantity - 1 };
        }
        return curElem;
      })
      .filter((curElem) => curElem.quantity !== 0);
    return { ...state, cart: updatedCart };
  }

  if (action.type === "GET_TOTAL") {
    let { totalItem, totalAmount } = state.cart.reduce(
      (accum, curVal) => {
        let { price, quantity } = curVal;
        let updatedTotalAmount = price * quantity;
        accum.totalAmount += updatedTotalAmount;
        accum.totalItem += quantity;
        return accum;
      },

      {
        totalItem: 0,
        totalAmount: 0,
      }
    );
    return { ...state, totalItem, totalAmount };
  }
  return state;
};

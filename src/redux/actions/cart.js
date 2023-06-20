export const addToCart = (item) => {
    return {
        type: "ADD_TO_CART",
        payload: item
    }
}

//to delete the items from cart

export const removeItem = (id) => {
    return ({
        type: "REMOVE_ITEM",
        payload: id,
    });
};
// clear the cart

export const clearCart = () => {
    return ({ type: "CLEAR_CART" });
};

//increment the item
export const increment = (id) => {
    return ({
        type: "INCREMENT",
        payload: id,
    });
};

//decrement the item
export const decrement = (id) => {
    return ({
        type: "DECREMENT",
        payload: id,
    });
};

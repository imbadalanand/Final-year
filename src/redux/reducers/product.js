const INIT_STATE = {
    carts: [],
    allProduct: [],
    filteredProduct: []
};


export const cartReducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case "ADD_CART":
            return {
                ...state,
                carts: [...state.carts, action.payload]
            }
        case "UPDATE_FILTERED_PRODUCT":
            return {
                ...state,
                filteredProduct: [...action.payload]
            }
        case "UPDATE_ALL_PRODUCT":
            return {
                ...state,
                allProduct: [...action.payload]
            }
        default:
            return state
    }
}
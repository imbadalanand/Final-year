const INIT_STATE = {
    allProduct: [],
    filteredProduct: []
};


export const cartReducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        
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
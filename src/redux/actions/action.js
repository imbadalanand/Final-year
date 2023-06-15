export const ADD = (item) => {
    return{
        type:"ADD_CART",
        payload:item
    }
}

export const updateFilteredProduct = (data) => {
    return{
        type:"UPDATE_FILTERED_PRODUCT",
        payload:data
    }
}

export const updateAllProduct = (data) => {
    return{
        type:"UPDATE_ALL_PRODUCT",
        payload:data
    }
}
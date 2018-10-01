const defaultState = {
    _listOfProducts: []
}

const mainReducer = (state = defaultState, action) => {
    if (action.type === "LOAD_LIST_OF_PRODUCTS") {
        return {
            ...state,
            _listOfProducts: action._listOfProducts
        }
    } else if (action.type === "ADD_PRODUCT_TO_CART") {
        let products = state._listOfProducts;
        let id = action.payload;
        let product = products.filter(x => x.ProductID === id)[0];
        let amount = product.amountIdBasket * 1;
        product.amountIdBasket = amount + 1;
        return {
            ...state,
            _listOfProducts: products
        }
    } else {
        return {
            ...state
        }
    }
}

export default mainReducer;
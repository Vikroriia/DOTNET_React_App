export function loadItemsOfOrder(){
    return(dispatch) => {
       dispatch({
            type: "LOAD_PRODUCT_IN_CART"
       });
    }
}

export function addItemsOfOrder(product){
    return(dispatch) => {
       dispatch({
            type: "ADD_PRODUCT_TO_CART",
                payload: {
                    ProductID: product.ProductID,
                    ProductName: product.PName,
                    Cost: product.Cost,
                    Amount: 1,
                    ProductImage: product.PImage
                }
            });
    }
}

export function removeItemsOfOrder(product, amount){
    return(dispatch) => {
        if (amount !== 0) {
            dispatch({
                type: "REMOVE_PRODUCT_FROM_CART",
                payload: {
                    ProductID: product.ProductID,
                    ProductName: product.PName,
                    Cost: product.Cost,
                    Amount: -1,
                    ProductImage: product.PImage
                }
            });
        }
    }
}
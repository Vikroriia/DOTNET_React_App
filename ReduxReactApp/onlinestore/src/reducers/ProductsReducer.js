const defaultState = {
    listOfProducts: [],
    listOfItemsOfOrder: []
}

const mainReducer = (state = defaultState, action) => {
    var list;
    switch (action.type) {
        case "LOAD_LIST_OF_PRODUCTS" : 
            return {
                ...state,
                listOfProducts: action.listOfProducts
            }
        case "LOAD_PRODUCT_IN_CART" :
           return {
                ...state
            }
        case "ADD_PRODUCT_TO_CART" :
            list = state.listOfItemsOfOrder;
            if(list.length === 0) {
                list.push(action.payload);
            }
            else {
                var i = 0;
                list.forEach(function(item) {
                    if(item.ProductID === action.payload.ProductID) {
                        item.Amount = item.Amount + action.payload.Amount;
                        i++;
                    }
                });
                if (i === 0) list.push(action.payload);
            }
            
            return {
                ...state,
                listOfItemsOfOrder: list
            }
        case "REMOVE_PRODUCT_FROM_CART" :
            list = state.listOfItemsOfOrder;
            if(list.length === 0) {
                break;
            }
            else {
                list.forEach(function(item) {
                    if(item.ProductID === action.payload.ProductID) {
                        item.Amount = item.Amount + action.payload.Amount;
                        if(item.Amount === 0) {
                            var index = list.indexOf(item);
                            list.splice(index,1);
                        }
                    }
                });
            }
            return {
                ...state,
                listOfItemsOfOrder: list
            }
        default :
            return {
                ...state
            }
    }
}

export default mainReducer;
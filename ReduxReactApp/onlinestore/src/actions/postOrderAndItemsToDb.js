import axios from 'axios';

export function postOrderToDb(order, items){
    return(dispatch) => {
        return axios.post('/api/orders', order).then((response)=>{
            dispatch(postItemsOfOrderToDb(response.data.OrderID, items));
        })
    }
}

export function postItemsOfOrderToDb(orderID, items){
    return(dispatch) => {
            items.forEach(item => {
                return axios.post('/api/itemsoforders', 
                {
                    ProductID: item.ProductID,
                    OrderID: orderID,
                    Amount: item.Amount,
                    Cost: item.Cost
                }).then((response)=>{
                });
            })
        
    }
}
import axios from 'axios';

// export function postItemsOfOrderToDb(order, items){
//     
//     return(dispatch) => { return axios.post('/api/orders', order).then((response)=>{ //, productsID, productsAmount
//         dispatch(  items.forEach((item) => {
//                                     return axios.post('/api/itemsoforders', 
//                                         {
//                                             ProductID: item.ProductID,
//                                             OrderID: response.data.OrderID,
//                                             Amount: item.Amount,
//                                             Cost: 0
//                                         }).then((response) => {})
//                                 })
                        
//         )
//     })}
// }

export function postItemsOfOrderToDb(order, items){
    // order.ProductsID = items.map((item) => {
    //     return item.ProductID;
    // })
    // order.ProductsAmount = items.map((item) => {
    //     return item.Amount;
    // })
    return(dispatch) => {
        return axios.post('/api/orders', order).then((response)=>{
            dispatch(postOrderToDb(response.data.OrderID, items));
        })
    }
}

export function postOrderToDb(orderID, items){
    return(dispatch) => {
            items.forEach(item => {
                return axios.post('/api/itemsoforders', 
                    {
                        ProductID: item.ProductID,
                        OrderID: orderID,
                        Amount: item.Amount,
                        Cost: 0
                    }).then((response)=>{
                });
            })
        
    }
}
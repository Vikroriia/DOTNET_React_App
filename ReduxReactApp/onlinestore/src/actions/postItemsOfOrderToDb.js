import axios from 'axios';

export function postItemsOfOrderToDb(neworder){
    return(dispatch) => {
        return axios.post('/api/orders', neworder).then((response)=>{
            dispatch(getIdOfSuccessfulOrder(response.data.value));
        })
    }
}

export const getIdOfSuccessfulOrder = (idNewOrder) => {
    return {
        type: "ORDER_IS_SUCCESSFUL",
        idOfSuccessfulOrder: idNewOrder
    }
}

// export function getSuccessfulItemsOfOrder(newOrderId){
//     return(dispatch) => {
//         return axios.get('/api/itemsoforders', {params: {key: newOrderId}}).then((response)=>{
//             dispatch(getItemsOfSuccessfulOrder(response.data.value));
//         })
//     }
// }

// export const getItemsOfSuccessfulOrder = (listOfItemsOfOrder) => {
//     return {
//         type: "ITEMS_ARE_SUCCESSFUL",
//         listOfItemsOfOrder: listOfItemsOfOrder
//     }
// }
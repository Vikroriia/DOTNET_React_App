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
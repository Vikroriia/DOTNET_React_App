import axios from 'axios';

export function getProductsFromDb(){
    return(dispatch) => {
        return axios.get('/api/products').then((response)=>{ 
            dispatch(showListOfProducts(response.data.value));
        })
    }
}

export const showListOfProducts = (listOfProducts)=>{
    return{
        type: "LOAD_LIST_OF_PRODUCTS",
        listOfProducts: listOfProducts
    }
}
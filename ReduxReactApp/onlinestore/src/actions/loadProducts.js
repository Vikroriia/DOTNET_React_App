import axios from 'axios';

export function loadProducts(){
    return(dispatch) => {
        return axios.get('http://localhost:63001/products').then((response)=>{
            dispatch(showListOfProducts(response.data.value));
        })
    }
}

export const showListOfProducts = (_listOfProducts)=>{
    return{
        type: "LOAD_LIST_OF_PRODUCTS",
        _listOfProducts: _listOfProducts
    }
}
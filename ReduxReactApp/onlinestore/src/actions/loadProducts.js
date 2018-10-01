import axios from 'axios';

export function loadProducts(){
    return(dispatch) => {
        return axios.get('/api/products').then((response)=>{ //'http://localhost:63001/products
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
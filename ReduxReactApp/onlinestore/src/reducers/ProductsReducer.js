const defaultState={
    _listOfProducts:[]
}

const mainReducer = (state = defaultState, action) => {
    if(action.type==="LOAD_LIST_OF_PRODUCTS"){
        return{
            ...state,
            _listOfProducts:action._listOfProducts
        }
    } else{
        return{
            ...state
        }
    }
}

export default mainReducer;
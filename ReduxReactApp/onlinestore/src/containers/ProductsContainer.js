import React from 'react';
import {connect} from "react-redux";
import * as actionCreators from "../actions/loadProducts.js"
import ListOfProducts from "../components/ListOfProducts.js";

class ProductsConteiner extends React.Component{
    render(){
        return(
            <ListOfProducts onload={this.props.loadProducts()} products={this.props._listOfProducts}></ListOfProducts>
        )
    }
}

const mapStateToProps=(state)=>{
    return state
};

export default connect (mapStateToProps, actionCreators)(ProductsConteiner);
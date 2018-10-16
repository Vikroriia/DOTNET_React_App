import React from 'react';

import * as styles from '../css/ListOfProducts.css'

export default class ListOfProducts extends React.Component {
    render(){
        
        this.props.actionsCreators.getProductsFromDb();
        let tbListOfProduct = [];

        this.props.state.listOfProducts.map((product) => {
            product.AmountInItem = 0;
            this.props.state.listOfItemsOfOrder.forEach(item => {
                if (item.ProductID === product.ProductID) {
                    product.AmountInItem = item.Amount;
                }
            })
            let i = 0;
            
            tbListOfProduct.push(
                <div className = 'product-cell'>
                    <div><img src = "http://www.edinorogshop.ru/catalog/product/malenkaya-bombochka-dlya-vanni-lesnaya-zemlyanichka-n1-w800-h800.jpg" width="150px" height="150px" alt="bomb"></img></div>
                    <div>{product.PName}</div>
                    <div>
                        <div>{product.Cost +' ₽'}</div>
                    </div>
                    <div>
                        <div>
                            <button className = 'button-minus' onClick={()=>{this.props.actionsCreatorsI.removeItemsOfOrder(product, product.AmountInItem)}}>-</button>
                            <label>{' ' + product.AmountInItem + ' '}</label>
                            <button className = 'button-plus' onClick={()=>{this.props.actionsCreatorsI.addItemsOfOrder(product)}}>+</button>
                        </div>
                    </div>
                </div>
            )
            
        });

        return (
            <div>
                <div className = 'table'>
                    {tbListOfProduct}
                </div>
            </div>
        )
    }
}

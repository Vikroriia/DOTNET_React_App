import React from 'react';

import * as styles from '../css/ListOfProducts.css'

export default class ListOfProducts extends React.Component {
    render(){
        
        this.props.actionsCreators.getProductsFromDb();
        let tbListOfProduct = [],
            tbEnableActionCart = [];
        
        this.props.state.listOfProducts.map((product) => {
            product.AmountInItem = 0;
            this.props.state.listOfItemsOfOrder.forEach(item => {
                if (item.ProductID === product.ProductID) {
                    product.AmountInItem = item.Amount;
                }
            })

             this.props.state.listOfProducts.forEach(product => {
                if (product.Amount === 0) {
                    tbEnableActionCart[product.ProductID] = (
                        <div className = 'not-available-product'>Not available</div>
                    )
                } else {
                    tbEnableActionCart[product.ProductID] = (
                        <div className = 'product-cell-amount-block'>
                                <button className = 'button-minus' onClick={()=>{this.props.actionsCreatorsI.removeItemsOfOrder(product, product.AmountInItem)}}>-</button>
                                <label>{' ' + product.AmountInItem + ' '}</label>
                                <button className = 'button-plus' onClick={()=>{this.props.actionsCreatorsI.addItemsOfOrder(product)}}>+</button>
                        </div>
                    )
                }
            });

            tbListOfProduct.push(
                <div className = 'product-cell'>
                    <div>
                        <img src = {'./images/'+product.PImageName} width="150px" height="150px" alt={product.PName}/>
                    </div>
                    <div>{product.PName}</div>
                    <div>
                        <div>{product.Cost +' ₽'}</div>
                    </div>
                    <div>{tbEnableActionCart[product.ProductID]}</div>
                </div>
            )

            if (this.props.state.idOfSuccessfulOrder !== 0) {
                this.props.state.idOfSuccessfulOrder = 0;
                this.props.state.listOfItemsOfOrder = [];
            }
            
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

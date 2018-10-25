import React from 'react';

import * as styles from '../css/Cart.css'
import ItemsOfOrderContainer from '../containers/ItemsOfOrderContainer';

export default class ListOfItemsOfOrder extends React.Component {

    sumOrderCost() {
        let orderCost = 0;
        this.props.state.listOfItemsOfOrder.forEach(item => {
            orderCost = orderCost + item.Cost*item.Amount;
        });
        return orderCost;
    }

    createOrder(items) {
        var ProductsID = items.map((item) => {
            return item.ProductID;
        })
        var ProductsAmount = items.map((item) => {
            return item.Amount;
        })
        
        var neworder = {
            UserID: 1,
            StatusO: true,
            Cost: 0,
            ProductsID: ProductsID,
            ProductsAmount: ProductsAmount
        };
        
        this.props.actionsCreatorsO.postItemsOfOrderToDb(neworder);
    }

    render(){
        let tbListOfItemsOfOrder,
            tbSuccessfulOrder;
        // UI for list of items
        if (this.props.state.listOfItemsOfOrder.length !== 0) { 
            tbListOfItemsOfOrder = this.props.state.listOfItemsOfOrder.map((item, index) => {       
                return(
                    <div className = "cart-item">
                        <div className = 'cart-item-index'>{index+1}</div>
                        <div><img src = 'https://www.hobbyportal.ru/data/products/cache/2018may/11/34/204023_63566-450x450.jpg' width="100px" height="100px" alt={item.ProductName}></img></div>
                        <div className = 'cart-item-name'>{item.ProductName}</div>
                        <div>
                            <div className = 'cart-item-amount-label'>Amount</div>
                            <div className = "cart-item-amount">
                                <div><button className = "button-minus" onClick={()=>{this.props.actionsCreatorsI.removeItemsOfOrder(item)}}>-</button></div>
                                <div>{item.Amount}</div>
                                <div><button className = "button-plus" onClick={()=>{this.props.actionsCreatorsI.addItemsOfOrder(item)}}>+</button></div>
                            </div>
                        </div>
                        <div>
                            <div className = 'cart-item-cost-label'>Cost</div>
                            <div className = 'cart-item-cost'>{item.Cost*item.Amount + ' ₽'}</div>
                        </div>
                    </div>
                )
            })
        } 

        // UI for list of successful items
        if (this.props.state.idOfSuccessfulOrder !== 0) {
            tbSuccessfulOrder = this.props.state.listOfItemsOfOrder.map((item, index) => { 
                this.props.state.listOfProducts.forEach(product => {
                    if (product.ProductID === item.ProductID) {
                        item.ProductName = product.PName;
                    }
                });
                return(
                    <div className = "order-item">
                        <div className = 'order-item-index'>{index+1}</div>
                        <div><img src = 'https://www.hobbyportal.ru/data/products/cache/2018may/11/34/204023_63566-450x450.jpg' width="60px" height="60px" alt={item.ProductName}></img></div>
                        <div className = 'order-item-name'>{item.ProductName}</div>
                        <div className = 'order-item-amount'>{item.Amount}</div>
                        <div className = 'order-item-cost'>{item.Cost*item.Amount + ' ₽'}</div>
                    </div>
                )
            })
        }

        // Cart is empty
        if (this.props.state.listOfItemsOfOrder.length === 0 && this.props.state.idOfSuccessfulOrder === 0) {
            return (
                <div>
                    <div className = 'emptyCart-firstString'>Your cart is empty</div>
                    <div className = 'emptyCart-secondString'>Please, add some products to your cart</div>
                </div>
            )
        } 
        // Cart with items
        else if (this.props.state.listOfItemsOfOrder.length !== 0 && this.props.state.idOfSuccessfulOrder === 0) {
            return (
                <div>
                    <div className = "cart">Your cart</div>
                    <div>{tbListOfItemsOfOrder}</div>
                    <div className = 'cart-total-sum'>Total:    {this.sumOrderCost() + ' ₽'}</div>
                    <div className = 'cart-button-create-order'>
                        <button className = 'button-create-order' onClick={()=>{this.createOrder(this.props.state.listOfItemsOfOrder)}}>Create order</button>
                    </div>
                </div>
            )
        } 
        // Successful order
        else if (this.props.state.listOfItemsOfOrder.length !== 0 && this.props.state.idOfSuccessfulOrder !== 0) {
            return (
                <div>
                    <div className = 'successfulOrder-firstString'>Thank you for your order</div>
                    <div className = 'successfulOrder-secondString'>Number of your order: {this.props.state.idOfSuccessfulOrder}</div>
                    <div>{tbSuccessfulOrder}</div>
                    <div className = 'cart-total-sum'>Total:    {this.sumOrderCost() + ' ₽'}</div>
                </div>
            )
        }
        
    }
}
import React from 'react';

import * as styles from '../css/Cart.css'

export default class ListOfItemsOfOrder extends React.Component {

    sumOrderCost() {
        let orderCost = 0;
        this.props.state.listOfItemsOfOrder.forEach(item => {
            orderCost = orderCost + item.Cost*item.Amount;
        });
        return orderCost;
    }

    createOrder(items) {
        var order = {
            UserID: 1,
            StatusO: true,
            Cost: 0
            // ,
            // ProductsID: [],
            // ProductsAmount: []
        };
        
        this.props.actionsCreatorsO.postItemsOfOrderToDb(order, items);
    }

    render(){
        let tbListOfItemsOfOrder;
        if (this.props.state.listOfItemsOfOrder.length !== 0) { 
            tbListOfItemsOfOrder = this.props.state.listOfItemsOfOrder.map((item, index) => {       
                return(
                    <div className = "cart-item">
                        <div className = 'cart-item-index'>{index+1}</div>
                        <div><img src = "http://www.edinorogshop.ru/catalog/product/malenkaya-bombochka-dlya-vanni-lesnaya-zemlyanichka-n1-w800-h800.jpg" width="100px" height="100px" alt="bomb"></img></div>
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
        
        if(this.props.state.listOfItemsOfOrder.length == 0) {
            return (
                <div>
                    <div className = 'emptyCart-firstString'>Your cart is empty</div>
                    <div className = 'emptyCart-secondString'>Please, add some products to your cart</div>
                </div>
            )
        } else {
            return(
                <div>
                    <div className = "cart">Your cart</div>
                    <div>{tbListOfItemsOfOrder}</div>
                    <div className = 'cart-total-sum'>
                        <div className = 'cart-total-sum-label'>Total:</div>
                        <div>{this.sumOrderCost() + ' ₽'}</div>
                    </div>
                    <div className = 'cart-button-create-order'>
                        <button className = 'button-create-order' onClick={()=>{this.createOrder(this.props.state.listOfItemsOfOrder)}}>Create order</button>
                    </div>
                </div>
            )
        }
        
    }
}
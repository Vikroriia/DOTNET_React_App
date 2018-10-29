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

    checkRelevanceOfItems(products, items) {
            let success = true,
                error = false,
                product;
            items.forEach(item => {
                products.forEach(p => {
                    if (p.ProductID === item.ProductID){
                        product = p;
                    }
                });
    
                if (item.ProductName !== product.PName) {
                    item.Renamed = true;
                }
                if (item.Cost !== product.Cost) {
                    item.Cost = product.Cost;
                    item.ChangedCost = true;
                    error = true;
                }
                if (item.Amount > product.Amount) {
                    item.Amount = product.Amount;
                    item.TooMuch = true;
                    item.ChangedCost = true;
                    error = true;
                } 
            });
    
            if (error) {
                success = false;
                document.getElementById("cart-total-sum").classList.add('cart-success-items-error');
            }
            
            if (success) {
                this.createOrder(items);
            } else {
                this.props.state.listOfItemsOfOrder = items;
            }
            
        };

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
        
        this.props.actionsCreators.getProductsFromDb();

        // UI for list of items
        if (this.props.state.listOfItemsOfOrder.length !== 0) { 
            tbListOfItemsOfOrder = this.props.state.listOfItemsOfOrder.map((item, index) => {     
                return(
                    <div className = "cart-item">
                        <div className = 'cart-item-index'>{index+1}</div>
                        <div><img src = {'./images/'+item.ProductImage} width="70px" height="70px" alt={item.ProductName}></img></div>
                        <div className = {item.Renamed === true ? "cart-success-items-error" + ' ' + 'cart-item-name' : "cart-item-name"}>{item.ProductName}</div>
                        <div className = 'cart-item-amount-block'>
                            <div className = 'cart-item-amount-label'>Amount</div>
                            <div className = "cart-item-amount">
                                <div><button className = "button-minus" onClick={()=>{this.props.actionsCreatorsI.removeItemsOfOrder(item)}}>-</button></div>
                                <div className = {item.TooMuch === true ? "cart-success-items-error" : ""}>{item.Amount}</div>
                                <div><button className = "button-plus" onClick={()=>{this.props.actionsCreatorsI.addItemsOfOrder(item)}}>+</button></div>
                            </div>
                        </div>
                        <div className = 'cart-item-cost-block'>
                            <div className = 'cart-item-cost-label'>Cost</div>
                            <div className = {item.ChangedCost ? 'cart-item-cost' + ' ' + "cart-success-items-error" : 'cart-item-cost'}>{item.Cost*item.Amount + ' ₽'}</div>
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
                        <div><img src = {'./images/'+item.ProductImage} width="60px" height="60px" alt={item.ProductName}></img></div>
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
                    <div id = "cart-total-sum" className = 'cart-total-sum'>Total:    {this.sumOrderCost() + ' ₽'}</div>
                    <div className = 'cart-button-create-order'>
                        <button className = 'button-create-order' onClick={()=>{this.checkRelevanceOfItems(this.props.state.listOfProducts, this.props.state.listOfItemsOfOrder)}}>Create order</button>
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
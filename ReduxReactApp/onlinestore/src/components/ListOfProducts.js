import React from 'react';

import * as styles from '../css/ListOfProducts.css'

export default class ListOfProducts extends React.Component {
    render(){
        
        this.props.actionsCreators.getProductsFromDb();
        let tbListOfProduct = [],
            row = [],
            cell = [];

        this.props.state.listOfProducts.map((product,index) => {
            product.AmountInItem = 0;
            this.props.state.listOfItemsOfOrder.forEach(item => {
                if (item.ProductID === product.ProductID) {
                    product.AmountInItem = item.Amount;
                }
            })
            let i = 0;
            
            cell.push(
                <td className = 'product-cell'>
                    <tr><img src = "http://www.edinorogshop.ru/catalog/product/malenkaya-bombochka-dlya-vanni-lesnaya-zemlyanichka-n1-w800-h800.jpg" width="150px" height="150px" alt="bomb"></img></tr>
                    <tr>{product.PName}</tr>
                    <tr>
                        <td>{product.Cost +' ₽'}</td>
                    </tr>
                    <tr>
                        <td>
                            <button className = 'button-minus' onClick={()=>{this.props.actionsCreatorsI.removeItemsOfOrder(product)}}>-</button>
                            <label>{' ' + product.AmountInItem + ' '}</label>
                            <button className = 'button-plus' onClick={()=>{this.props.actionsCreatorsI.addItemsOfOrder(product)}}>+</button>
                        </td>
                    </tr>
                </td>
            )

            if(index%4==0 && index!=0){
                i=0;
                row = [<tr></tr>];
                row.push(cell);
                cell = [];
                tbListOfProduct.push(row);
                i++;
            } else {
                row.push(cell);
                cell = [];
                i++;
                tbListOfProduct.splice(tbListOfProduct.length-i);
                tbListOfProduct.push(row);
            }
            
        });


        return (
            <div className = 'main-content'>
                <table className = 'table'>
                    <tbody>
                        {tbListOfProduct}
                    </tbody>
                </table>
            </div>
        )
    }
}

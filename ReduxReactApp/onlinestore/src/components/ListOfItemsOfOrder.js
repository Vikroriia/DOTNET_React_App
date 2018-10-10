import React from 'react';

export default class ListOfItemsOfOrder extends React.Component {

    createOrder(items) {
        var cost = 0;
        items.forEach(item => {
                cost = cost + item.Cost*item.Amount;
        });
        var order = {
            UserID: 1,
            StatusO: true,
            Cost: cost
        };
        
        this.props.actionsCreatorsO.postOrderToDb(order, items);
    }

    render(){
        let tbListOfItemsOfOrder;
        if (this.props.state.listOfItemsOfOrder.length !== 0) {
            tbListOfItemsOfOrder = this.props.state.listOfItemsOfOrder.map((item) => {       
                return(
                    <tr>
                        <td>{item.ProductName}</td>
                        <td><button onClick={()=>{this.props.actionsCreatorsI.removeItemsOfOrder(item)}}>-</button></td>
                        <td>{item.Amount}</td>
                        <td><button onClick={()=>{this.props.actionsCreatorsI.addItemsOfOrder(item)}}>+</button></td>
                        <td>{item.Cost*item.Amount + ' ₽'}</td>
                    </tr>
                )
            })
        } else tbListOfItemsOfOrder = <tr>Please, add some products to your cart</tr>;

        return(
            <div>
                <table><tbody>
                    {tbListOfItemsOfOrder}
                </tbody></table>
                <button onClick={()=>{this.createOrder(this.props.state.listOfItemsOfOrder)}}>Create order</button>
            </div>
        )
    }
}
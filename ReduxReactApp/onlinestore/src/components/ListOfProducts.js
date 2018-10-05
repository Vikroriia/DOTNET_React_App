import React from 'react';

export default class ListOfProducts extends React.Component {

    render(){
        this.props.actionsCreators.getProductsFromDb();
        let tbListOfProduct = this.props.state.listOfProducts.map((product) => {
                                return(
                                    <tr key={product.ProductID}>
                                        <td>{product.PName}</td>
                                        <td>{product.Cost}</td>
                                        <td><button onClick={()=>{this.props.actionsCreatorsI.removeItemsOfOrder(product)}}>-</button></td>
                                        <td><button onClick={()=>{this.props.actionsCreatorsI.addItemsOfOrder(product)}}>+</button></td>
                                    </tr>
                                )
                            });
        return(
            <div>
                <h2>List of products</h2>
                <table>
                    <tbody>
                        {tbListOfProduct}
                    </tbody>
                </table>
            </div>
        )
    }
}

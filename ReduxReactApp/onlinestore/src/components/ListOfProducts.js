import React from 'react';
import { bindActionCreators } from 'redux';

class ListOfProducts extends React.Component {
    render(){
        const tbListOfProduct = this.props.products.map((product) => {
            return(
                <tr key={product.ProductID}>
                    <td>{product.PName}</td>
                    <td><button onClick={actions.removeProduct(product.ProductID)}>-</button></td>
                    <td><button>+</button></td>
                </tr>
            )
        })
        return(
            <div>
                <h2>List of products</h2>
                <table><tbody>{tbListOfProduct}</tbody></table>
            </div>
        )
    }
}

export default ListOfProducts;
import React from 'react';

class ListOfProducts extends React.Component {
    render(){
        const tbListOfProduct = this.props.products.map((product) => {
            return(
                <tr key={product.ProductID}>
                    <td>{product.PName}</td>
                    <td><button>Add</button></td>
                    <td><button>Remove</button></td>
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
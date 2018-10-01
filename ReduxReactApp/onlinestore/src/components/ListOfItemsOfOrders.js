import React from 'react';

class ListOfItemsOfOrders extends React.Component {
    render(){
        // const tbListOfItemsOfOrders = this.props.products.map((product,index) => {
        //     return(
        //         <tr key={index}>
        //             <td>{product.PName}</td>
        //             <td><button>Add</button></td>
        //             <td><button>Remove</button></td>
        //         </tr>
        //     )
        // })
        return(
            <div>
                <h2>You order</h2>
                {/* <table><tbody>{tbListOfItemsOfOrders}</tbody></table> */}
                <button>Create order</button>
            </div>
        )
    }
}

export default ListOfItemsOfOrders;
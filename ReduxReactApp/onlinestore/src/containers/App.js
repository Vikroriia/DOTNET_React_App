import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ProductsContainer from './ProductsContainer.js';
import ItemsOfOrderContainer from './ItemsOfOrderContainer.js';
import * as actionsCreators from '../actions/getProductsFromDb.js';
import * as actionsCreatorsI from '../actions/createItemsOfOrder.js';
import * as actionsCreatorsO from '../actions/postOrderAndItemsToDb.js';

let actualPage = <ProductsContainer />;

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { _actualPage: 'products' };
  }
      
  togglePage(pageName) {
    switch(pageName) {
      case 'products':
        this.setState({_actualPage: 'products'}); 
        actualPage = <ProductsContainer />; 
        break;
      case 'cart': 
        this.setState({_actualPage: 'cart'}); 
        actualPage = <ItemsOfOrderContainer />; 
        break;
      default: 
        this.setState({_actualPage: 'products'}); 
        actualPage = <ProductsContainer />; 
        break;
    }
  }

  render() {
    return(
        <div>
          <button onClick={() => this.togglePage('products')}>Products</button>
          <button>Sign In</button>
          <button>Sign Up</button>
          <button onClick={() => this.togglePage('cart')}>Cart</button>
          <div>
            {actualPage}
          </div>
        </div>
    )
  }
}

function mapStateToProps (state) {
    return {
        state: state
    }
}

function mapDispatchToProps(dispatch) {
    return {
      actionsCreators: bindActionCreators(actionsCreators, dispatch),
      actionsCreatorsI: bindActionCreators(actionsCreatorsI, dispatch),
      actionsCreatorsO: bindActionCreators(actionsCreatorsO, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)  
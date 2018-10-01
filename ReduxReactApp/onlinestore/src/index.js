import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import ProductsContainer from './containers/ProductsContainer.js';
import reducer from "./reducers/ProductsReducer.js";
import ItemsOfOrdersContainer from './containers/ItemsOfOrdersContainer.js';

const store = createStore(reducer, applyMiddleware(thunk));


class App extends React.Component {



  goToProducts() {
    //window.location = 'onlinestore/src/containers/ProductsContainer';
    return(
      <div><ProductsContainer></ProductsContainer></div>
    )
  };

  goToCart() {
    //debugger
    //window.location = 'onlinestore/src/containers/ItemsOfOrdersContainer';
    return(
        <div><ItemsOfOrdersContainer></ItemsOfOrdersContainer></div>
      )
  };

  render() {
    return(
        <div>
          <button onClick={this.goToProducts()}>Products</button>
          <button>Sign In</button>
          <button>Sign Up</button>
          <button onClick={this.goToCart()}>Cart</button>
          <ProductsContainer></ProductsContainer>
        </div>
    ) 
        
  }
}

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

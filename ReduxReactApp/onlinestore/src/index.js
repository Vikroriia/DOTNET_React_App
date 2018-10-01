import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import ProductsContainer from './containers/ProductsContainer.js';
import reducer from "./reducers/ProductsReducer.js";
import ItemsOfOrdersContainer from './containers/ItemsOfOrdersContainer.js';

const store = createStore(reducer, applyMiddleware(thunk));

    let ActuallPage = <div><ProductsContainer></ProductsContainer></div>;

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { actualPage: 'products' };
  }
      
  togglePage(pageName) {
    switch(pageName) {
      case 'products': this.setState({actualPage: 'products'}); ActuallPage = <div><ProductsContainer></ProductsContainer></div>; break;
      case 'cart': this.setState({actualPage: 'cart'}); ActuallPage = <div><ItemsOfOrdersContainer></ItemsOfOrdersContainer></div>; break;
      default: this.setState({actualPage: 'products'}); ActuallPage = <div><ProductsContainer></ProductsContainer></div>; break;
    }
    
  }

  render() {
    console.log(this.state.actualPage);
    return(
        <div>
          <button onClick={this.togglePage.bind(this,'products')}>Products</button>
          <button>Sign In</button>
          <button>Sign Up</button>
          <button onClick={this.togglePage.bind(this,'cart')}>Cart</button>
          {ActuallPage}
        </div>
    ) 
        
  }
}

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";
import * as actionsCreators from "../actions/getProductsFromDb.js";
import * as actionsCreatorsI from "../actions/createItemsOfOrder.js";
import * as actionsCreatorsO from "../actions/postOrderAndItemsToDb.js";
import ListOfItemsOfOrder from "../components/ListOfItemsOfOrder.js";

class ItemsOfOrderContainer extends React.Component{
    render(){
        return(
            <ListOfItemsOfOrder 
                {...this.props}
            />
        )
    }
}

function mapStateToProps (state) {
    return {
        state: state
    }
};

function mapDispatchToProps(dispatch) {
    return {
      actionsCreators: bindActionCreators(actionsCreators, dispatch),
      actionsCreatorsI: bindActionCreators(actionsCreatorsI, dispatch),
      actionsCreatorsO: bindActionCreators(actionsCreatorsO, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemsOfOrderContainer);
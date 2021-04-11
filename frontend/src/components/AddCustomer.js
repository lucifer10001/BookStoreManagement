import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions/customer";
import CustomerForm from "./AddCustomerForm";

class AddCustomer extends Component {
  constructor() {
    super();
    this.fullName = React.createRef();
    this.state = { message: "" };
  }

  addCustomer() {
    var customer = {
      fullName: this.fullName.current.value,
    };


    this.props.onAddCustomer(customer)

    
  }

  render() {
    return (
      <CustomerForm/>
    );
  }
}

const mapStateToProps = (state) =>{

  return{
    message : state.message,
    customer : state.customer
  }

}

const mapDispatchToState = (dispatch) =>{
  return{
    onAddCustomer: (payload) => dispatch(actions.addCustomer(payload))
  }
}

export default connect(mapStateToProps,mapDispatchToState)(AddCustomer)
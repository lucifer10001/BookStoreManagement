import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions/order";
import OrderForm from "./AddOrderForm";

class AddOrder extends Component {
  constructor() {
    super();
    this.bookId = React.createRef();
    this.quantity = React.createRef();
    this.subtotal = React.createRef();
    this.state = { message: "" };
  }

  addOrder() {
    var order = {
      bookId: this.bookId.current.value,
      quantity: this.quantity.current.value,
      subtotal: this.subtotal.current.value,

    };


    this.props.onAddOrder(order)

    
  }

  render() {
    return (
      <OrderForm/>
    );
  }
}

const mapStateToProps = (state) =>{

  return{
    message : state.message,
    order : state.order
  }

}

const mapDispatchToState = (dispatch) =>{
  return{
    onAddOrder: (payload) => dispatch(actions.addOrder(payload))
  }
}

export default connect(mapStateToProps,mapDispatchToState)(AddOrder)
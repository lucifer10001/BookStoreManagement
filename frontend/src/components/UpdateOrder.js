import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from '../actions/order'
import {Link} from 'react-router-dom'
// import UpdateBookForm from './UpdateBookForm'
class UpdateOrder extends Component {
  constructor() {
    super();
    this.bookId = React.createRef();
    this.quantity = React.createRef();
    this.subtotal = React.createRef();
    
    this.state = { order : {},message: "" };
  }

  componentDidMount(){

    console.log(this.props.match.params.id)

  }

  updateOrder() {
    console.log("updating...");

    var order = {
        id: this.props.match.params.id,
        bookId: this.bookId.current.value,
        quantity: this.quantity.current.value,
        subtotal: this.subtotal.current.value,
        
    };

    this.props.onUpdateOrder(order)

  }

 
  render() {
    return (
      // <UpdateBookForm />
      <div>
        <div className="w-50 user-form">
          <div className="input-group mb-3">
            <input
              value = {this.props.match.params.id}
              disabled
              type="text"
              className="form-control"
              placeholder="Id"
            />
          </div>
          <div className="input-group mb-3">
            <input
              ref={this.bookId}
              type="text"
              className="form-control"
              placeholder="Email"
            />
          </div>
          <div className="input-group mb-3">
            <input
              ref={this.quantity}
              type="text"
              className="form-control"
              placeholder="Email"
            />
          </div>
          <div className="input-group mb-3">
            <input
              ref={this.subtotal}
              type="text"
              className="form-control"
              placeholder="Email"
            />
          </div>
          
          
          <Link to="/">
          <button
            className="add-btn btn btn-primary"
            onClick={this.updateOrder.bind(this)}
          >
            Update
          </button>
          </Link>
        </div>
      </div>
    );
  }
}


const mapStateToProps = (state)=>{
  
  return {
   
    message : state.message,
    order : state.order
  }
}

const mapDispatchToState = (dispatch)=>{

  return {
    onUpdateOrder : (payload) => dispatch(actions.EditOrder(payload))
    // onFetchBook : (id) => dispatch(actions.fetchBook(id))
  }

}

export default connect(mapStateToProps,mapDispatchToState)(UpdateOrder)
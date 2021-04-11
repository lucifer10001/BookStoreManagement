import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from '../actions/customer'
import {Link} from 'react-router-dom'
// import UpdateBookForm from './UpdateBookForm'
class UpdateCustomer extends Component {
  constructor() {
    super();
    this.email = React.createRef();
    
    this.state = { customer : {},message: "" };
  }

  componentDidMount(){

    console.log(this.props.match.params.customerId)

  }

  updateCustomer() {
    console.log("updating...");

    var customer = {
        customerId: this.props.match.params.customerId,
        email : this.email.current.value,
        
    };

    this.props.onUpdateCustomer(customer)

  }

 
  render() {
    return (
      // <UpdateBookForm />
      <div>
        <div className="w-50 user-form">
          <div className="input-group mb-3">
            <input
              value = {this.props.match.params.customerId}
              disabled
              type="text"
              className="form-control"
              placeholder="Id"
            />
          </div>
          <div className="input-group mb-3">
            <input
              ref={this.email}
              type="text"
              className="form-control"
              placeholder="Email"
            />
          </div>
          
          <Link to="/">
          <button
            className="add-btn btn btn-primary"
            onClick={this.updateCustomer.bind(this)}
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
    customer : state.customer
  }
}

const mapDispatchToState = (dispatch)=>{

  return {
    onUpdateCustomer : (payload) => dispatch(actions.EditCustomer(payload))
    // onFetchBook : (id) => dispatch(actions.fetchBook(id))
  }

}

export default connect(mapStateToProps,mapDispatchToState)(UpdateCustomer)
import React, { Component } from "react";
import { connect } from "react-redux";
import Customer from "./Customer";
import * as actions from '../actions/book'

class ViewDetails extends Component {
  constructor() {
    super();
    this.state = { customer: [] };
  }
  
  fetchData()
  {

    console.log("fetching data.....")


  }

  componentDidMount() {
    this.props.onFetchCustomer()
  }

 

  render() {
    var customerList = this.props.customer.map((customer, i) => {
      return (
        <Customer
          key={customer.customerId}
          id={customer.customerId}
          email={customer.email}
          mobileNumber={customer.mobileNumber}
          fullName={customer.fullName}
          password={customer.password}
          address={customer.address}
          registerOn={customer.registerOn}
          fetchData={this.fetchData.bind(this)}
        ></Customer>

      );
    });

    return (
      <div>
        <div>{customerList}</div>
        
      </div>
    );
  }
}


const mapStateToProps = (state) =>{
  return{
   customer : state.customer
  }
}

const mapDispatchToState = (dispatch) =>{
  return {
    onFetchCustomer : () => dispatch(actions.fetchCustomer())
  }
}

export default connect(mapStateToProps,mapDispatchToState)(ViewDetails);
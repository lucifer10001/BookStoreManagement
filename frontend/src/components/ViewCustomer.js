import React, { Component } from "react";
import { connect } from "react-redux";
// import Book from "./Book.js";
import * as actions from '../actions/customer'
import Customer from './Customer'
import Grid from '@material-ui/core/Grid';

class ViewCustomer extends Component {
  constructor() {
    super();
    this.state = { customer : [] };
  }
  
  fetchData()
  {

    console.log("fetching data.....")


  }

  componentDidMount() {
    this.props.onFetchCustomer()
  }

 

  render() {


    if(this.props.customer===undefined)
    {
      return (
        <h1></h1>
      )
    }

    // var categoryList = []

    // if(this.props.categories)
    // {

      var customerList = this.props.customer.map((customer, i) => {
        return (
         <Grid item xs={6} sm={5} lg={3}> 
         
         {/* <BookCard book ={book}></BookCard> */}
         <Customer customer = {customer} > </Customer>
         </Grid>
          
        );
      });

    //}
    

    return (
      <div>
          <Grid container spacing={3}>
          {customerList}
          </Grid>
      
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

export default connect(mapStateToProps,mapDispatchToState)(ViewCustomer);
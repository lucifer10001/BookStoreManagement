import React, { Component } from "react";
import { connect } from "react-redux";
// import Book from "./Book.js";
import * as actions from '../actions/order'
import Order from './Order'
import Grid from '@material-ui/core/Grid';

class ViewOrder extends Component {
  constructor() {
    super();
    this.state = { Order : [] };
  }
  
  fetchData()
  {

    console.log("fetching data.....")


  }

  componentDidMount() {
    this.props.onFetchOrder()
  }

 

  render() {


    if(this.props.Order===undefined)
    {
      return (
        <h1></h1>
      )
    }

    // var categoryList = []

    // if(this.props.categories)
    // {

      var orderList = this.props.order.map((order, i) => {
        return (
         <Grid item xs={6} sm={5} lg={3}> 
         
         {/* <BookCard book ={book}></BookCard> */}
         <Order order = {order} > </Order>
         </Grid>
          
        );
      });

    //}
    

    return (
      <div>
          <Grid container spacing={3}>
          {orderList}
          </Grid>
      
      </div>
    );
  }
}


const mapStateToProps = (state) =>{
  return{
    order : state.order
  }
}

const mapDispatchToState = (dispatch) =>{
  return {
    onFetchOrder : () => dispatch(actions.fetchOrder())
  }
}

export default connect(mapStateToProps,mapDispatchToState)(ViewOrder);
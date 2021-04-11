

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Link } from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import VisibilityIcon from '@material-ui/icons/Visibility';
import EditIcon from '@material-ui/icons/Edit';
import { useDispatch } from 'react-redux';
import * as actions from '../actions/customer'
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 300,
  },
  image: {
    width: 128,
    height: 200,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
}));

export default function CustomerCard(props) {
  const classes = useStyles();

  const [show, setShow] = React.useState(false)

  const handleClick = () =>{
    setShow(!show)
  }

  const dispatch = useDispatch()

  const deleteCustomer = () =>{

    dispatch(actions.deleteCustomer(props.customer.customerId))

  }

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src="bookk.jpg" />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
                <Grid item xs container direction="column" spacing={2}>
                    <Grid item xs>
                      <Typography gutterBottom variant="subtitle1">
                        <p>{props.customer.customerId}</p>
                        </Typography>
                        <Typography gutterBottom variant="subtitle1">
                        <h5>{props.customer.email}</h5>
                        </Typography>
                        <Typography variant="body2" gutterBottom>
                        <p>{props.book.mobileNumber}</p>
                        </Typography>
                        <Typography variant="body2" gutterBottom >
                        <p>₹ {props.book.fullName}</p>
                        </Typography>
                        <div className={show?'':'hide'}>
                          
                          <Typography variant="body2" gutterBottom>
                              <p>Customer {props.customer.fullName}</p>
                          </Typography>

                          <Typography variant="body2" gutterBottom>
                            <p>Isbn {props.customer.password}</p>
                          </Typography>
                           
                          <Typography variant="body2" gutterBottom>
                            <p>{props.customer.address}</p>
                          </Typography>

                          
                  
                      </div>
                    </Grid>
      
                    
                    {/* <Grid item>
                        <Typography variant="body2" style={{ cursor: 'pointer' }}>
                        Remove
                        </Typography>
                        
                    </Grid> */}
                </Grid>
                
                {/* <Grid item >
                <Typography variant="subtitle1">$19.00</Typography>

                </Grid> */}
            </Grid>
        </Grid>
        <Grid item xs container direction="row" spacing={0} justify="center" alignItems="center">
                <IconButton  onClick={handleClick} >
                    <VisibilityIcon fontSize="small" color="blue" />
                </IconButton >
                {/* <i class="fas fa-info"></i> */}
                <IconButton onClick={deleteCustomer}  >
                    <DeleteIcon fontSize="small" />
                </IconButton>
                <Link to ={`/update/${props.customer.customerId}` }> 
                <IconButton>
                    <EditIcon></EditIcon>
                </IconButton>
                </Link>

        </Grid>
      </Paper>
    </div>
  );
}

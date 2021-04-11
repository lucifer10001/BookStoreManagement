import React from 'react';
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';
// import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
// import Box from '@material-ui/core/Box';
// import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useDispatch } from 'react-redux';
import * as actions from '../actions/order'

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Form() {
  const classes = useStyles();

  const [bookId,setBookId] = React.useState('')
  const [bookOrderId,setBookOrderId] = React.useState('')
  const [quantity,setQuantity] = React.useState('')
  const [subtotal,setSubtotal] = React.useState('')
  const dispatch = useDispatch()
  const addOrder = () =>{

    var order = {
      bookId: bookId,
      bookOrderId: bookOrderId,
      quantity: quantity,
      subtotal:subtotal,

      
    };
    dispatch(actions.addOrder(order))
  }
  const handleChange = (e)=>{
    let {name,value} = e.target

    if(name==='bookId')
    {
      setBookId(value)
      console.log('order = '+value)
    }
    else if(name==='bookOrderId'){
      setBookOrderId(value)
      console.log('bookOrderId =' +value)
    }

    else if(name==='quantity'){
      setQuantity(value)
      console.log('quantity =' +value)
    }
    else if(name==='subtotal'){
      setSubtotal(value)
      console.log('subtotal =' +value)
    }
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        
        <Typography component="h1" variant="h5">
        <PlaylistAddIcon /> Adding a Order
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="bookId"
                label="Insert Book Id "
                type="text"
                name="bookId"
                onChange={handleChange}
                // autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="bookOrderId"
                label="Book Order ID"
                type="text"
                name="bookOrderId"
                onChange={handleChange}
                // autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="quantity"
                label="Quantity of Book"
                type="text"
                name="quantity"
                onChange={handleChange}
                // autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="subtotal"
                label="TOTAl"
                type="text"
                name="subtotal"
                onChange={handleChange}
                // autoComplete="email"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={addOrder}
          >
            Add Order
          </Button>
        </form>
      </div>
    </Container>
  );
}
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
import * as actions from '../actions/customer'

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

  const [fullName,setfullName] = React.useState('')
  const [email,setEmail] = React.useState('')
  const [mobileNumber,setMobileNumber] = React.useState('')
  const dispatch = useDispatch()
  const addCustomer = () =>{

    var customer = {
      fullName: fullName,
      email: email,
      mobileNumber: mobileNumber,

      
    };
    dispatch(actions.addCustomer(customer))
  }
  const handleChange = (e)=>{
    let {name,value} = e.target

    if(name==='fullName')
    {
      setfullName(value)
      console.log('customer = '+value)
    }
    else if(name==='email'){
      setEmail(value)
      console.log('email =' +value)
    }

    else if(name==='mobileNumber'){
      setMobileNumber(value)
      console.log('mobileNumber =' +value)
    }
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        
        <Typography component="h1" variant="h5">
        <PlaylistAddIcon /> Adding a customer
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="fullName"
                label="Name of the Customer"
                type="text"
                name="fullName"
                onChange={handleChange}
                // autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email"
                type="text"
                name="email"
                onChange={handleChange}
                // autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="mobileNumber"
                label="Mobile Number"
                type="text"
                name="mobileNumber"
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
            onClick={addCustomer}
          >
            Add Customer
          </Button>
        </form>
      </div>
    </Container>
  );
}
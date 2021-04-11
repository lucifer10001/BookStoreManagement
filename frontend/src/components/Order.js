
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Link } from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
// import VisibilityIcon from '@material-ui/icons/Visibility';
import EditIcon from '@material-ui/icons/Edit';
import { useDispatch } from 'react-redux';
import * as actions from '../actions/order'

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

export default function OrderCard(props) {
  const classes = useStyles();

//   const [show, setShow] = React.useState(false)
const dispatch = useDispatch();

const deleteOrder = () =>{

  dispatch(actions.deleteOrder(props.order.id))

}

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src="https://cdn2.hubspot.net/hub/391043/file-1344068380-png/content_images/Repsly_Icons/My_profile-orange.png#keepProtocol" />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
                <Grid item xs container direction="column" spacing={2}>
                    <Grid item xs>
                      <Typography gutterBottom variant="subtitle1">
                        <p>{props.order.id}</p>
                        </Typography>
                        <Typography gutterBottom variant="subtitle1">
                        <h5>{props.order.bookId}</h5>
                        </Typography>
                        <Typography gutterBottom variant="subtitle1">
                        <h5>{props.order.bookOrderId}</h5>
                        </Typography>
                        <Typography gutterBottom variant="subtitle1">
                        <h5>{props.order.quantity}</h5>
                        </Typography>
                        <Typography gutterBottom variant="subtitle1">
                        <h5>{props.order.subtotal}</h5>
                        </Typography>
                        
                    </Grid>
                </Grid>
                
            </Grid>
        </Grid>
        <Grid item xs container direction="row" spacing={2} justify="center" alignItems="center">
                <IconButton onClick={deleteOrder}  >
                    <DeleteIcon fontSize="small" />
                </IconButton>
                <Link to ={`/updateCus/${props.order.id}` }> 
                <IconButton>
                    <EditIcon></EditIcon>
                </IconButton>
                </Link>

        </Grid>
      </Paper>
    </div>
  );
}

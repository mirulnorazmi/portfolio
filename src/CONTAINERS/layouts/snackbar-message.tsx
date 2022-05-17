import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { app } from '../../STORES/types';
function Alert(props: AlertProps) {
  return <MuiAlert elevation={6} variant='filled' {...props} />;
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function SnackBarMessage() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const redux = useSelector((state: any) => state.redux);

  const handleClick = () => {
    dispatch({
      type: app.SNACKBAR_MESSAGE,
      data: {
        message: '',
        open: true,
        type: 'default',
      },
    });
  };

  const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    dispatch({
      type: app.SNACKBAR_MESSAGE,
      data: {
        message: '',
        open: false,
        type: 'default',
      },
    });
  };

  const vertical = redux.app.snackbar_message.position[0];
  const horizontal = redux.app.snackbar_message.position[1];
  return (
    <div className={classes.root}>
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        key={`${vertical},${horizontal}`}
        open={redux.app.snackbar_message.open}
        autoHideDuration={
          redux.app.snackbar_message.hideDuration
            ? redux.app.snackbar_message.hideDuration
            : 6000
        }
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity={redux.app.snackbar_message.type}>
          {redux.app.snackbar_message.message}
        </Alert>
      </Snackbar>
      {/* <Alert severity="error">This is an error message!</Alert>
      <Alert severity="warning">This is a warning message!</Alert>
      <Alert severity="info">This is an information message!</Alert>
      <Alert severity="success">This is a success message!</Alert> */}
    </div>
  );
}

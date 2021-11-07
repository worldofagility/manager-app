import { Box, Button, CircularProgress, Paper, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import * as React from 'react';
import { authActions, isLoggingSelector } from '../authSlice';
export interface LoginPageProps {}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
  },
  box: {
    padding: theme.spacing(3),
  },
}));

export default function LoginPage(props: LoginPageProps) {
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const isLogging = useAppSelector(isLoggingSelector);

  const handleLoginClick = () => {
    dispatch(
      authActions.login({
        username: '',
      })
    );
  };

  return (
    <div className={classes.root}>
      <Paper elevation={3} className={classes.box}>
        <Typography variant='h5' component='h1'>
          Test Management
        </Typography>
        <Box mt={4}>
          <Button fullWidth variant='contained' color='primary' onClick={handleLoginClick}>
            {isLogging && <CircularProgress size={25} color='secondary' sx={{ marginRight: 1 }} />}
            Login
          </Button>
        </Box>
      </Paper>
    </div>
  );
}

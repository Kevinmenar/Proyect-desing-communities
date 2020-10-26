import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import '../../styles/index.css';
import LoginImage from '../../assets/LoginBackgroud.png'
import Avatar from '../../assets/avatar.png'
import * as routes from '../../routes/routes'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

function Login(props) {
  const classes = useStyles();
  const { history } = props;
  
  const authHandler = () => {
    props.setAuth();
    history.push(routes.HOME);
  };



  return (
    <div class="login-parent">
      <div class="col-6 col-s-6">
        <div class="background-login-image">
          <img src={LoginImage} alt="Nature" class="login-image" width="620" height="620"/>
        </div>
      </div>
      <div class="col-6 col-s-6">
        <div class="background-login">
          <form>
            <div class="imgcontainer">
              <img src={Avatar} alt="Avatar" class="avatar"/>
            </div>
            <div class="container">
              <label for="uname"><b>Username</b></label>
              <input type="text" placeholder="Enter email" name="uname" required/>
              <label for="psw"><b>Password</b></label>
              <input type="password" placeholder="Enter Password" name="psw" required/>
              <button type="submit" onClick={authHandler}>Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;

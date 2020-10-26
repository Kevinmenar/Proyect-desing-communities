import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import * as routes from '../routes/routes'
import Login from './login/Login'
import PrivateRoute from '../routes/private-routes'
import '../index.css'
import Home from './home/Home'
import 'react-sortable-tree/style.css';

function App() {
  const [isAuth, setAuth] = useState(false);
  return (
    <Router>
      <Route exact path={routes.SIGN_IN} component={(props) => <Login {...props} setAuth={() => {setAuth(true)}}/>}/>
      <Route
        exact path={routes.HOME}
        render={({ location }) =>
        isAuth ? (
            <Home />
          ) : (
              <Redirect
                to={{
                  pathname: "/",
                  state: { from: location }
                }}
              />
            )
        }
      />
    </Router>
  );
}

export default App;

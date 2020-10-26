/* eslint-disable react/react-in-jsx-scope */
import { BrowserRouter as  Route, Redirect } from "react-router-dom"
import getCookie from "../services/CookieService"

const PrivateRoute = ({ component: Component, route: Route}) => {
  const isAuth = getCookie();
  return (
    <Route
      exact path={Route}
      render={({ props }) =>
      isAuth ? (
        <Component {...props} />
        ) : (
            <Redirect
              to={{
                pathname: "/",
                state: { from: props.location }
              }}
            />
          )
      }
    />
  );
}

export default PrivateRoute;
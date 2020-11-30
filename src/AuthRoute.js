import React from "react";
import { Route, Redirect } from "react-router-dom";
// import { useSelector } from "react-redux";

const AuthRoute = ({ component: Component, authenticated, ...rest }) => {
  // const authenticated = useSelector(state => state.adminReducer.authenticated)
  // const authenticated = true;
  console.log("authenticated :>> ", authenticated);
  return (
    <Route
      {...rest} /// exact path '....'
      render={(
        props //props is all
      ) =>
        authenticated === false ? (
          <Redirect to="/admin" />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};
export default AuthRoute;

import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Route, Redirect } from "react-router-dom";

export const PublicLayout = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => (
        <React.Fragment>
          <Component {...props} />
        </React.Fragment>
      )}
    />
  );
};

export const PrivateLayout = ({
  component: Component,
  authenticated,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={props =>
        authenticated ? (
          <div className="wrapper">
            <Header />
            <Component {...props} />
            <Footer />
          </div>
        ) : (
          <Redirect to="/" />
        )
      }
    />
  );
};

import React from "react";
import { Helmet } from "react-helmet";

import Header from "./Header";
import Footer from "./Footer";
import { Switch, Route } from "react-router-dom";
import Users from "../../pages/Users";
import AddUsers from "../../pages/Users/AddUsers";
import EditUsers from "../../pages/Users/EditUsers";

const Root = () => {
  return (
    <React.Fragment>
      <Helmet titleTemplate="%s | User">
        <title>Dashboard</title>
      </Helmet>
      <React.Fragment>
        <Header />
        <div id="wrapper">
          <div id="content-wrapper">
            <div className="container-fluid position-relative">
              <Switch>
                <Route exact path="/users" component={Users} />
                <Route exact path="/users/add" component={AddUsers} />
                <Route exact path="/users/edit/:id" component={EditUsers} />
                {/* <Route path="/users">
                                <About />
                            </Route>
                            <Route path="/#1">
                                <Dashboard />
                            </Route> */}
              </Switch>
            </div>
          </div>
        </div>
        <Footer />
      </React.Fragment>
    </React.Fragment>
  );
};

export default Root;

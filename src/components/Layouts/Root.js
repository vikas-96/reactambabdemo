import React from "react";
import { Helmet } from "react-helmet";
import { Switch } from "react-router-dom";
import Users from "../../pages/Users";
import AddUsers from "../../pages/Users/AddUsers";
import EditUsers from "../../pages/Users/EditUsers";
import Borrowers from "../../pages/Borrowers";
import AddBorrowers from "../../pages/Borrowers/AddBorrower";
import EditBorrower from "../../pages/Borrowers/EditBorrower";
import Login from "../../pages/Auth/Login";

import { PublicLayout, PrivateLayout } from "./Layout";

const Root = () => {
  // console.log(checkAuth());
  return (
    <React.Fragment>
      <Helmet titleTemplate="%s | User">
        <title>Dashboard</title>
      </Helmet>
      <React.Fragment>
        {/* <Header /> */}
        <div id="wrapper">
          <div id="content-wrapper">
            <div className="container-fluid position-relative">
              <Switch>
                <PublicLayout path="/" exact component={Login} />
                {/* <Route path="/logout" exact component={Logout} /> */}
                <PrivateLayout exact path="/users" component={Users} />
                <PrivateLayout exact path="/users/add" component={AddUsers} />
                <PrivateLayout
                  exact
                  path="/users/edit/:id"
                  component={EditUsers}
                />
                <PrivateLayout exact path="/borrowers" component={Borrowers} />
                <PrivateLayout
                  exact
                  path="/borrowers/add"
                  component={AddBorrowers}
                />
                <PrivateLayout
                  exact
                  path="/borrowers/edit/:id"
                  component={EditBorrower}
                />
                {/* <Route exact path="/" component={Login} />
                <Route exact path="/users" component={Users} />
                <Route exact path="/users/add" component={AddUsers} />
                <Route exact path="/users/edit/:id" component={EditUsers} />
                <Route exact path="/borrowers" component={Borrowers} />
                <Route exact path="/borrowers/add" component={AddBorrowers} />
                <Route
                  exact
                  path="/borrowers/edit/:id"
                  component={EditBorrower}
                /> */}
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
        {/* <Footer /> */}
      </React.Fragment>
    </React.Fragment>
  );
};

export default Root;

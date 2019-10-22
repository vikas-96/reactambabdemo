import React from "react";
import { Link } from "react-router-dom";
import UserListing from "./Listing";

const Users = () => {
  return (
    <React.Fragment>
      <Link to="/users/add" className="btn btn-success float-right">
        Add Users
      </Link>
      <UserListing />
    </React.Fragment>
  );
};

export default Users;

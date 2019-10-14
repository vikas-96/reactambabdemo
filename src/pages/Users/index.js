import React from "react";
import { Link } from "react-router-dom";

const Users = () => {
  return (
    <React.Fragment>
      <Link to="/users/add">Add Users</Link>
    </React.Fragment>
  );
};

export default Users;

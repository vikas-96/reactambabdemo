import React from "react";
import { Link } from "react-router-dom";
// import UserListing from "./Listing";

const Borrowers = () => {
  return (
    <React.Fragment>
      <Link to="/borrowers/add" className="btn btn-success float-right">
        Add Borrower
      </Link>
      {/* <UserListing /> */}
    </React.Fragment>
  );
};

export default Borrowers;

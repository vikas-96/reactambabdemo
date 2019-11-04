import React from "react";
import { Link } from "react-router-dom";
import BorrowerListing from "./Listing";

const Borrowers = () => {
  return (
    <React.Fragment>
      <Link to="/borrowers/add" className="btn btn-success float-right">
        Add Borrower
      </Link>
      <BorrowerListing />
    </React.Fragment>
  );
};

export default Borrowers;

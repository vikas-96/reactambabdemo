import React from "react";

const logout = props => {
  localStorage.removeItem("userDetails");
};

export default logout;

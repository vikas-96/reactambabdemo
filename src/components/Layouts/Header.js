import React from "react";
import { NavLink, Link } from "react-router-dom";
import { Navbar, Nav, NavItem } from "reactstrap";
import logout from "../../pages/Auth/Logout";

class Header extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Navbar className="header" expand="md">
          <div className="navbar-brand">
            {" "}
            <NavLink className="navbar-brand nav-link arrow-down" to="/">
              <i className="fas fa-home fa-lg" />
              {/* <img src="/images/logo.png" /> */}
            </NavLink>
          </div>

          <Nav
            className="nav-tabs header-links"
            expand="md"
            navbar
            pills
            tabs
            color="light"
          >
            <NavItem />
            <NavItem>
              <NavLink className="nav-link arrow-down" to="/users">
                User
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link arrow-down" to="/borrowers">
                Borrower
              </NavLink>
            </NavItem>
          </Nav>
          <Link onClick={logout} to="/" className="btn btn-danger float-right">
            Logout
          </Link>
        </Navbar>
      </React.Fragment>
    );
  }
}

export default Header;

import React from "react";
import { Button, Col, Media, Row } from "reactstrap";
import BootstrapTable from "react-bootstrap-table-next";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import paginationFactory from "react-bootstrap-table2-paginator";
import "react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import "react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit.min.css";
import filterFactory from "react-bootstrap-table2-filter";
import "react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css";
import { connect } from "react-redux";
import * as userActions from "../../store/users/actions";
import { Link } from "react-router-dom";

const { SearchBar } = Search;

class Listing extends React.Component {
  componentDidMount() {
    this.props.dispatch(userActions.fetchUsers());
  }

  deleteUser = id => {
    let r = window.confirm("Do you want to delete this user");
    if (r === true) {
      this.props.dispatch(userActions.deleteUsers(id, this.props.users));
    }
  };

  columns = () => {
    return [
      {
        dataField: "",
        text: "Sr No.",
        formatter: (value, row, index) => {
          return index + 1;
        },
        searchable: false
      },
      {
        dataField: "first_name",
        text: "Name",
        formatter: (value, row) => {
          return row.first_name + " " + row.last_name;
        },
        sort: true
      },
      {
        dataField: "email",
        text: "Email",
        sort: true
      },
      {
        dataField: "gender",
        text: "Gender",
        sort: true
      },
      {
        dataField: "hob",
        text: "Hob",
        sort: true
      },
      {
        dataField: "state",
        text: "State",
        sort: true
      },
      {
        dataField: "city",
        text: "City",
        sort: true
      },
      {
        dataField: "npa_date",
        text: "NPA Date",
        sort: true
      },
      {
        dataField: "file",
        text: "Profile",
        formatter: (value, row) => {
          return (
            <Media
              object
              src={process.env.REACT_APP_API_URL + "/" + value}
              alt="Profile image"
              height="64px"
              width="90px"
            />
          );
        }
      },
      {
        dataField: "",
        text: "Actions",
        formatter: this.cellButton
      }
    ];
  };

  cellButton = (cell, row) => {
    return (
      <div>
        <Row>
          <Link
            to={"/users/edit/" + row.id}
            className="btn btn-primary"
            size="sm"
          >
            Edit
          </Link>
          <Button color="danger" onClick={() => this.deleteUser(row.id)}>
            Delete
          </Button>
        </Row>
      </div>
    );
  };
  render() {
    return (
      <div>
        <h2 className="text-center">User Details</h2>
        <ToolkitProvider
          keyField="id"
          data={this.props.users}
          columns={this.columns()}
          striped
          bootstrap4
          search={{
            searchFormatted: true
          }}
        >
          {props => (
            <div>
              <Col md={2} className="float-right">
                <SearchBar {...props.searchProps} />
              </Col>
              <BootstrapTable
                filter={filterFactory()}
                pagination={paginationFactory()}
                {...props.baseProps}
              />
            </div>
          )}
        </ToolkitProvider>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    users: state.users.usersArray
  };
}

export default connect(mapStateToProps)(Listing);

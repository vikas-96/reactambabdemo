import React from "react";
import { Button, Col, Media } from "reactstrap";
import { getUsers, deleteUser } from "../../request/users";
import BootstrapTable from "react-bootstrap-table-next";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import paginationFactory from "react-bootstrap-table2-paginator";
import "react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import "react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit.min.css";
import filterFactory, { textFilter } from "react-bootstrap-table2-filter";
import "react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css";
import { connect } from "react-redux";

const { SearchBar } = Search;

class Listing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }

  componentDidMount() {
    getUsers().then(res => {
      this.setState({ users: res.data });
    });
  }

  deleteUser = id => {
    let r = window.confirm("Do you want to delete this user");
    if (r === true) {
      deleteUser(id).then(res => {
        const usernewaray = this.state.users.filter(row => row.id !== id);
        this.setState({ users: usernewaray });
      });
    }
  };

  columns = () => {
    return [
      {
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
        text: "Actions",
        formatter: this.cellButton
      }
    ];
  };

  cellButton = (cell, row) => {
    return (
      <div>
        <Button color="primary" size="sm">
          Edit
        </Button>{" "}
        <Button
          color="danger"
          size="sm"
          onClick={() => this.deleteUser(row.id)}
        >
          Delete
        </Button>
      </div>
    );
  };
  render() {
    return (
      <div>
        <h2 className="text-center">User Details</h2>
        <ToolkitProvider
          keyField="id"
          data={this.state.users}
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
        {/* {this.props.users.map(users => {
          return <li>{users.title}</li>;
        })} */}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    users: state.users
  };
}

export default connect(mapStateToProps)(Listing);

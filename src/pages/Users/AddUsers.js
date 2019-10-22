import React from "react";
import UserForm from "./UserForm";
import _ from "lodash";
import { createUser } from "../../request/users";

class AddUsers extends React.Component {
  handleSubmit = data => {
    createUser(data)
      .then(res => {
        this.props.history.push("/users");
      })
      .catch(err => console.log(err.response.data.errors));
  };

  render() {
    return (
      <UserForm
        // statedata={this.state}
        // changefunct={this.handleChange}
        // SelectChange={this.handleSelectChange}
        // handleDate={this.handleDate}
        // fileChange={this.handleFile}
        submithandler={this.handleSubmit}
      />
    );
  }
}

export default AddUsers;

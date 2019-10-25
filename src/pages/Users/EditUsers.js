import React from "react";
import UserForm from "./UserForm";
import { connect } from "react-redux";
// import _ from "lodash";
import * as userActions from "../../store/users/actions";
import { updateUser } from "../../request/users";

class EditUsers extends React.Component {
  handleSubmit = data => {
    const userid = this.props.match.params.id;
    updateUser(data, userid)
      .then(res => {
        this.props.history.push("/users");
      })
      .catch(err => console.log(err.response.data.errors));
  };

  componentDidMount() {
    const userid = this.props.match.params.id;
    this.props.dispatch(userActions.getUserData(userid));
  }

  componentWillUnmount() {
    this.props.dispatch(userActions.resetAll());
  }

  render() {
    return (
      <UserForm
        // statedata={this.state}
        // changefunct={this.handleChange}
        // SelectChange={this.handleSelectChange}
        // handleDate={this.handleDate}
        // fileChange={this.handleFile}
        submithandler={this.handleSubmit}
        {...this.props.userdata}
      />
    );
  }
}

function mapStateToProps(state) {
  return {
    userdata: state.users.userDetail
  };
}

export default connect(mapStateToProps)(EditUsers);

import React from "react";
import BorrowerForm from "./BorrowerForm";
import _ from "lodash";
import { connect } from "react-redux";
import notify from "../../utils/notify";
import * as borrowerActions from "../../store/borrowers/action";

class AddBorrowers extends React.Component {
  componentWillUnmount() {
    this.props.dispatch(borrowerActions.resetAll());
  }

  handleSubmit = async data => {
    try {
      await this.props.dispatch(borrowerActions.createBorrowerData(data));
    } catch (error) {}
    return this.props;
  };

  setTimeoutFn = (time, message, type = false, is_redirect = true) => {
    notify({
      type: type || "success",
      text: message
      //layout: "topCenter"
    });
    if (is_redirect) {
      setTimeout(() => {
        this.props.history.replace("/borrowers");
      }, time);
    }
  };

  render() {
    if (this.props.isBorrowerCreated) {
      this.setTimeoutFn(1000, "User created successfully!");
    }
    return (
      <BorrowerForm
        submithandler={this.handleSubmit}
        {...this.props.borrowerData}
        setTimeoutFn={this.setTimeoutFn}
      />
    );
  }
}

function mapStateToProps(state) {
  return {
    borrowerData: state.borrowers.borrowerData,
    error: state.borrowers.error,
    isBorrowerCreated: state.borrowers.isBorrowerCreated,
    isValidationError: state.borrowers.isValidationError
  };
}

export default connect(mapStateToProps)(AddBorrowers);

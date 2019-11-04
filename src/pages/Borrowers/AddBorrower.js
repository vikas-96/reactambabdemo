import React from "react";
import BorrowerForm from "./BorrowerForm";
import { connect } from "react-redux";
import notify from "../../utils/notify";
import * as borrowerActions from "../../store/borrowers/action";
import getValidationErrors from "../../utils/getValidationErrors";

class AddBorrowers extends React.Component {
  handleSubmit = async data => {
    try {
      await this.props.dispatch(borrowerActions.createBorrowerData(data));
    } catch (error) {}
    return this.props;
  };

  setTimeoutFn = (time, message) => {
    notify({
      type: "success",
      text: message
    });
    setTimeout(() => {
      this.props.history.replace("/borrowers");
    }, time);
  };

  render() {
    if (this.props.isBorrowerCreated) {
      this.setTimeoutFn(1000, "Borrower created successfully!");
    }
    return (
      <BorrowerForm
        submithandler={this.handleSubmit}
        {...this.props.borrowerData}
        validationErrors={getValidationErrors(this.props)}
        isValidationError={this.props.isValidationError}
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

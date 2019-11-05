import React from "react";
import BorrowerForm from "./BorrowerForm";
import { connect } from "react-redux";
import _ from "lodash";
import * as borrowerActions from "../../store/borrowers/action";
import getValidationErrors from "../../utils/getValidationErrors";
import notify from "../../utils/notify";

class EditBorrower extends React.Component {
  handleSubmit = async data => {
    const borrowerid = this.props.match.params.id;
    await this.props.dispatch(
      borrowerActions.updateBorrowerData(borrowerid, data)
    );
  };

  componentDidMount() {
    const borrowerid = this.props.match.params.id;
    this.props.dispatch(borrowerActions.getBorrower(borrowerid));
  }

  componentWillUnmount() {
    this.props.dispatch(borrowerActions.resetAll());
  }

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
    if (this.props.isBorrowerUpdated) {
      this.setTimeoutFn(1000, "Borrower updated successfully");
    }
    if (_.isEmpty(this.props.borrowerdata)) return <p>Loading...</p>;
    return (
      <BorrowerForm
        submithandler={this.handleSubmit}
        {...this.props.borrowerdata}
        validationErrors={getValidationErrors(this.props)}
        isValidationError={this.props.isValidationError}
      />
    );
  }
}

function mapStateToProps(state) {
  return {
    borrowerdata: state.borrowers.borrowerDetail,
    error: state.borrowers.error,
    isBorrowerUpdated: state.borrowers.isBorrowerUpdated,
    isValidationError: state.borrowers.isValidationError
  };
}

export default connect(mapStateToProps)(EditBorrower);

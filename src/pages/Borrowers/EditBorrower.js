import React from "react";
import BorrowerForm from "./BorrowerForm";
import { connect } from "react-redux";
// import _ from "lodash";
import * as borrowerActions from "../../store/borrowers/action";
import getValidationErrors from "../../utils/getValidationErrors";

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

  //   componentWillUnmount() {
  //     this.props.dispatch(borrowerActions.resetAll());
  //   }

  render() {
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
    borrowerdata: state.borrowers.borrowerDetail
  };
}

export default connect(mapStateToProps)(EditBorrower);

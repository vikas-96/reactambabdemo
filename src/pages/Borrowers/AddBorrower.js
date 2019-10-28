import React from "react";
import BorrowerForm from "./BorrowerForm";
import _ from "lodash";

class AddBorrowers extends React.Component {
  handleSubmit = data => {
    console.log(data);
    return true;
    // createBorrower(data)
    //   .then(res => {
    //     this.props.history.push("/borrowers");
    //   })
    //   .catch(err => console.log(err.response.data.errors));
  };

  render() {
    return (
      <BorrowerForm
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

export default AddBorrowers;

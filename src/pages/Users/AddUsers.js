import React from "react";
import UserForm from "./UserForm";
import { format } from "date-fns";

class AddUsers extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      first_name: "",
      last_name: "",
      email: "",
      gender: "",
      hob: [],
      edu: "",
      eduvalue: "",
      npa_date: ""
    };
  }

  handleDate = (name, date) => {
    const formatedDate = date ? format(date, "yyyy-MM-dd") : "";
    this.setState({ [name]: formatedDate });
  };

  handleChange = e => {
    if (e.target.type !== "checkbox") {
      this.setState({ [e.target.name]: e.target.value });
    } else {
      const checkeds = document.getElementsByName(e.target.name);
      let checkedArr = [];
      for (let i = 0; i < checkeds.length; i++) {
        if (checkeds[i].checked) {
          checkedArr.push(checkeds[i].value);
        }
      }
      this.setState({ [e.target.name]: checkedArr });
    }
  };

  handleSelectChange = (e, componentName) => {
    this.setState({
      [componentName.name]: e,
      [componentName.name + "value"]: e.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    // this.props.handleSubmit(data);
    console.log(this.state);
  };

  render() {
    return (
      <UserForm
        statedata={this.state}
        changefunct={this.handleChange}
        SelectChange={this.handleSelectChange}
        handleDate={this.handleDate}
        submithandler={this.handleSubmit}
      />
    );
  }
}

export default AddUsers;

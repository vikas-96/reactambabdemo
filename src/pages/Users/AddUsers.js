import React from "react";
import UserForm from "./UserForm";
import { format } from "date-fns";
import { getCity } from "../../request/users";

class AddUsers extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      first_name: null,
      last_name: null,
      email: null,
      gender: null,
      hob: [],
      states: null,
      statesvalue: null,
      npa_date: null,
      city: [],
      file: null
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
    if (componentName.name === "states") {
      // city api called
      getCity(e.value).then(response =>
        this.setState({
          city: response.data
        })
      );
    }
  };

  handleFile = e => {
    this.setState({
      [e.target.name]: e.target.files[0]
    });
    let File = new FormData();
    File.append("files", e.target.files[0]);
    console.log(File.get("files"));
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
        fileChange={this.handleFile}
        submithandler={this.handleSubmit}
      />
    );
  }
}

export default AddUsers;

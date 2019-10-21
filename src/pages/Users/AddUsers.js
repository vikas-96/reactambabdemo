import React from "react";
import UserForm from "./UserForm";
import { format } from "date-fns";
import { getCity, uploadFile, createUser } from "../../request/users";
import serialize from "form-serialize";
import _ from "lodash";

class AddUsers extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // first_name: "",
      // last_name: "",
      // email: "",
      // gender: "",
      // hob: [],
      states: "",
      statesvalue: "",
      npa_date: "",
      cities: [],
      file: ""
    };
  }

  handleDate = (name, date) => {
    const formatedDate = date ? format(date, "yyyy-MM-dd") : "";
    this.setState({ [name]: formatedDate });
  };

  // handleChange = e => {
  //   if (e.target.type !== "checkbox") {
  //     this.setState({ [e.target.name]: e.target.value });
  //   } else {
  //     const checkeds = document.getElementsByName(e.target.name);
  //     let checkedArr = [];
  //     for (let i = 0; i < checkeds.length; i++) {
  //       if (checkeds[i].checked) {
  //         checkedArr.push(checkeds[i].value);
  //       }
  //     }
  //     this.setState({ [e.target.name]: checkedArr });
  //   }
  // };

  handleSelectChange = (e, componentName) => {
    this.setState({
      [componentName.name]: e,
      [componentName.name + "value"]: e.value
    });
    if (componentName.name === "states") {
      // city api called
      getCity(e.value).then(response =>
        this.setState({
          cities: response.data
        })
      );
    }
  };

  handleFile = e => {
    let name = e.target.name;
    let File = new FormData();
    File.append("files", e.target.files[0]);
    uploadFile(File).then(response => {
      this.setState({
        [name]: response.image
      });
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    const form = e.target;
    const data = serialize(form, { hash: true });
    data["file"] = !_.isEmpty(this.state.file) && this.state.file;

    // console.log(data);
    createUser(data)
      .then(res => {
        this.props.history.push("/users");
      })
      .catch(err => console.log(err.response.data.errors));
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

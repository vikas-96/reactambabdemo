import React from "react";
import UserForm from "./UserForm";
import { format } from "date-fns";
import { getCity, uploadFile, createUser } from "../../request/users";
import { connect } from "react-redux";
import _ from "lodash";

class EditUsers extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      first_name: "",
      last_name: "",
      email: "",
      gender: "",
      hob: "",
      states: "",
      statesvalue: "",
      npa_date: "",
      city: [],
      file: ""
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
    // console.log(this.state);
    createUser(this.state)
      .then(res => {
        this.props.history.push("/users");
      })
      .catch(err => console.log(err.response.data.errors));
  };

  componentDidMount() {
    const userid = this.props.match.params.id;
    const userdata = this.props.users;
    let obj = _.filter(userdata, { id: userid });
    // console.log(obj);
    // console.log(obj[0].city);
    this.setState({
      first_name: obj[0].first_name,
      last_name: obj[0].last_name,
      email: obj[0].email,
      gender: obj[0].gender,
      hob: obj[0].hob,
      states: "",
      statesvalue: "",
      npa_date: obj[0].npa_date,
      city: [],
      file: obj[0].file
    });

    // console.log(this.state);
  }

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

function mapStateToProps(state) {
  return {
    users: state.users.usersArray
  };
}

export default connect(mapStateToProps)(EditUsers);

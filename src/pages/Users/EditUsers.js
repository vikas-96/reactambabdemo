import React from "react";
import UserForm from "./UserForm";
import { format } from "date-fns";
import { getCity, uploadFile, createUser } from "../../request/users";
import { connect } from "react-redux";
import _ from "lodash";
import * as userActions from "../../store/users/actions";
import serialize from "form-serialize";

class EditUsers extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // first_name: "",
      // last_name: "",
      // email: "",
      // gender: "",
      // hob: "",
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
    console.log("12");
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

    const form = e.target;
    const data = serialize(form, { hash: true });
    if (!_.isEmpty(this.state.file)) data["file"] = this.state.file;

    console.log(data);

    // createUser(this.state)
    //   .then(res => {
    //     this.props.history.push("/users");
    //   })
    //   .catch(err => console.log(err.response.data.errors));
  };

  componentDidMount() {
    const userid = this.props.match.params.id;
    this.props.dispatch(userActions.getUserData(userid));
  }

  render() {
    let data = !_.isEmpty(this.props.userdata)
      ? this.props.userdata
      : this.state;
    return (
      <UserForm
        statedata={data}
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
    userdata: state.users.userDetail
  };
}

export default connect(mapStateToProps)(EditUsers);

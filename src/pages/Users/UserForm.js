import React from "react";
import {
  Form,
  FormGroup,
  Input,
  Label,
  Row,
  Col,
  Button,
  Media
} from "reactstrap";
import Select from "react-select";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { getStates } from "../../request/users";
import { getKeyValue, getCityKeyValue } from "../../helpers/Helpers";
import _ from "lodash";
import { format } from "date-fns";
import { getCity, uploadFile } from "../../request/users";

import serialize from "form-serialize";

const checkboxes = [
  {
    name: "hob",
    value: "cric",
    label: "Cric"
  },
  {
    name: "hob",
    value: "ftbl",
    label: "Ftbl"
  }
];

class UserFrom extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      gender: "",
      hob: [],
      states: "",
      statesvalue: "",
      npa_date: "",
      cities: [],
      file: "",
      allstates: "",
      allcities: ""
    };

    this.getStates();
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      gender: nextProps.gender,
      hob: nextProps.hob,
      states: nextProps.statesdata,
      cities: nextProps.citiesdata,
      npa_date: nextProps.npa_date,
      file: nextProps.file
    });

    if (!_.isEmpty(nextProps.citiesdata)) {
      this.getCities(nextProps.statesdata);
    }
  }

  getStates = e => {
    getStates().then(res => {
      this.setState({ allstates: getKeyValue(res) });
    });
  };

  getCities = e => {
    // city api called
    getCity(e.value).then(response =>
      this.setState({
        allcities: getCityKeyValue(response.data)
      })
    );
  };

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
      this.getCities(e);
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
    // console.log(data);
    if (!_.isEmpty(this.state.file)) data["file"] = this.state.file;
    this.props.submithandler(data);
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit} encType="multipart/formdata">
        <Row>
          <Col md={4}>
            <FormGroup>
              <Label for="first_name">First Name</Label>
              <Input
                type="text"
                name="first_name"
                id="first_name"
                placeholder="First Name"
                defaultValue={this.props && this.props.first_name}
                // onChange={this.handleChange}
              />
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label for="last_name">Last Name</Label>
              <Input
                type="text"
                name="last_name"
                id="last_name"
                placeholder="Last Name"
                defaultValue={this.props && this.props.last_name}
                // onChange={this.handleChange}
              />
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label for="email">Email</Label>
              <Input
                type="email"
                name="email"
                id="email"
                placeholder="Email-Id"
                defaultValue={this.props && this.props.email}
                // onChange={this.handleChange}
              />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            <FormGroup>
              <Label for="gender">Gender</Label>
              <br />
              <Row>
                <Col md={2}>
                  <Input
                    type="radio"
                    name="gender"
                    value="male"
                    // checked={gender === "male"}
                    checked={this.state.gender === "male" ? true : false}
                    onChange={this.handleChange}
                  />
                  Male
                </Col>
                <Col md={2}>
                  <Input
                    type="radio"
                    name="gender"
                    value="female"
                    // checked={gender === "female"}
                    checked={this.state.gender === "female" ? true : false}
                    onChange={this.handleChange}
                  />
                  Female
                </Col>
              </Row>
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label for="hob">Hob</Label>
              <br />
              <Row>
                {checkboxes.map((item, index) => (
                  <Col md={2} key={index}>
                    <label>
                      {item.label}
                      <Input
                        type="checkbox"
                        name={item.name}
                        value={item.value}
                        checked={
                          !_.isEmpty(this.state.hob)
                            ? this.state.hob.indexOf(item.value) > -1
                              ? true
                              : false
                            : ""
                        }
                        onChange={this.handleChange}
                      />
                    </label>
                  </Col>
                ))}
              </Row>
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label for="states">States</Label>
              <Select
                name="states"
                value={this.state.states}
                onChange={this.handleSelectChange}
                options={this.state.allstates}
              />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            <FormGroup>
              <Label for="cities">City</Label>
              <Select
                name="cities"
                value={this.state.cities}
                onChange={this.handleSelectChange}
                options={this.state.allcities}
              />
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label for="npa_date">NPA Date</Label>
              <DatePicker
                name="npa_date"
                dateFormat="yyyy-MM-dd"
                placeholderText="Select NPA date ..."
                selected={
                  this.state.npa_date ? Date.parse(this.state.npa_date) : ""
                }
                onChange={this.handleDate.bind(this, "npa_date")}
              />
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label for="exampleFile">File</Label>
              <Input type="file" name="file" onChange={this.handleFile} />
              {!_.isEmpty(this.state.file) && (
                <Media
                  object
                  src={process.env.REACT_APP_API_URL + "/" + this.state.file}
                  alt="Profile image"
                  height="64px"
                  width="90px"
                />
              )}
            </FormGroup>
          </Col>
        </Row>
        <Col md={4}>
          <Button type="submit" outline color="success">
            Submit
          </Button>
        </Col>
      </Form>
    );
  }
}

export default UserFrom;

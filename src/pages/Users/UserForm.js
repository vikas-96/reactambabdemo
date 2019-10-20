import React, { useState, useEffect } from "react";
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

const UserForm = props => {
  const [states, setStates] = useState("");

  useEffect(() => {
    getStates().then(res => {
      setStates(res);
    });
  }, []);

  let statesoptions = getKeyValue(states);
  let cityoptions = getCityKeyValue(props.statedata.city);

  return (
    <Form onSubmit={props.submithandler} encType="multipart/formdata">
      <Row>
        <Col md={4}>
          <FormGroup>
            <Label for="first_name">First Name</Label>
            <Input
              type="text"
              name="first_name"
              id="first_name"
              placeholder="First Name"
              value={props.statedata.first_name}
              onChange={props.changefunct}
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
              value={props.statedata.last_name}
              onChange={props.changefunct}
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
              placeholder="Email-Id "
              value={props.statedata.email}
              onChange={props.changefunct}
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
                  checked={props.statedata.gender === "male"}
                  onChange={props.changefunct}
                />
                Male
              </Col>
              <Col md={2}>
                <Input
                  type="radio"
                  name="gender"
                  value="female"
                  checked={props.statedata.gender === "female"}
                  onChange={props.changefunct}
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
                        props.statedata.hob.indexOf(item.value) > -1
                          ? true
                          : false
                      }
                      onChange={props.changefunct}
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
              defaultValue={props.statedata.states}
              onChange={props.SelectChange}
              options={statesoptions}
            />
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col md={4}>
          <FormGroup>
            <Label for="city">City</Label>
            <Select
              name="city"
              value={props.statedata.city}
              onChange={props.SelectChange}
              options={cityoptions}
            />
          </FormGroup>
        </Col>
        <Col md={4}>
          <FormGroup>
            <Label for="npa_date">Select Date</Label>
            <DatePicker
              name="npa_date"
              dateFormat="yyyy-MM-dd"
              placeholderText="Select NPA date ..."
              selected={
                props.statedata.npa_date
                  ? Date.parse(props.statedata.npa_date)
                  : ""
              }
              onChange={props.handleDate.bind(this, "npa_date")}
            />
          </FormGroup>
        </Col>
        <Col md={4}>
          <FormGroup>
            <Label for="exampleFile">File</Label>
            <Input type="file" name="file" onChange={props.fileChange} />
            {!_.isEmpty(props.statedata.file) && (
              <Media
                object
                src={process.env.REACT_APP_API_URL + "/" + props.statedata.file}
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
};

export default UserForm;

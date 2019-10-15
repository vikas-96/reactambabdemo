import React, { useState, useEffect } from "react";
import { Form, FormGroup, Input, Label, Row, Col } from "reactstrap";
import Select from "react-select";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// import { parse } from "date-fns";

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

const options = [
  { value: "ssc", label: "Ssc" },
  { value: "hsc", label: "Hsc" },
  { value: "ty", label: "Ty" }
];

const UserForm = props => {
  const [city, setCity] = useState("");

  useEffect(() => {});

  return (
    <Form onSubmit={props.submithandler}>
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
                <Col md={2}>
                  <label>
                    {item.label}
                    <Input
                      type="checkbox"
                      key={index}
                      name={item.name}
                      value={item.value}
                      // checked={props.statedata.checkedItems.get(item.name)}
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
            <Label for="edu">Edu</Label>
            <Select
              name="edu"
              value={props.statedata.edu}
              onChange={props.SelectChange}
              options={options}
            />
          </FormGroup>
        </Col>
      </Row>
      <Row>
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
      </Row>
      <Col md={4}>
        <Input type="submit" />
      </Col>
    </Form>
  );
};

export default UserForm;

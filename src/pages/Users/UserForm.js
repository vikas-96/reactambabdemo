import React from "react";
import { Form, FormGroup, Input, Label, Row, Col } from "reactstrap";
import Select from 'react-select';

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
  { value: 'ssc', label: 'Ssc' },
  { value: 'hsc', label: 'Hsc' },
  { value: 'ty', label: 'Ty' },
];

const UserForm=(props)=>{
	return(
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
              <Input
                type="radio"
                name="gender"
                value="male"
                checked={props.statedata.gender === "male"}
                onChange={props.changefunct}
              />
              Male
              <Input
                type="radio"
                name="gender"
                value="female"
                checked={props.statedata.gender === "female"}
                onChange={props.changefunct}
              />
              Female
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label for="hob">Hob</Label>
              <br />
              {checkboxes.map(item => (
                <label>
                  {item.label}
                  <Input
                    type="checkbox"
                    name={item.name}
                    value={item.value}
                    // checked={props.statedata.checkedItems.get(item.name)}
                    onChange={props.changefunct}
                  />
                </label>
              ))}
            </FormGroup>
          </Col>
          <Col md={4}>
          <FormGroup>
              <Label for="edu">Edu</Label>
              <Select
                name="edu"
                value={props.statedata.edu}
                onChange={props.SelectChange  }
                options={options}
              />
          </FormGroup>
          </Col>
        </Row>
        <Input type="submit" />
      </Form>
    );
}

export default UserForm;

import React from "react";
import { Form, FormGroup, Input, Label, Row, Col, Button } from "reactstrap";
import { withFormik } from "formik";
import * as yup from "yup";

const BorrowerFrom = props => {
  return (
    <Form>
      <Row>
        <Col md={4}>
          <FormGroup>
            <Label for="first_name">First Name</Label>
            <Input
              type="text"
              name="first_name"
              id="first_name"
              placeholder="First Name"
              // defaultValue={this.props && this.props.first_name}
              onChange={props.handleChange}
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
              // defaultValue={this.props && this.props.last_name}
              onChange={props.handleChange}
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
              // defaultValue={this.props && this.props.email}
              onChange={props.handleChange}
            />
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

export default withFormik({
  mapPropsToValues: props => ({
    first_name: props.first_name,
    last_name: props.last_name,
    email: props.email
  })
  // validationSchema: props => userSchema(props),
  // handleSubmit: onSubmit
})(BorrowerFrom);

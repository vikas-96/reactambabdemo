import React from "react";
import {
  Form,
  FormGroup,
  Input,
  Label,
  Row,
  Col,
  Button,
  FormFeedback
} from "reactstrap";
import { withFormik } from "formik";
import * as yup from "yup";

const onSubmit = async (values, { props, setSubmitting }) => {
  setSubmitting(true);
  // console.log(values);
  try {
    const res = await props.submithandler(values);
    if (res) {
      props.setTimeoutFn(1000, res.data.message, "");
    }
    setSubmitting(false);
  } catch (error) {
    // if (error.response && error.response.status === 422) {
    //   let errorData = getValidationErrors(error);
    //   setErrors(errorData);
    //   setSubmitting(false);
    //   props.setTimeoutFn(1000, error.response.data.message, "error", false);
    // } else if (axios.isCancel(error)) {
    //   console.log("Request canceled");
    // } else {
    //   setSubmitting(false);
    //   props.setTimeoutFn(1000, error.message, "error", false);
    // }
  }
};

const validationBorrowers = yup.object().shape({
  first_name: yup
    .string()
    .trim()
    .required("First Name is a required field."),
  last_name: yup
    .string()
    .trim()
    .required("Last Name is a required field."),
  email: yup
    .string()
    .trim()
    .email("Email must be a valid email.")
    .required("Email is a required field.")
});

const BorrowerFrom = props => {
  console.log(props);
  const {
    handleSubmit,
    errors,
    touched,
    handleBlur,
    isSubmitting,
    dirty
  } = props;
  return (
    <Form onSubmit={handleSubmit}>
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
              invalid={!!(touched.first_name && errors.first_name)}
              valid={!!(touched.first_name && !errors.first_name)}
              onBlur={handleBlur}
            />
            <FormFeedback>{errors.first_name}</FormFeedback>
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
              invalid={!!(touched.last_name && errors.last_name)}
              valid={!!(touched.last_name && !errors.last_name)}
              onBlur={handleBlur}
            />
            <FormFeedback>{errors.last_name}</FormFeedback>
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
              invalid={!!(touched.email && errors.email)}
              valid={!!(touched.email && !errors.email)}
              onBlur={handleBlur}
            />
            <FormFeedback>{errors.email}</FormFeedback>
          </FormGroup>
        </Col>
      </Row>
      <Col md={4}>
        <Button type="submit" outline color="success">
          {isSubmitting === true ? "Please Wait..." : "Submit"}
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
  }),
  validationSchema: validationBorrowers,
  handleSubmit: onSubmit
})(BorrowerFrom);

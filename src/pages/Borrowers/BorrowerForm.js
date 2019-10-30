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
import DatePicker from "react-datepicker";
import { format, parse, setMinutes, setHours } from "date-fns";

// const onSubmit = async (values, { props, setSubmitting, setErrors }) => {
//   try {
//     const res = await props.submithandler(values);
//     if (res) {
//       props.setTimeoutFn(1000, res.data.message, "");
//     }
//     setSubmitting(false);
//   } catch (error) {
//     if (error.response && error.response.status === 422) {
//       let errorData = getValidationErrors(error);
//       setErrors(errorData);
//       setSubmitting(false);
//       props.setTimeoutFn(1000, error.response.data.message, "error", false);
//     } else {
//       setSubmitting(false);
//       props.setTimeoutFn(1000, error.message, "error", false);
//     }
//   }
// };

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

const onSubmit = async (
  values,
  { props, setSubmitting, setErrors, setStatus }
) => {
  try {
    setSubmitting(true);
    const res = await props.submithandler(values);
    if (res.isValidationError) {
      setSubmitting(false);
    }
    setSubmitting(false);
  } catch (error) {
    setSubmitting(false);
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
  const {
    handleSubmit,
    errors,
    touched,
    handleBlur,
    isSubmitting,
    dirty,
    validationErrors,
    values,
    setFieldValue
  } = props;

  const _handledate = (name, date) => {
    const formatedDate = date ? format(date, "yyyy-MM-dd") : "";
    props.setFieldValue(name, formatedDate);
  };

  const _handlechange = (selectedItem, nameOfComponent) => {
    setFieldValue(nameOfComponent.name, selectedItem.value);
  };

  console.log(values);
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
              invalid={
                Boolean(touched.first_name && errors.first_name) ||
                validationErrors.first_name
              }
              valid={!!(touched.first_name && !errors.first_name)}
              onBlur={handleBlur}
            />
            <FormFeedback>
              {errors.first_name || validationErrors.first_name}
            </FormFeedback>
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
              invalid={
                Boolean(touched.last_name && errors.last_name) ||
                validationErrors.last_name
              }
              valid={!!(touched.last_name && !errors.last_name)}
              onBlur={handleBlur}
            />
            <FormFeedback>
              {errors.last_name || validationErrors.last_name}
            </FormFeedback>
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
              invalid={
                Boolean(touched.email && errors.email) || validationErrors.email
              }
              valid={!!(touched.email && !errors.email)}
              onBlur={handleBlur}
            />
            <FormFeedback>
              {errors.email || validationErrors.email}
            </FormFeedback>
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
                  onChange={() => setFieldValue("gender", "male")}
                  selected={values.gender === "male"}
                />
                Male
              </Col>
              <Col md={2}>
                <Input
                  type="radio"
                  name="gender"
                  value="female"
                  onChange={() => setFieldValue("gender", "female")}
                  selected={values.gender === "female"}
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
                    />
                  </label>
                </Col>
              ))}
            </Row>
          </FormGroup>
        </Col>
        <Col md={4}>
          <FormGroup>
            <Label for="npa_date">NPA Date</Label>
            <DatePicker
              name="npa_date"
              dateFormat="yyyy-MM-dd"
              placeholderText="Select NPA date ..."
              onChange={_handledate.bind(this, "npa_date")}
              selected={
                props.values.npa_date ? Date.parse(props.values.npa_date) : ""
              }
            />
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
    email: props.email,
    npa_date: props.npa_date,
    gender: props.gender
  }),
  validationSchema: validationBorrowers,
  handleSubmit: onSubmit
})(BorrowerFrom);

import React from "react";
import {
  Form,
  FormGroup,
  Input,
  Label,
  Row,
  Col,
  Button,
  FormFeedback,
  Media
} from "reactstrap";
import { withFormik } from "formik";
import * as yup from "yup";
import DatePicker from "react-datepicker";
import { format } from "date-fns";
import _ from "lodash";
import { uploadFile } from "../../request/users";

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
    .required("Email is a required field."),
  gender: yup
    .string()
    .trim()
    .required("Gender is a required field."),
  hob: yup
    .string()
    .trim()
    .required("Hob is a required field."),
  npa_date: yup
    .string()
    .trim()
    .required("NPA Date is a required field."),
  file: yup.mixed().required("A file is required")
});

const BorrowerFrom = props => {
  const {
    handleSubmit,
    errors,
    touched,
    handleBlur,
    isSubmitting,
    validationErrors,
    values,
    setFieldValue
  } = props;

  const _handledate = (name, date) => {
    const formatedDate = date ? format(date, "yyyy-MM-dd") : "";
    props.setFieldValue(name, formatedDate);
  };

  const _handlecheckbox = e => {
    const checkeds = document.getElementsByName(e.target.name);
    let checkedArr = [];
    for (let i = 0; i < checkeds.length; i++) {
      if (checkeds[i].checked) {
        checkedArr.push(checkeds[i].value);
      }
    }
    setFieldValue([e.target.name], checkedArr);
  };

  const handleFile = e => {
    let name = e.target.name;
    let File = new FormData();
    File.append("files", e.target.files[0]);
    uploadFile(File).then(response => {
      setFieldValue([name], response.image);
    });
  };

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
              defaultValue={values.first_name}
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
              defaultValue={values.last_name}
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
              defaultValue={values.email}
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
                  invalid={
                    Boolean(touched.gender && errors.gender) ||
                    validationErrors.gender
                  }
                  valid={!!(touched.gender && !errors.gender)}
                  onBlur={handleBlur}
                />
                Female
              </Col>
            </Row>
            {!_.isEmpty([errors.gender, validationErrors.gender]) &&
              touched.gender && (
                <FormFeedback style={{ display: "block" }}>
                  {errors.gender || validationErrors.gender}
                </FormFeedback>
              )}
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
                      onChange={_handlecheckbox}
                      checked={
                        !_.isEmpty(values.hob)
                          ? values.hob.indexOf(item.value) > -1
                            ? true
                            : false
                          : ""
                      }
                      invalid={
                        Boolean(touched.hob && errors.hob) ||
                        validationErrors.hob
                      }
                      valid={!!(touched.hob && !errors.hob)}
                      onBlur={handleBlur}
                    />
                  </label>
                </Col>
              ))}
              {!_.isEmpty([errors.hob, validationErrors.hob]) &&
                touched.hob && (
                  <FormFeedback style={{ display: "block" }}>
                    {errors.hob || validationErrors.hob}
                  </FormFeedback>
                )}
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
              selected={values.npa_date ? Date.parse(values.npa_date) : ""}
              invalid={
                Boolean(touched.npa_date && errors.npa_date) ||
                validationErrors.npa_date
              }
              valid={!!(touched.npa_date && !errors.npa_date)}
              onBlur={handleBlur}
            />
            {!_.isEmpty([errors.npa_date, validationErrors.npa_date]) &&
              touched.npa_date && (
                <FormFeedback style={{ display: "block" }}>
                  {errors.npa_date || validationErrors.npa_date}
                </FormFeedback>
              )}
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col md={4}>
          <FormGroup>
            <Label for="npa_date">NPA Date</Label>
            <Input
              type="file"
              name="file"
              onChange={handleFile}
              invalid={
                Boolean(touched.file && errors.file) || validationErrors.file
              }
              valid={!!(touched.file && !errors.file)}
              onBlur={handleBlur}
            />
            {!_.isEmpty([errors.file, validationErrors.file]) &&
              touched.file && (
                <FormFeedback style={{ display: "block" }}>
                  {errors.file || validationErrors.file}
                </FormFeedback>
              )}
            <FormFeedback>{errors.file || validationErrors.file}</FormFeedback>
            {!_.isEmpty(values.file) && (
              <Media
                object
                src={process.env.REACT_APP_API_URL + "/" + values.file}
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
          {isSubmitting === true ? "Please Wait..." : "Submit"}
        </Button>
      </Col>
    </Form>
  );
};

export default withFormik({
  enableReinitialize: true,
  mapPropsToValues: props => ({
    first_name: props.first_name,
    last_name: props.last_name,
    email: props.email,
    gender: props.gender,
    hob: props.hob ? props.hob : [],
    npa_date: props.npa_date,
    file: props.file
  }),
  validationSchema: validationBorrowers,
  handleSubmit: onSubmit
})(BorrowerFrom);

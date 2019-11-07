import React, { Component } from "react";
import initAxios from "../../utils/initAxios";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormFeedback
} from "reactstrap";
import { Formik } from "formik";
import { login } from "../../request/auth";
import notify from "../../utils/notify";
import getErrorMessage from "../../utils/getErrorMessage";
import { connect } from "react-redux";
import * as types from "../../store/auth/actionTypes";

// const initialValues = {
//   username: "",
//   password: "",
//   serverError: ""
// };

class Login extends Component {
  onSubmit = async (values, { setSubmitting, setErrors, setStatus }) => {
    try {
      setSubmitting(true);
      // console.log(values);
      try {
        this.props.dispatch(types.loginBegin());
        const user = await login({
          username: values.username,
          password: values.password
        });
        localStorage.setItem("userDetails", JSON.stringify(user));

        this.props.dispatch(types.loginSuccess());

        initAxios();
        this.props.history.replace("/users");
        setSubmitting(false);
      } catch (error) {
        this.props.dispatch(types.loginFailure());
        if (error.response.status === 401) {
          notify({
            type: "error",
            text: getErrorMessage(error.response.data)
          });
        }
      }
    } catch (error) {
      setSubmitting(false);
      setErrors({ serverError: "Invalid username or password" });
    }
  };

  render() {
    return (
      <div className="card card-login mx-auto mt-5">
        <div className="card-header text-center">
          <img src="/images/logo.png" alt="demo-logo" width="70px" />{" "}
        </div>
        <div className="card-body">
          <Formik
            // initialValues={initialValues}
            // validationSchema={loginSchema}
            onSubmit={this.onSubmit}
            render={({
              touched,
              errors,
              values,
              handleChange,
              handleBlur,
              handleSubmit,
              isValid,
              isSubmitting
            }) => (
              <Form onSubmit={handleSubmit}>
                <FormGroup>
                  <div className="form-label-group">
                    <Input
                      // innerRef={username => (this.username = username)}
                      name="username"
                      type="text"
                      id="username"
                      placeholder="Username"
                      //autoFocus
                      onChange={handleChange}
                      // onBlur={handleBlur}
                      // invalid={Boolean(
                      //   (touched.inputUsername && errors.inputUsername) ||
                      //     errors.serverError
                      // )}
                      // valid={touched.inputUsername && !errors.inputUsername}
                      autoComplete="off"
                      // disabled={isSubmitting}
                    />
                    <Label for="inputUsername">Username</Label>
                    {/* <FormFeedback>{errors.inputUsername}</FormFeedback> */}
                  </div>
                </FormGroup>
                <FormGroup>
                  <div className="form-label-group">
                    <Input
                      // innerRef={password => (this.password = password)}
                      name="password"
                      type="password"
                      id="password"
                      onChange={handleChange}
                      // onBlur={handleBlur}
                      autoComplete="off"
                      placeholder="Password"
                      // invalid={Boolean(
                      //   (touched.inputPassword && errors.inputPassword) ||
                      //     errors.serverError
                      // )}
                      // valid={touched.inputPassword && !errors.inputPassword}
                      // disabled={isSubmitting}
                    />
                    <Label for="inputPassword">Password</Label>

                    <FormFeedback>
                      {/* {errors.inputPassword || errors.serverError} */}
                    </FormFeedback>
                  </div>
                </FormGroup>
                <Button
                  disabled={isSubmitting || !isValid}
                  size="sm"
                  type="submit"
                  color="primary"
                  block
                >
                  {isSubmitting ? "Please Wait..." : "Login"}
                </Button>
              </Form>
            )}
          />
          <div className="text-center mt-3">
            {/* <Link to="/auth/forgot" className="d-block small">
              Forgot Password?
            </Link> */}
          </div>
        </div>
      </div>
    );
  }
}

export default connect()(Login);

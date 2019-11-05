import React, { Component } from "react";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormFeedback
} from "reactstrap";

ReactComponent;
class Login extends Component {
  render() {
    return (
      <div className="card card-login mx-auto mt-5">
        <div className="card-header text-center">
          <img src="/images/logo.png" alt="m2all-logo" />{" "}
        </div>
        <div className="card-body">
          <Formik
            initialValues={initialValues}
            validationSchema={loginSchema}
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
                      innerRef={username => (this.username = username)}
                      type="text"
                      id="inputUsername"
                      placeholder="Username"
                      //autoFocus
                      onChange={handleChange}
                      onBlur={handleBlur}
                      invalid={Boolean(
                        (touched.inputUsername && errors.inputUsername) ||
                          errors.serverError
                      )}
                      valid={touched.inputUsername && !errors.inputUsername}
                      autoComplete="off"
                      disabled={isSubmitting}
                    />
                    <Label for="inputUsername">Username</Label>
                    <FormFeedback>{errors.inputUsername}</FormFeedback>
                  </div>
                </FormGroup>
                <FormGroup>
                  <div className="form-label-group">
                    <Input
                      innerRef={password => (this.password = password)}
                      type="password"
                      id="inputPassword"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      autoComplete="off"
                      placeholder="Password"
                      invalid={Boolean(
                        (touched.inputPassword && errors.inputPassword) ||
                          errors.serverError
                      )}
                      valid={touched.inputPassword && !errors.inputPassword}
                      disabled={isSubmitting}
                    />
                    <Label for="inputPassword">Password</Label>

                    <FormFeedback>
                      {errors.inputPassword || errors.serverError}
                    </FormFeedback>
                  </div>
                </FormGroup>
                <Button
                  disabled={isSubmitting || !isValid}
                  size="lg"
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
            <Link to="/auth/forgot" className="d-block small">
              Forgot Password?
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;

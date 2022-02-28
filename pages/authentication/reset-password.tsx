import type { NextPage } from "next";
import React, { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { authPageRequireCheck } from "middlewares/ssr-authentication-check";

const ResetPassword: NextPage = () => {
  type resetType = {
    email: string;
    password: string;
    password_confirmation: string;
  };

  return (
    <div
      className="user-content-wrapper"
      style={{
        backgroundImage: `url(/user-content-wrapper-bg.jpg)`,
      }}
    >
      <div className="user-content-inner-wrap">
        <div className="row align-items-center">
          <div className="col-md-6">
            <div className="user-form">
              <div className="user-form-inner">
                <div className="form-top">
                  <h2>Forgot Password ?</h2>
                  <p>
                    Please enter the email address to request a password reset.
                  </p>
                </div>
                <Formik
                  initialValues={{
                    email: "",
                    password: "",
                    password_confirmation: "",
                    token: "",
                  }}
                  validationSchema={Yup.object({
                    email: Yup.string()
                      .email("Invalid email address")
                      .required("Email is required"),
                    password: Yup.string()
                      .min(6, "Password must be at least 6 characters")
                      .required("Password is required"),
                    password_confirmation: Yup.string()
                      .oneOf(
                        [Yup.ref("password"), null],
                        "Passwords must match"
                      )
                      .required("Password confirmation is required"),
                  })}
                  onSubmit={async (values) => {}}
                >
                  {({ errors, touched }) => (
                    <Form>
                      <div className="form-group">
                        <Field
                          type="email"
                          name="email"
                          id="email"
                          className="form-control"
                          placeholder="Your email here"
                        />
                      </div>
                      <ErrorMessage
                        name="email"
                        component="div"
                        className="red-text"
                      />
                      <div className="form-group">
                        <Field
                          type="password"
                          name="password"
                          className="form-control"
                          placeholder="Type your password"
                        />
                      </div>
                      <ErrorMessage
                        name="password"
                        component="div"
                        className="red-text"
                      />
                      <div className="form-group">
                        <Field
                          type="password"
                          name="password"
                          className="form-control"
                          placeholder="Type your confirm password"
                        />
                      </div>
                      <ErrorMessage
                        name="password_confirmation"
                        component="div"
                        className="red-text"
                      />
                      <div className="form-group">
                        <Field
                          type="password"
                          name="password_confirmation"
                          className="form-control"
                          placeholder="Enter your code"
                        />
                      </div>

                      <ErrorMessage
                        name="password_confirmation"
                        component="div"
                        className="red-text"
                      />
                      <button
                        type="submit"
                        className="btn nimmu-user-sibmit-button"
                      >
                        Submit
                      </button>
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="user-content-text text-center">
              <h3>Welcome Back To</h3>
              <a className="auth-logo" href="javascript:;">
                <img src="/logo.svg" className="img-fluid" alt="" />
              </a>
              <p>
                Return to sign in <a href="{{route('login">Sign in</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
ResetPassword.getInitialProps = async (ctx) => {
  await authPageRequireCheck(ctx);
  return {};
};
export default ResetPassword;

import React from 'react';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as yup from 'yup';
import './Login.scss';

const validationSchema = yup.object({
  username: yup.string().required('Username is required'),
  password: yup.string().min(8, 'Password should be of minimum 8 characters length').required('Password is required'),
});

const initialValues = {
  username: '',
  password: '',
};

const handleSubmit = () => {
  console.log('LOGIN SUBMIT');
};

const Login: React.FC = () => {
  return (
    <div className="login">
      <div className="container">
        <h1 className="slogan">
          <span>Protect</span> Our Water, <span>Sustain</span> Our Future, <span>Every Drop Matters!</span>
        </h1>
        <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={validationSchema}>
          {(formik) => (
            <Form className="" onSubmit={formik.handleSubmit}>
              <h1 className="login__title">LOGIN TO YOUR ACCOUNT</h1>
              <div className="login__group">
                <label htmlFor="username" className="">
                  Username
                </label>
                <Field
                  id="username"
                  name="username"
                  type="text"
                  placeholder="username"
                  className={`${formik.errors.username && formik.touched.username ? 'border-error' : ''}`}
                />
                <ErrorMessage name="username" component="span" className="error-msg" />
              </div>
              <div className="login__group">
                <label htmlFor="password" className="">
                  Password
                </label>
                <Field
                  id="password"
                  name="password"
                  type="password"
                  placeholder="password"
                  className={`${formik.errors.password && formik.touched.password ? 'border-error' : ''}`}
                />
                <ErrorMessage name="password" component="span" className="error-msg" />
              </div>
              <p className="login__forgot">Forgot password?</p>
              <button type="submit" className="login__btn">
                LOGIN
              </button>
              <div className="login__cta">
                Don't have an account? <span className="login__signup">Sign up</span>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Login;

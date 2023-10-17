import React from 'react';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as yup from 'yup';
import './Forgotpassword.scss';
import { Link } from 'react-router-dom';

const validationSchema = yup.object({
  email: yup.string().email('Invalid Email').required('Email is required').trim(),
});

const initialValues = {
  email: '',
};

const handleSubmit = () => {
  console.log('FORGOT PASSWORD SUBMIT');
};

const ForgotPassword: React.FC = () => {
  return (
    <div className="forgotpassword">
      <div className="container">
        <h1 className="slogan">
          <span>Protect</span> Our Water, <span>Sustain</span> Our Future, <span>Every Drop Matters!</span>
        </h1>
        <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={validationSchema}>
          {(formik) => (
            <Form className="" onSubmit={formik.handleSubmit}>
              <h1 className="forgotpassword__title">FORGOT PASSWORD</h1>
              <div className="forgotpassword__msg">Check your mail for further instructions</div>
              <div className="forgotpassword__group">
                <label htmlFor="email" className="">
                  Email
                </label>
                <Field
                  id="email"
                  name="email"
                  type="text"
                  placeholder="Email"
                  className={`${formik.errors.email && formik.touched.email ? 'border-error' : ''}`}
                />
                <ErrorMessage name="email" component="span" className="error-msg" />
              </div>
              <button type="submit" className="forgotpassword__btn">
                RESET PASSWORD
              </button>
              <div className="forgotpassword__cta">
                <p>
                  Already have an account? <Link to={'/login'}>Login</Link>
                </p>
                <p>
                  Don't have an account? <Link to={'/signup'}>Sign up</Link>
                </p>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default ForgotPassword;

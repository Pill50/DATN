import React from 'react';
import { Link } from 'react-router-dom';
import './Signup.scss';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { registerValidationSchema } from '@/validations/auth';
import { SignUpType } from '@/types/auth';

const initialValues: SignUpType = {
  email: '',
  password: '',
  confirmPassword: '',
};

const handleSubmit = () => {
  console.log('REGISTER SUBMIT');
};

const Signup: React.FC = () => {
  return (
    <div className="signup">
      <div className="container">
        <h1 className="slogan">
          <span>Protect</span> Our Water, <span>Sustain</span> Our Future, <span>Every Drop Matters!</span>
        </h1>
        <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={registerValidationSchema}>
          {(formik) => (
            <Form className="" onSubmit={formik.handleSubmit}>
              <h1 className="signup__title">SIGN UP YOUR NEW ACCOUNT</h1>
              {/* EMAIL */}
              <div className="signup__group">
                <label htmlFor="email" className="">
                  Email
                </label>
                <Field
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Email"
                  className={`${formik.errors.email && formik.touched.email ? 'border-error' : ''}`}
                />
                <ErrorMessage name="email" component="span" className="error-msg" />
              </div>
              {/* PASSWORD */}
              <div className="signup__group">
                <label htmlFor="password" className="">
                  Password
                </label>
                <Field
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Password"
                  className={`${formik.errors.password && formik.touched.password ? 'border-error' : ''}`}
                />
                <ErrorMessage name="password" component="span" className="error-msg" />
              </div>
              {/* CONFIRM PASSWORD */}
              <div className="signup__group">
                <label htmlFor="confirmPassword" className="">
                  Confirm Password
                </label>
                <Field
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  placeholder="Confirm Password"
                  className={`${formik.errors.confirmPassword && formik.touched.confirmPassword ? 'border-error' : ''}`}
                />
                <ErrorMessage name="confirmPassword" component="span" className="error-msg" />
              </div>
              <button type="submit" className="signup__btn">
                SIGN UP
              </button>
              <div className="signup__cta">
                Already have an account? <Link to="/login">Login</Link>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Signup;

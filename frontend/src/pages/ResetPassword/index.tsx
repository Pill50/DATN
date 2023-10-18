import React from 'react';
import './ResetPassword.scss';
import { resetPasswordValidationSchema } from '@/validations/auth';
import { ErrorMessage, Field, Form, Formik } from 'formik';

const initialValues = {
  password: '',
  confirmPassword: '',
};

const handleSubmit = () => {
  console.log('RESET PASSWORD SUBMIT');
};

const ResetPassword: React.FC = () => {
  return (
    <div className="resetpassword">
      <div className="container">
        <h1 className="slogan">
          <span>Protect</span> Our Water, <span>Sustain</span> Our Future, <span>Every Drop Matters!</span>
        </h1>
        <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={resetPasswordValidationSchema}>
          {(formik) => (
            <Form className="" onSubmit={formik.handleSubmit}>
              <h1 className="resetpassword__title">RESET PASSWORD</h1>
              <div className="resetpassword__group">
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
              <div className="resetpassword__group">
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
              <button type="submit" className="resetpassword__btn">
                SUBMIT
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default ResetPassword;

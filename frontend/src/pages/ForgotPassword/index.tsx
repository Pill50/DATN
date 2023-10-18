import React from 'react';
import { forgotPasswordValidationSchema } from '@/validations/auth';
import './Forgotpassword.scss';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { Link } from 'react-router-dom';
import { ForgotPasswordType } from '@/types/auth';
import Button from '@/components/Button';

const initialValues: ForgotPasswordType = {
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
        <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={forgotPasswordValidationSchema}>
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
              <Button type="submit" primary>
                SUBMIT
              </Button>
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

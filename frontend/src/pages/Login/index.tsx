import React from 'react';
import { Link } from 'react-router-dom';
import './Login.scss';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { loginValidationSchema } from '@/validations/auth';
import { LoginType } from '@/types/auth';
import Button from '@/components/Button';

const initialValues: LoginType = {
  email: '',
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
        <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={loginValidationSchema}>
          {(formik) => (
            <Form className="" onSubmit={formik.handleSubmit}>
              <h1 className="login__title">LOGIN TO YOUR ACCOUNT</h1>
              <div className="login__group">
                <label htmlFor="email" className="">
                  Email
                </label>
                <Field
                  id="email"
                  name="email"
                  type="text"
                  placeholder="Enter your email"
                  className={`${formik.errors.email && formik.touched.email ? 'border-error' : ''}`}
                />
                <ErrorMessage name="email" component="span" className="error-msg" />
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
              <Link to="/forgot-password" className="login__forgot">
                Forgot password?
              </Link>
              <Button type="submit" primary>
                LOGIN
              </Button>
              <div className="login__cta">
                Don't have an account? <Link to={'/register'}>Sign up</Link>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Login;

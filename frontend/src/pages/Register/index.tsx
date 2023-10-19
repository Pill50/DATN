import React from 'react';
import { Link } from 'react-router-dom';
import './Register.scss';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { registerValidationSchema } from '@/validations/auth';
import { RegisterType } from '@/types/auth';
import Button from '@/components/Button';
import { useAppDispatch } from '@/hooks/hooks';
import { authActions } from '@/redux/slices';

const initialValues: RegisterType = {
  email: '',
  password: '',
  confirmPassword: '',
};

const Register: React.FC = () => {
  const dispatch = useAppDispatch();

  const handleSubmit = async (values: RegisterType) => {
    //@ts-ignore
    dispatch(authActions.register(values)).then((response) => {
      console.log(response);
    });
  };

  return (
    <div className="register">
      <div className="container">
        <h1 className="slogan">
          <span>Protect</span> Our Water, <span>Sustain</span> Our Future, <span>Every Drop Matters!</span>
        </h1>
        <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={registerValidationSchema}>
          {(formik) => (
            <Form className="" onSubmit={formik.handleSubmit}>
              <h1 className="register__title">SIGN UP YOUR NEW ACCOUNT</h1>
              {/* EMAIL */}
              <div className="register__group">
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
              <div className="register__group">
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
              <div className="register__group">
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
              <Button type="submit" primary>
                SIGN UP
              </Button>
              <div className="register__cta">
                Already have an account? <Link to="/login">Login</Link>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Register;

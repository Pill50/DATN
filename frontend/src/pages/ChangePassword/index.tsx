import React from 'react';
import { Link } from 'react-router-dom';
import './Changepassword.scss';
import { ErrorMessage, Field, Formik, Form } from 'formik';
import { changePasswordValidationSchema } from '@/validations/auth';
import Sidebar from '@/components/Sidebar/Sidebar';
import { ChangePasswordType } from '@/types/auth';
import Button from '@/components/Button';

const initialValues: ChangePasswordType = {
  currentPassword: '',
  newPassword: '',
  confirmPassword: '',
};

const handleChangePassword = () => {
  console.log('SUBMIT CHANGE PASSWORD');
};

const ChangePassword: React.FC = () => {
  return (
    <div className="changePassword">
      <Sidebar />
      <div className="content">
        <h1 className="title">CHANGE PASSWORD</h1>
        <Formik
          initialValues={initialValues}
          onSubmit={handleChangePassword}
          validationSchema={changePasswordValidationSchema}
        >
          {(formik) => (
            <Form className="" onSubmit={formik.handleSubmit}>
              <div className="changePassword__info">
                <div className="changePassword__group">
                  <label htmlFor="currentPassword" className="">
                    Current Password
                  </label>
                  <Field
                    id="currentPassword"
                    name="currentPassword"
                    type="password"
                    placeholder="Current Password"
                    className={`${
                      formik.errors.currentPassword && formik.touched.currentPassword ? 'border-error' : ''
                    }`}
                  />
                  <ErrorMessage name="currentPassword" component="span" className="error-msg" />
                </div>
                <div className="changePassword__group">
                  <label htmlFor="newPassword" className="">
                    New Password
                  </label>
                  <Field
                    id="newPassword"
                    name="newPassword"
                    type="password"
                    placeholder="New Password"
                    className={`${formik.errors.newPassword && formik.touched.newPassword ? 'border-error' : ''}`}
                  />
                  <ErrorMessage name="newPassword" component="span" className="error-msg" />
                </div>
                <div className="changePassword__group">
                  <label htmlFor="confirmPassword" className="">
                    Confirm Password
                  </label>
                  <Field
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    placeholder="Confirm Password"
                    className={`${
                      formik.errors.confirmPassword && formik.touched.confirmPassword ? 'border-error' : ''
                    }`}
                  />
                  <ErrorMessage name="confirmPassword" component="span" className="error-msg" />
                </div>
              </div>
              <div className="changePassword__action">
                <Button to={'/profile'} outline>
                  CANCEL
                </Button>
                <Button type="submit" primary>
                  CREATE
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default ChangePassword;

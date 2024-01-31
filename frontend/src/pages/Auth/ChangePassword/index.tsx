import React from 'react';
import { Link } from 'react-router-dom';
import { ErrorMessage, Field, Formik, Form } from 'formik';
import { changePasswordValidationSchema } from '@/validations/auth';

const initialValues = {
  currentPassword: '',
  newPassword: '',
  confirmPassword: '',
};

const handleSubmit = () => {
  console.log('SUBMIT CHANGE PASSWORD');
};

const ChangePassword: React.FC = () => {
  return (
    <>
      <div className="px-3 mb-10 flex flex-col justify-center items-center">
        <h1 className="mt-10 max-w-[700px] text-center text-[40px] font-bold">
          <span className="text-[#DB4437]">Protect</span> Our Water, <span className="text-[#DB4437]">Sustain</span> Our
          Future, <span className="text-[#DB4437]">Every Drop Matters!</span>
        </h1>
        <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={changePasswordValidationSchema}>
          {(formik) => (
            <Form className="flex flex-col p-4 rounded-xl bg-[#F2F2F2] shadow-md" onSubmit={formik.handleSubmit}>
              <h1 className="text-center text-[#4285F4] font-bold text-xl">CHANGE PASSWORD</h1>
              <div className="changePassword__info">
                <div className="flex flex-col my-2">
                  <label htmlFor="currentPassword" className="mb-1">
                    Current Password
                  </label>
                  <Field
                    id="currentPassword"
                    name="currentPassword"
                    type="password"
                    placeholder="Current Password"
                    className={`${
                      formik.errors.currentPassword && formik.touched.currentPassword ? 'border-[#DB4437]' : ''
                    }  w-[350px] h-14 p-4 rounded-lg border-[1px] border-[#E3E3E3]`}
                  />
                  <ErrorMessage name="currentPassword" component="span" className="text-[#DB4437]" />
                </div>
                <div className="flex flex-col my-2">
                  <label htmlFor="newPassword" className="mb-1">
                    New Password
                  </label>
                  <Field
                    id="newPassword"
                    name="newPassword"
                    type="password"
                    placeholder="New Password"
                    className={`${
                      formik.errors.newPassword && formik.touched.newPassword ? 'border-[#DB4437]' : ''
                    }  w-[350px] h-14 p-4 rounded-lg border-[1px] border-[#E3E3E3]`}
                  />
                  <ErrorMessage name="newPassword" component="span" className="text-[#DB4437]" />
                </div>
                <div className="flex flex-col my-2">
                  <label htmlFor="confirmPassword" className="mb-1">
                    Confirm Password
                  </label>
                  <Field
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    placeholder="Confirm Password"
                    className={`${
                      formik.errors.confirmPassword && formik.touched.confirmPassword ? 'border-[#DB4437]' : ''
                    }  w-[350px] h-14 p-4 rounded-lg border-[1px] border-[#E3E3E3]`}
                  />
                  <ErrorMessage name="confirmPassword" component="span" className="text-[#DB4437]" />
                </div>
              </div>
              <div className="flex gap-2 justify-end">
                <Link
                  to={'/profile'}
                  className="p-3 bg-[#E3E3E3] rounded-lg text-gray-700 cursor-pointer hover:opacity-80"
                >
                  CANCEL
                </Link>
                <button
                  className="p-3 bg-[#4285F4] rounded-lg text-white cursor-pointer hover:opacity-80"
                  type="submit"
                  onClick={handleSubmit}
                >
                  SAVE
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default ChangePassword;

import React from 'react';
import { resetPasswordValidationSchema } from '@/validations/auth';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useAppDispatch } from '@/hooks/hooks';
import { authActions } from '@/redux/slices';
import { useNavigate, useParams } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

const initialValues = {
  password: '',
  confirmPassword: '',
};

const ResetPassword: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { token } = useParams();

  const handleSubmit = async (values: any) => {
    const data = {
      token,
      password: values.password,
    };
    //@ts-ignore
    const response = await dispatch(authActions.resetPassword(data));
    if (response.payload.statusCode === 200) {
      toast.success('Reset password Successfully!');
      navigate('/login');
    } else {
      toast.error('Reset password Failed!');
    }
  };

  return (
    <>
      <Toaster />
      <div className="px-3 mb-10 flex flex-col justify-center items-center">
        <h1 className="mt-10 max-w-[700px] text-center text-[40px] font-bold">
          <span className="text-[#DB4437]">Protect</span> Our Water, <span className="text-[#DB4437]">Sustain</span> Our
          Future, <span className="text-[#DB4437]">Every Drop Matters!</span>
        </h1>
        <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={resetPasswordValidationSchema}>
          {(formik) => (
            <Form className="flex flex-col p-4 rounded-xl bg-[#F2F2F2] shadow-md" onSubmit={formik.handleSubmit}>
              <h1 className="text-center text-[#4285F4] font-bold text-xl">RESET PASSWORD</h1>
              <div className="flex flex-col my-2">
                <label htmlFor="password" className="mb-1">
                  Password
                </label>
                <Field
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Password"
                  className={`${
                    formik.errors.password && formik.touched.password ? 'border-[#DB4437]' : ''
                  } w-[350px] h-14 p-4 rounded-lg border-[1px] border-[#E3E3E3]`}
                />
                <ErrorMessage name="password" component="span" className="text-[#DB4437]" />
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
                  } w-[350px] h-14 p-4 rounded-lg border-[1px] border-[#E3E3E3]`}
                />
                <ErrorMessage name="confirmPassword" component="span" className="text-[#DB4437]" />
              </div>
              <button type="submit" className="h-14 bg-[#4285F4] rounded-lg text-white cursor-pointer hover:opacity-80">
                SUBMIT
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};
export default ResetPassword;

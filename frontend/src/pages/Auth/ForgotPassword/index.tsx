import React, { useState } from 'react';
import { forgotPasswordValidationSchema } from '@/validations/auth';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { Link } from 'react-router-dom';
import { useAppDispatch } from '@/hooks/hooks';
import { authActions } from '@/redux/slices';
import toast, { Toaster } from 'react-hot-toast';

const initialValues = {
  email: '',
};

const ForgotPassword: React.FC = () => {
  const [displayNoti, setDisplayNoti] = useState<Boolean>(false);
  const dispatch = useAppDispatch();

  const handleSubmit = async (values: any) => {
    const data = {
      email: values.email,
      url: `http://localhost:5173/reset-password/`,
    };
    // @ts-ignore
    const response = await dispatch(authActions.forgotPassword(data));
    if (response.payload.statusCode === 200) {
      toast.success('Check your email for more instructions');
      setDisplayNoti(true);
    } else {
      toast.error('Please check your email again!');
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
        <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={forgotPasswordValidationSchema}>
          {(formik) => (
            <Form className="flex flex-col p-4 rounded-xl bg-[#F2F2F2] shadow-md" onSubmit={formik.handleSubmit}>
              <h1 className="text-center text-[#4285F4] font-bold text-xl">FORGOT PASSWORD</h1>
              {displayNoti && (
                <div className="h-14 bg-green-300 flex justify-center items-center rounded-lg font-bold text-green-700 mt-1">
                  Check your mail for further instructions
                </div>
              )}
              <div className="flex flex-col my-2">
                <label htmlFor="email" className="mb-1">
                  Email
                </label>
                <Field
                  id="email"
                  name="email"
                  type="text"
                  placeholder="Email"
                  className={`${
                    formik.errors.email && formik.touched.email ? 'border-[#DB4437]' : ''
                  } w-[350px] h-14 p-4 rounded-lg border-[1px] border-[#E3E3E3]`}
                />
                <ErrorMessage name="email" component="span" className="text-[#DB4437]" />
              </div>
              <button type="submit" className="h-14 bg-[#4285F4] rounded-lg text-white cursor-pointer hover:opacity-80">
                RESET PASSWORD
              </button>
              <div className="mt-2 text-center">
                <p>
                  Already have an account?{' '}
                  <Link to={'/login'} className="text-[#4285F4] mb-4 cursor-pointer hover:opacity-80">
                    Login
                  </Link>
                </p>
                <p>
                  Don't have an account?{' '}
                  <Link to={'/signup'} className="text-[#4285F4] mb-4 cursor-pointer hover:opacity-80">
                    Sign up
                  </Link>
                </p>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};
export default ForgotPassword;

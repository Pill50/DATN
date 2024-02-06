import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { loginValidationSchema } from '@/validations/auth';
import { useAppDispatch, useAppSelector } from '@/hooks/hooks';
import { authActions } from '@/redux/slices';
import { LoginType } from '@/types/auth';
import toast, { Toaster } from 'react-hot-toast';
import Loading from '@/components/Loading';

const initialValues = {
  email: '',
  password: '',
};

const Login: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const isLoading: boolean = useAppSelector((state) => state.authSlice.isLoading);
  const role = useAppSelector((state) => state.authSlice.role);

  const handleSubmit = (values: LoginType) => {
    // @ts-ignore
    dispatch(authActions.login(values)).then((response) => {
      if (response.payload.statusCode === 200) {
        if (role === 'ADMIN') {
          navigate('/dashboard');
          toast.success('Login Successfully!');
        } else {
          toast.error('You must login with admin account');
        }
      } else {
        toast.error('Login Failed!');
      }
    });
  };

  return (
    <>
      {isLoading && <Loading />}
      <div className="px-3 mb-10 flex flex-col justify-center items-center">
        <Toaster />
        <h1 className="mt-10 max-w-[700px] text-center text-[40px] font-bold">
          <span className="text-[#DB4437]">Protect</span> Our Water, <span className="text-[#DB4437]">Sustain</span> Our
          Future, <span className="text-[#DB4437]">Every Drop Matters!</span>
        </h1>
        <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={loginValidationSchema}>
          {(formik) => (
            <Form className="flex flex-col p-4 rounded-xl bg-[#F2F2F2] shadow-md" onSubmit={formik.handleSubmit}>
              <h1 className="text-center text-[#4285F4] font-bold text-xl">LOGIN TO YOUR ACCOUNT</h1>
              <div className="flex flex-col my-2">
                <label htmlFor="email" className="mb-1">
                  Email
                </label>
                <Field
                  id="email"
                  name="email"
                  type="text"
                  placeholder="Enter your email"
                  className={`${
                    formik.errors.email && formik.touched.email ? 'border-[#DB4437]' : ''
                  } w-[350px] h-14 p-4 rounded-lg border-[1px] border-[#E3E3E3]`}
                />
                <ErrorMessage name="email" component="span" className="text-[#DB4437]" />
              </div>
              <div className="flex flex-col my-2">
                <label htmlFor="password" className="mb-1">
                  Password
                </label>
                <Field
                  id="password"
                  name="password"
                  type="password"
                  placeholder="password"
                  className={`${
                    formik.errors.password && formik.touched.password ? 'border-[#DB4437' : ''
                  } w-[350px] h-14 p-4 rounded-lg border-[1px] border-[#E3E3E3]`}
                />
                <ErrorMessage name="password" component="span" className="text-[#DB4437]" />
              </div>
              <Link to="/forgot-password" className="text-[#4285F4] mb-4 cursor-pointer hover:opacity-80">
                Forgot password?
              </Link>
              <button type="submit" className="h-14 bg-[#4285F4] rounded-lg text-white cursor-pointer hover:opacity-80">
                LOGIN
              </button>
              <div className="mt-2 text-center">
                Don't have an account?{' '}
                <Link to={'/register'} className="text-[#4285F4] mb-4 cursor-pointer hover:opacity-80">
                  Sign up
                </Link>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};
export default Login;

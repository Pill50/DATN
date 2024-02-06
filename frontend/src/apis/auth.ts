import { ForgotPasswordType, LoginType, RegisterType, ResetPasswordType } from '@/types/auth';
import { apiCaller } from '@/apiConfigs';

const register = async (values: RegisterType) => {
  const path = '/register';

  const data: RegisterType = {
    email: values.email,
    password: values.password,
    confirmPassword: values.confirmPassword,
  };

  const response = await apiCaller('POST', path, data);
  return response;
};

const login = async (values: LoginType) => {
  const path = '/auth/login';
  const response = await apiCaller('POST', path, values);
  return response;
};

const forgotPassword = async (values: ForgotPasswordType) => {
  const path = '/auth/forgot-password';
  const response = await apiCaller('POST', path, values);
  return response;
};

const resetPassword = async (values: ResetPasswordType) => {
  const path = '/auth/reset-password';
  const response = await apiCaller('POST', path, values);
  console.log('Response here:', response);
  return response;
};

const getMe = async () => {
  const path = 'auth/me';
  const response = await apiCaller('GET', path);
  return response;
};

export { register, login, forgotPassword, resetPassword, getMe };

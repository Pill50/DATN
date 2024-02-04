import { LoginType, RegisterType } from '@/types/auth';
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
  const path = '/api/login';
  const response = await apiCaller('POST', path, values);

  console.log('Response: ', response.status);
  return response;
};

const getMe = async () => {
  const path = 'auth/me';
  const response = await apiCaller('GET', path);
  return response;
};

export { register, login, getMe };

import { RegisterType } from '@/types/auth';
import { apiCaller } from '@/apiConfigs';

const register = async (values: RegisterType) => {
  const path = '/auth/register';

  const data: RegisterType = {
    email: values.email,
    password: values.password,
    confirmPassword: values.confirmPassword,
  };

  const response = await apiCaller('POST', path, data);
  return response;
};

const getMe = async () => {
  const path = 'auth/me';
  const response = await apiCaller('GET', path);
  return response;
};

export { register, getMe };

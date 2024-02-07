import axios from 'axios';
import Cookies from 'js-cookie';

const axiosPublic = axios.create({
  baseURL: 'http://localhost:8080',
});

axiosPublic.interceptors.request.use(
  async (config: any) => {
    const accessToken = Cookies.get('accessToken');
    if (accessToken) {
      config.headers = {
        ...config.headers,
        authorization: `Bearer ${accessToken}`,
      };
    }

    return config;
  },
  (error) => Promise.reject(error),
);

export const apiCaller = (method: string, path: string, data?: any) => {
  return axiosPublic({
    method,
    headers: {},
    url: `${path}`,
    data,
  });
};

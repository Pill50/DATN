import axios from 'axios';
import Cookies from 'js-cookie';

const axiosPublic = axios.create({
  baseURL: 'http://localhost:8080',
});

export const apiCaller = (method: string, path: string, data?: any) => {
  const refreshToken = Cookies.get('refreshToken');

  return axiosPublic({
    method,
    headers: {
      'Access-Control-Allow-Credentials': true,
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,POST,DELETE,PUT,OPTIONS',
      'Access-Control-Allow-Headers': '*',
      'Access-Control-Max-Age': '180',
      // rftoken: `rfToken=${refreshToken}`,
    },
    url: `${path}`,
    data,
  });
};

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

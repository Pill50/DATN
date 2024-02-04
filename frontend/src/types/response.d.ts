export type Response<T> = {
  accessToken?: string;
  statusCode: number;
  success?: boolean;
  message?: string;
  data?: any;
};

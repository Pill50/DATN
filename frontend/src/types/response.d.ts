export type Response<T> = {
  role: string;
  accessToken?: string;
  statusCode: number;
  success?: boolean;
  message?: string;
  data?: T;
};

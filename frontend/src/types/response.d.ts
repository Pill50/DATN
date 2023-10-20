export type Response<T> = {
  statusCode: number;
  success: boolean;
  message: string;
  data?: any;
};

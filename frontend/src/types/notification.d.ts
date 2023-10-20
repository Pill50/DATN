export type NotificationType = {
  id: number;
  device: {
    name: string;
    address: string;
  };
  time: string;
  message: string;
};

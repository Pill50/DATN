export type Device = {
  id: number;
  waterMeterId: string;
  address: string;
  longitude: number;
  latitude: number;
  installedAt: string;
  status: boolean;
  waterMeter: number;
  waterFlow: number;
  children: Device[];
};

export type CreateNewDeviceType = {
  address: string;
  addressOfStation: string;
};

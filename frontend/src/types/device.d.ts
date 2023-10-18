export type DeviceType = {
  id: number;
  address: string;
  waterMeter: number;
  waterFlow: number;
  installationAt: string;
  pinPercent: number;
};

export type CreateNewDeviceType = {
  address: string;
  addressOfStation: string;
};

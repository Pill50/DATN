export type StationType = {
  id: number;
  name: string;
  address: string;
  consumePerDay: number;
  devices: number;
  installationAt: string;
  threshold: number;
  status: number;
  thumbnail: any;
};

export type CreateNewStationType = {
  address: string;
  numOfDevices: number;
  totalWaterSupply: number;
};

export type EditStationType = {
  address: string;
  installationAt: string;
  threshold: number;
};

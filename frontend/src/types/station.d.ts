export type StationType = {
  id: number;
  address: string;
  totalWaterSupply: number;
  devices: number;
  installationAt: string;
  threshold: number;
  status: number;
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

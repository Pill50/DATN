export type Device = {
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

export type DeviceCardList = {
  totalWaterMeters: number;
  totalPulse: number;
  totalDigital: number;
  statusActive: number;
};

type AddLine = {
  childrenId: string;
  parentId: string;
};

type RemoveLine = {
  childrenId: string;
  parentId: string;
};

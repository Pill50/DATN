type Station = {
  id: number;
  address: string;
  total_water_supply: number;
  devices: number;
  installation_at: string;
};

export const dataStation: Station[] = [
  {
    id: 1,
    address: 'Town 1',
    total_water_supply: 1000,
    devices: 1,
    installation_at: '12/12/2022',
  },
  {
    id: 2,
    address: 'Town 2',
    total_water_supply: 2000,
    devices: 2,
    installation_at: '12/12/2022',
  },
  {
    id: 3,
    address: 'Town 3',
    total_water_supply: 3000,
    devices: 3,
    installation_at: '12/12/2022',
  },
  {
    id: 4,
    address: 'Town 4',
    total_water_supply: 4000,
    devices: 4,
    installation_at: '12/12/2022',
  },
  {
    id: 5,
    address: 'Town 5',
    total_water_supply: 5000,
    devices: 5,
    installation_at: '12/12/2022',
  },
];

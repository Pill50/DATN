import { apiCaller } from '@/apiConfigs';
import { AddLine } from '@/types/device';

const getAllWaterMeter = async () => {
  const path = '/water-meter/list';
  const response = await apiCaller('GET', path);
  return response;
};

const addLine = async (data: AddLine) => {
  const path = '/water-meter/add-line';
  const response = await apiCaller('POST', path, data);
  return response;
};

export { getAllWaterMeter, addLine };

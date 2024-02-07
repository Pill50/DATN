import { apiCaller } from '@/apiConfigs';
import { AddLine, RemoveLine } from '@/types/device';

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

const deleteLine = async (data: RemoveLine) => {
  const path = '/water-meter/delete-line';
  const response = await apiCaller('POST', path, data);
  return response;
};

export { getAllWaterMeter, addLine, deleteLine };

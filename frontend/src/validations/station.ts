import * as yup from 'yup';

export const createStationValidationSchema = yup.object({
  address: yup.string().required('Address is required'),
  numOfDevices: yup
    .number()
    .typeError('It must be a number')
    .min(1, 'Number of devices must be larger than 0')
    .required('Number of devices is required'),
  totalWaterSupply: yup
    .number()
    .typeError('It must be a number')
    .min(1, 'Total water supply must be larger than 0')
    .required('Total water supply is required'),
});

export const editStationValidationSchema = yup.object({
  address: yup.string().required('Address is required'),
  threshold: yup
    .number()
    .typeError('Threshold must be a number')
    .min(1, 'Threshold must be larger than 0')
    .required('Threshold is required'),
});

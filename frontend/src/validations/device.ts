import * as yup from 'yup';

export const createDeviceValidationSchema = yup.object({
  key: yup.string().required('Key is required'),
  address: yup.string().required('Address is required'),
  addressOfStation: yup.string().required('Address of station is required'),
});

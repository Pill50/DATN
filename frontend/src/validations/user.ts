import * as yup from 'yup';

export const profileValidationSchema = yup.object({
  email: yup.string().email('Invalid Email').required('Email is required').trim(),
  address: yup.string(),
  password: yup
    .string()
    .required('Password is required')
    .min(8, 'Weak password')
    .max(32, 'Password is too long')
    .trim(),
  key: yup.string().required('Key is required'),
});

import * as yup from 'yup';

export const registerValidationSchema = yup.object({
  email: yup.string().email('Invalid Email').required('Email is required').trim(),
  password: yup
    .string()
    .required('Password is required')
    .min(8, 'Weak password')
    .max(32, 'Password is too long')
    .trim(),
  confirmPassword: yup
    .string()
    .required('Confirm password is required')
    .oneOf([yup.ref('password')], 'Confirm password is not match')
    .trim(),
});

export const loginValidationSchema = yup.object({
  email: yup.string().email('Invalid Email').required('Email is required').trim(),
  password: yup.string().min(8, 'Password should be of minimum 8 characters length').required('Password is required'),
});

export const forgotPasswordValidationSchema = yup.object({
  email: yup.string().email('Invalid Email').required('Email is required').trim(),
});

export const resetPasswordValidationSchema = yup.object({
  password: yup
    .string()
    .required('Password is required')
    .min(8, 'Weak password')
    .max(32, 'Password is too long')
    .trim(),
  confirmPassword: yup
    .string()
    .required('Confirm password is required')
    .oneOf([yup.ref('password')], 'Confirm password is not match')
    .trim(),
});

export const changePasswordValidationSchema = yup.object({
  currentPassword: yup.string().trim().required('Current password is required'),
  newPassword: yup
    .string()
    .required('New password is required')
    .min(8, 'Weak password')
    .max(32, 'Password is too long')
    .trim(),
  confirmPassword: yup
    .string()
    .required('Confirm password is required')
    .oneOf([yup.ref('newPassword')], 'Confirm password is not match')
    .trim(),
});

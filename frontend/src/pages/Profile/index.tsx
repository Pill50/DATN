import React, { useState, useRef } from 'react';
import './Profile.scss';
import * as yup from 'yup';

import Sidebar from '@/components/Sidebar/Sidebar';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { Link } from 'react-router-dom';

const validationSchema = yup.object({
  username: yup.string().required('Username is required').trim(),
  email: yup.string().email('Invalid Email').required('Email is required').trim(),
  password: yup
    .string()
    .required('Password is required')
    .min(8, 'Weak password')
    .max(32, 'Password is too long')
    .trim(),
  address: yup.string(),
  role: yup.string(),
});

const initialValues = {
  username: '',
  email: '',
  password: '',
  address: '',
  role: '',
};

const handleSubmit = () => {
  console.log('LOGIN SUBMIT');
};

const Profile: React.FC = () => {
  const [avatar, setAvatar] = useState<string>('');

  const handleChangeAvatar = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) return;
    const file = event.target.files[0];
    if (file && file.type.substring(0, 5) === 'image') {
      const reader = new FileReader();
      reader.onload = () => {
        setAvatar(reader.result as string); // Set the result as the source for the img tag
      };
      reader.readAsDataURL(file);
    }
  };

  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div className="profile">
      <Sidebar />
      <div className="content">
        <h1 className="title">PROFILE</h1>
        <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={validationSchema}>
          {(formik) => (
            <Form className="" onSubmit={formik.handleSubmit}>
              <div className="profile__image">
                <label htmlFor="avatarInput">
                  <img src={avatar} alt="Avatar" className="profile__avatar" />
                </label>
                <input
                  id="avatarInput"
                  ref={inputRef}
                  type="file"
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChangeAvatar(e)}
                />
              </div>
              <div className="profile__info">
                <div className="profile__group">
                  <label htmlFor="username" className="">
                    Username
                  </label>
                  <Field
                    id="username"
                    name="username"
                    type="text"
                    placeholder="username"
                    className={`${formik.errors.username && formik.touched.username ? 'border-error' : ''}`}
                  />
                  <ErrorMessage name="username" component="span" className="error-msg" />
                </div>
                <div className="profile__group">
                  <label htmlFor="email" className="">
                    Email
                  </label>
                  <Field
                    id="email"
                    name="email"
                    type="text"
                    placeholder="email"
                    className={`${formik.errors.email && formik.touched.email ? 'border-error' : ''}`}
                  />
                  <ErrorMessage name="email" component="span" className="error-msg" />
                </div>
                <div className="profile__group">
                  <label htmlFor="password" className="">
                    Password
                  </label>
                  <Field
                    id="password"
                    name="password"
                    type="password"
                    placeholder="password"
                    className={`${formik.errors.password && formik.touched.password ? 'border-error' : ''}`}
                  />
                  <ErrorMessage name="password" component="span" className="error-msg" />
                </div>
                <div className="profile__group">
                  <label htmlFor="address" className="">
                    Address
                  </label>
                  <Field
                    id="address"
                    name="address"
                    type="text"
                    placeholder="address"
                    className={`${formik.errors.address && formik.touched.address ? 'border-error' : ''}`}
                  />
                  <ErrorMessage name="address" component="span" className="error-msg" />
                </div>
                <div className="profile__group">
                  <label htmlFor="role" className="">
                    Role
                  </label>
                  <Field
                    id="role"
                    name="role"
                    type="text"
                    placeholder="role"
                    className={`${formik.errors.role && formik.touched.role ? 'border-error' : ''}`}
                  />
                  <ErrorMessage name="role" component="span" className="error-msg" />
                </div>
              </div>
              <div className="profile__action">
                <Link to={'/change-password'} className="profile__action--pw">
                  CHANGE PASSWORD
                </Link>
                <button type="submit" className="profile__action--save">
                  SAVE
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Profile;

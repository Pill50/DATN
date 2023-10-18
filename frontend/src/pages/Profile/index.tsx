import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Profile.scss';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { profileValidationSchema } from '@/validations/user';
import Sidebar from '@/components/Sidebar/Sidebar';

const initialValues = {
  email: '',
  address: '',
  password: '',
  key: '',
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
        <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={profileValidationSchema}>
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
                  <label htmlFor="email" className="">
                    Email
                  </label>
                  <Field
                    id="email"
                    name="email"
                    type="text"
                    placeholder="Email"
                    className={`${formik.errors.email && formik.touched.email ? 'border-error' : ''}`}
                  />
                  <ErrorMessage name="email" component="span" className="error-msg" />
                </div>
                <div className="profile__group">
                  <label htmlFor="address" className="">
                    Address
                  </label>
                  <Field
                    id="address"
                    name="address"
                    type="text"
                    placeholder="Address"
                    className={`${formik.errors.address && formik.touched.address ? 'border-error' : ''}`}
                  />
                  <ErrorMessage name="address" component="span" className="error-msg" />
                </div>
                <div className="profile__group">
                  <label htmlFor="password" className="">
                    Password
                  </label>
                  <Field
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Password"
                    className={`${formik.errors.password && formik.touched.password ? 'border-error' : ''}`}
                  />
                  <ErrorMessage name="password" component="span" className="error-msg" />
                </div>
                <div className="profile__group">
                  <label htmlFor="key" className="">
                    Key
                  </label>
                  <Field
                    id="key"
                    name="key"
                    type="text"
                    placeholder="Key"
                    className={`${formik.errors.key && formik.touched.key ? 'border-error' : ''}`}
                  />
                  <ErrorMessage name="key" component="span" className="error-msg" />
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

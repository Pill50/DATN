import Login from '@/pages/Auth/Login';
import Cookies from 'js-cookie';
import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

const ProtectedRoute: React.FC = () => {
  const navigate = useNavigate();
  const accessToken = Cookies.get('accessToken');
  const role = Cookies.get('role');

  useEffect(() => {
    if (role === 'USER') {
      navigate('/login');
    }
  }, [role, navigate]);

  return accessToken && role === 'ADMIN' ? <Outlet /> : <Login />;
};

export default ProtectedRoute;

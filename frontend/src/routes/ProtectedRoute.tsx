import { useAppSelector } from '@/hooks/hooks';
import Cookies from 'js-cookie';
import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

const ProtectedRoute: React.FC = () => {
  const navigate = useNavigate();
  const accessToken = Cookies.get('accessToken');
  const role = useAppSelector((state) => state.authSlice.role);

  useEffect(() => {
    if (role === 'USER') {
      navigate('/login');
    }
  }, [role, navigate]);

  return (accessToken && role === 'ADMIN') ?? <Outlet />;
};

export default ProtectedRoute;

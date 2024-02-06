import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
// import NotFound from './pages/NotFound';
import ProtectedRoute from './routes/ProtectedRoute';
import Dashboard from './pages/Dashboard';
import ManageStation from './pages/ManageStation';
import DetailStation from './pages/DetailStation';
import ManageInvoice from './pages/ManageInvoice';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import ForgotPassword from './pages/Auth/ForgotPassword';
import ChangePassword from './pages/Auth/ChangePassword';
import ResetPassword from './pages/Auth/ResetPassword';

const App: React.FC = () => {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Header />
        <Routes>
          <Route index element={<Login />} path={'/login'}></Route>
          <Route path={'/register'} element={<Register />}></Route>
          <Route path={'/forgot-password'} element={<ForgotPassword />}></Route>
          <Route path={'/reset-password/:token'} element={<ResetPassword />}></Route>

          {/* PRIVATE ROUTE */}
          <Route element={<ProtectedRoute />}>
            <Route path={'/dashboard'} element={<Dashboard />} />
            <Route path="/change-password" element={<ChangePassword />} />
            <Route path="/stations/:stationID" element={<DetailStation />} />
            <Route path="/stations" element={<ManageStation />} />
            <Route path="/invoices" element={<ManageInvoice />} />
          </Route>
          {/* <Route path={'*'} element={<NotFound />}></Route> */}
        </Routes>
        <Footer />
      </div>
    </>
  );
};

export default App;

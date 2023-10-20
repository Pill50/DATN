import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';

import Header from './components/Header';
import Footer from './components/Footer';
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword';
import NotFound from './pages/NotFound';
import ChangePassword from './pages/ChangePassword';
import ProtectedRoute from './routes/ProtectedRoute';
import Dashboard from './pages/Dashboard';
import Station from './pages/Station';
import Device from './pages/Device';
import Notification from './pages/Notification';
import Profile from './pages/Profile';
import DetailStation from './pages/DetailStation';
import DetailDevice from './pages/DetailDevice';

const App: React.FC = () => {
  // const [user, setUser] = useState<boolean>(true);

  return (
    <>
      <div className="app">
        <Header />
        <Routes>
          <Route index element={<Login />}></Route>
          <Route path={'/login'} element={<Login />}></Route>
          <Route path={'/register'} element={<Register />}></Route>
          <Route path={'/register'} element={<Register />}></Route>
          <Route path={'/forgot-password'} element={<ForgotPassword />}></Route>
          <Route path={'/reset-password'} element={<ResetPassword />}></Route>
          {/* PRIVATE ROUTE */}
          <Route element={<ProtectedRoute user={true} />}>
            <Route path="/change-password" element={<ChangePassword />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/station/:stationID" element={<DetailStation />} />
            <Route path="/station" element={<Station />} />
            <Route path="/device/:deviceID" element={<DetailDevice />} />
            <Route path="/device" element={<Device />} />
            <Route path="/notification" element={<Notification />} />
            <Route path="/profile" element={<Profile />} />
          </Route>
          <Route path={'*'} element={<NotFound />}></Route>
        </Routes>
        <Footer />
      </div>
    </>
  );
};

export default App;

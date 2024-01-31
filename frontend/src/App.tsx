import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
// import Login from './pages/Login';
// import Register from './pages/Register';
// import ForgotPassword from './pages/ForgotPassword';
// import ResetPassword from './pages/ResetPassword';
// import NotFound from './pages/NotFound';
// import ChangePassword from './pages/ChangePassword';
import ProtectedRoute from './routes/ProtectedRoute';
import Dashboard from './pages/Dashboard';
import ManageStation from './pages/ManageStation';
import DetailStation from './pages/DetailStation';
import ManageInvoice from './pages/ManageInvoice';
import Login from './pages/Auth/Login';

const App: React.FC = () => {
  // const [user, setUser] = useState<boolean>(true);

  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Header />
        <Routes>
          <Route index element={<Dashboard />} />

          {/* <Route index element={<Login />}></Route>
          <Route path={'/register'} element={<Register />}></Route>
          <Route path={'/register'} element={<Register />}></Route>
          <Route path={'/forgot-password'} element={<ForgotPassword />}></Route>
        <Route path={'/reset-password'} element={<ResetPassword />}></Route> */}
          {/* PRIVATE ROUTE */}
          <Route path={'/login'} element={<Login />}></Route>
          <Route element={<ProtectedRoute user={true} />}>
            {/* <Route path="/change-password" element={<ChangePassword />} /> */}
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/stations/:stationID" element={<DetailStation />} />
            <Route path="/stations" element={<ManageStation />} />
            <Route path="/invoices" element={<ManageInvoice />} />
            {/* <Route path="/station/:stationID" element={<DetailStation />} />
            <Route path="/station" element={<Station />} />
            <Route path="/device/:deviceID" element={<DetailDevice />} />
            <Route path="/device" element={<Device />} />
            <Route path="/profile" element={<Profile />} /> */}
          </Route>
          {/* <Route path={'*'} element={<NotFound />}></Route> */}
        </Routes>
        <Footer />
      </div>
    </>
  );
};

export default App;

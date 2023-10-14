import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Sigup';

import Header from './components/Header';
import Footer from './components/Footer';
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword';
import NotFound from './pages/NotFound';
import ChangePassword from './pages/ChangePassword';
import ProtectedRoute from './routes/ProtectedRoute';
import Dashboard from './pages/Dashboard';

const App: React.FC = () => {
  // const [user, setUser] = useState<boolean>(true);

  return (
    <>
      <div className="app">
        <Header />
        <Routes>
          <Route index element={<Login />}></Route>
          <Route path={'/login'} element={<Login />}></Route>
          <Route path={'/signup'} element={<Signup />}></Route>
          <Route path={'/signup'} element={<Signup />}></Route>
          <Route path={'/forgot-password'} element={<ForgotPassword />}></Route>
          <Route path={'/reset-password'} element={<ResetPassword />}></Route>
          {/* PRIVATE ROUTE */}
          <Route element={<ProtectedRoute user={false} />}>
            <Route path="/change-password" element={<ChangePassword />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
          <Route path={'*'} element={<NotFound />}></Route>
        </Routes>
        <Footer />
      </div>
    </>
  );
};

export default App;

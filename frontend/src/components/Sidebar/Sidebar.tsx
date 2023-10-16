import React from 'react';
import './Sidebar.scss';
import { AreaIcon, DashboardIcon, DeviceIcon, LogoutIcon, NotificationIcon, ProfileIcon } from '../Icons';
import { Link, useLocation } from 'react-router-dom';

const Sidebar: React.FC = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <div className="sidebar">
      <div className="container">
        <ul className="sidebar__list">
          <Link to={'/profile'} className={`sidebar__item ${isActive('/profile')}`}>
            <div className="sidebar__block">
              <ProfileIcon />
              <span>My profile</span>
            </div>
          </Link>
          <Link to={'/dashboard'} className={`sidebar__item ${isActive('/dashboard')}`}>
            <div className="sidebar__block">
              <DashboardIcon />
              <span>Dashboard</span>
            </div>
          </Link>
          <Link to={'/area'} className={`sidebar__item ${isActive('/area')}`}>
            <div className="sidebar__block">
              <AreaIcon />
              <span>Area</span>
            </div>
          </Link>
          <Link to="/device" className={`sidebar__item ${isActive('/device')}`}>
            <div className="sidebar__block">
              <DeviceIcon />
              <span>Device</span>
            </div>
          </Link>
          <Link to="/notification" className={`sidebar__item ${isActive('/notification')}`}>
            <div className="sidebar__block">
              <NotificationIcon />
              <span>Notification</span>
            </div>
          </Link>
        </ul>
        <div className="devider"></div>
        <div className="sidebar__block logout">
          <LogoutIcon />
          <span>Logout</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

import React from 'react';
import './Sidebar.scss';
import { AreaIcon, DashboardIcon, DeviceIcon, LogoutIcon, NotificationIcon, ProfileIcon } from '../Icons';

const Sidebar: React.FC = () => {
  return (
    <div className="sidebar">
      <div className="container">
        <ul className="sidebar__list">
          <li className="sidebar__item">
            <div className="sidebar__block active">
              <ProfileIcon />
              <span>My profile</span>
            </div>
          </li>
          <li className="sidebar__item">
            <div className="sidebar__block">
              <DashboardIcon />
              <span>Dashboard</span>
            </div>
          </li>
          <li className="sidebar__item">
            <div className="sidebar__block">
              <AreaIcon />
              <span>Area</span>
            </div>
          </li>
          <li className="sidebar__item">
            <div className="sidebar__block">
              <DeviceIcon />
              <span>Device</span>
            </div>
          </li>
          <li className="sidebar__item">
            <div className="sidebar__block">
              <NotificationIcon />
              <span>Notification</span>
            </div>
          </li>
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

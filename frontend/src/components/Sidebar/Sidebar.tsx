import React, { useEffect, useState } from 'react';
import './Sidebar.scss';
import {
  TotalWaterSuplyIcon,
  DashboardIcon,
  DeviceIcon,
  LogoutIcon,
  NotificationIcon,
  ProfileIcon,
  MenuIcon,
} from '../Icons';
import { Link, useLocation } from 'react-router-dom';

const Sidebar: React.FC = () => {
  const [isDisplaySidebar, setIsDisplaySidebar] = useState<Boolean>(true);

  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname.startsWith(path) ? 'active' : '';
  };

  // useEffect(() => {
  //   if (window.innerWidth > 1200) {
  //     setIsDisplaySidebar(true);
  //   }
  // }, [window]);

  const toggleDisplay = () => {
    setIsDisplaySidebar(!isDisplaySidebar);
  };

  return (
    <>
      <div className="menu-icon" onClick={toggleDisplay}>
        <MenuIcon />
      </div>
      {isDisplaySidebar && (
        <>
          <div className="overlay" onClick={toggleDisplay}></div>
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
                <Link to={'/station'} className={`sidebar__item ${isActive('/station')}`}>
                  <div className="sidebar__block">
                    <TotalWaterSuplyIcon />
                    <span>Station</span>
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
        </>
      )}
    </>
  );
};

export default Sidebar;

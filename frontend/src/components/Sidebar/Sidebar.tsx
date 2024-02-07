import React, { useState } from 'react';
import { TotalWaterSuplyIcon, DashboardIcon, LogoutIcon, ProfileIcon, InvoiceIcon, MenuIcon } from '../Icons';
import { useLocation } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

const Sidebar: React.FC = () => {
  const [isOpenSideBar, setIsOpenSideBar] = useState<boolean>(false);
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname.startsWith(path) ? 'text-[#4285f4]' : 'text-[#333]';
  };

  const toggleDisplay = () => {
    setIsOpenSideBar(!isOpenSideBar);
  };

  return (
    <>
      <div
        className="p-2 absolute cursor-pointer bg-slate-100 rounded-lg my-3 mx-4"
        onClick={() => setIsOpenSideBar(true)}
      >
        <MenuIcon />
      </div>
      {isOpenSideBar && (
        <>
          <div className="fixed top-0 left-0 bottom-0 right-0 w-full bg-black/80 z-40" onClick={toggleDisplay}></div>
          <div className="fixed bottom-0 top-0 left-0 z-40 px-3 py-4 overflow-y-auto bg-white animate-slide">
            <ul className="space-y-2 font-medium">
              <li>
                <NavLink
                  to={'/profile'}
                  className={`flex items-center p-2 rounded-lg group 
                    ${isActive('profile')}
                    hover:bg-[#E0E8F7] hover:text-[#4285f4]`}
                >
                  <ProfileIcon />
                  <span className="ml-3">Thông tin cá nhân</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={'/dashboard'}
                  className={`flex items-center p-2 rounded-lg group
                    ${isActive('dashboard')}
                    hover:bg-[#E0E8F7] hover:text-[#4285f4]`}
                >
                  <DashboardIcon />
                  <span className="ml-3">Bảng điều khiển</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={'/stations'}
                  className={`flex items-center p-2  rounded-lg group
                    ${isActive('/stations')}
                    hover:bg-[#E0E8F7] hover:text-[#4285f4]`}
                >
                  <TotalWaterSuplyIcon />
                  <span className="ml-3">Quản lý trạm nước</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={'/invoices'}
                  className={`flex items-center p-2  rounded-lg group
                    ${isActive('/invoices')}
                    hover:bg-[#E0E8F7] hover:text-[#4285f4]`}
                >
                  <InvoiceIcon />
                  <span className="ml-3">Quản lý hóa đơn</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={'/logout'}
                  className={`flex items-center p-2 text-[#DB4437] rounded-lg group
                    ${isActive('logout')}
                    hover:bg-[#E0E8F7]`}
                >
                  <LogoutIcon />
                  <span className="ml-3">Đăng xuất</span>
                </NavLink>
              </li>
            </ul>
          </div>
        </>
      )}
    </>
  );
};

export default Sidebar;

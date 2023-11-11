import React from 'react';
import { TotalWaterSuplyIcon, DashboardIcon, LogoutIcon, NotificationIcon, ProfileIcon, InvoiceIcon } from '../Icons';
import { useLocation } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

const Sidebar: React.FC = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname.startsWith(path) ? 'text-[#4285f4]' : 'text-[#333]';
  };

  return (
    <>
      <aside
        id="default-sidebar"
        className="w-56 h-auto transition-transform -translate-x-full sm:translate-x-0 border-r-[#e3e3e3] border-r-[1px]"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-white ">
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
                    ${isActive('/dashboard')}
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
                to={'/notification'}
                className={`flex items-center p-2  rounded-lg group
                    ${isActive('/notification')}
                    hover:bg-[#E0E8F7] hover:text-[#4285f4]`}
              >
                <NotificationIcon />
                <span className="ml-3">Thông báo</span>
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
      </aside>
    </>
  );
};

export default Sidebar;

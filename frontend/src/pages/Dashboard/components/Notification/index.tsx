import { CloseIcon, NotificationIcon, WaterStationIcon } from '@/components/Icons';
import React from 'react';

const Notification: React.FC = () => {
  return (
    <div className="shadow-lg rounded-md p-2 px-4">
      <div className="flex items-center gap-2 mb-2">
        <NotificationIcon className="text-red-600" />
        <h2 className="text-[#4285f4] text-2xl font-bold">Thông báo</h2>
        <button
          type="button"
          className="font-medium rounded-md text-sm text-white px-5 py-2 ml-auto bg-blue-600 hover:bg-blue-800"
        >
          XÓA HẾT
        </button>
      </div>
      <div className="h-[400px] overflow-y-scroll">
        <div className="py-2 flex bg-green-200 p-2 rounded-md mb-2 mr-2 relative">
          <CloseIcon className="absolute right-2 top-1 cursor-pointer" />
          {/* <p className="text-green-600 font-bold text-lg">Không có thông báo!</p> */}
          <div className="bg-green-100 p-2 w-10 h-10 rounded-md mt-1 flex justify-center items-center">
            <WaterStationIcon />
          </div>
          <div className="px-2">
            <h4>
              <span className="font-bold">Địa điểm: </span>Trạm Bách Khoa
            </h4>
            <p>
              <span className="font-bold">Nội dung: </span>Vượt ngưỡng tiêu thụ trong tháng
            </p>
            <p>
              <span className="font-bold">Thời gian: </span>12h12 - 10/10/2023
            </p>
          </div>
        </div>
        <div className="py-2 flex bg-green-200 p-2 rounded-md mb-2 mr-2 relative">
          <CloseIcon className="absolute right-2 top-1 cursor-pointer" />
          {/* <p className="text-green-600 font-bold text-lg">Không có thông báo!</p> */}
          <div className="bg-green-100 p-2 w-10 h-10 rounded-md mt-1 flex justify-center items-center">
            <WaterStationIcon />
          </div>
          <div className="px-2">
            <h4>
              <span className="font-bold">Địa điểm: </span>Trạm Bách Khoa
            </h4>
            <p>
              <span className="font-bold">Nội dung: </span>Vượt ngưỡng tiêu thụ trong tháng
            </p>
            <p>
              <span className="font-bold">Thời gian: </span>12h12 - 10/10/2023
            </p>
          </div>
        </div>
        <div className="py-2 flex bg-green-200 p-2 rounded-md mb-2 mr-2 relative">
          <CloseIcon className="absolute right-2 top-1 cursor-pointer" />
          {/* <p className="text-green-600 font-bold text-lg">Không có thông báo!</p> */}
          <div className="bg-green-100 p-2 w-10 h-10 rounded-md mt-1 flex justify-center items-center">
            <WaterStationIcon />
          </div>
          <div className="px-2">
            <h4>
              <span className="font-bold">Địa điểm: </span>Trạm Bách Khoa
            </h4>
            <p>
              <span className="font-bold">Nội dung: </span>Vượt ngưỡng tiêu thụ trong tháng
            </p>
            <p>
              <span className="font-bold">Thời gian: </span>12h12 - 10/10/2023
            </p>
          </div>
        </div>
        <div className="py-2 flex bg-green-200 p-2 rounded-md mb-2 mr-2 relative">
          <CloseIcon className="absolute right-2 top-1 cursor-pointer" />
          {/* <p className="text-green-600 font-bold text-lg">Không có thông báo!</p> */}
          <div className="bg-green-100 p-2 w-10 h-10 rounded-md mt-1 flex justify-center items-center">
            <WaterStationIcon />
          </div>
          <div className="px-2">
            <h4>
              <span className="font-bold">Địa điểm: </span>Trạm Bách Khoa
            </h4>
            <p>
              <span className="font-bold">Nội dung: </span>Vượt ngưỡng tiêu thụ trong tháng
            </p>
            <p>
              <span className="font-bold">Thời gian: </span>12h12 - 10/10/2023
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notification;

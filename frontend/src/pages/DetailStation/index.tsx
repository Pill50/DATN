import React from 'react';
import Sidebar from '@/components/Sidebar/Sidebar';
import { InfoIcon, StatisticIcon } from '@/components/Icons';
import Graph from './components/Graph';
import ModalDelete from '@/components/ModalDelete';
import { useParams } from 'react-router-dom';
import ModalEdit from './components/ModalEdit';

const DetailStation: React.FC = () => {
  const { stationID } = useParams();

  return (
    <div className="flex">
      <Sidebar />
      <div className="p-3 flex-1 mt-2">
        <h1 className="flex justify-center text-[#4285f4] text-3xl font-semibold">THÔNG TIN CHI TIẾT</h1>
        {/* ACTION */}
        <div className="flex gap-2">
          <ModalEdit itemID={stationID as string} />
          <ModalDelete itemID={stationID as string} />
          <button
            type="button"
            className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            CẬP NHẬT DỮ LIỆU MỚI
          </button>
        </div>
        <div className="flex gap-4 justify-center">
          {/* INFO */}
          <div className="border-[1px] p-3 rounded-md shadow-md w-fit">
            <div className="flex items-center gap-1">
              <div className="bg-green-200 rounded-md p-2">
                <InfoIcon className="text-[#0f9d58]" />
              </div>
              <h2 className="text-[#0f9d58] font-semibold">THÔNG TIN CƠ BẢN</h2>
            </div>
            <div className="mb-1">
              <span className="font-medium">Tên trạm:</span> <span>Đại học Bách Khoa</span>
            </div>
            <div className="mb-1">
              <span className="font-medium">Địa chỉ:</span> <span>268, Lý Thường Kiệt, Quận 10</span>
            </div>
            <div className="mb-1">
              <span className="font-medium">Số đồng hồ con:</span> <span>3</span>
            </div>
            <div className="mb-1">
              <span className="font-medium">Thời gian lắp đặt:</span> <span>1/1/2023</span>
            </div>
          </div>
          {/* STATISTIC */}
          <div className="border-[1px] p-3 rounded-md shadow-md">
            <div className="flex items-center gap-1">
              <div className="bg-yellow-200 rounded-md p-2">
                <StatisticIcon className="text-[#F4B400]" />
              </div>
              <h2 className="text-[#F4B400] font-semibold">THỐNG KÊ TỔNG LƯU LƯỢNG NƯỚC</h2>
            </div>
            <div className="mb-1">
              <span className="font-medium">Hôm nay:</span> <span>10</span>m³
            </div>
            <div className="mb-1">
              <span className="font-medium">Trong tuần:</span> <span>100</span>m³
            </div>
            <div className="mb-1">
              <span className="font-medium">Trong tháng:</span> <span>3000</span>m³
            </div>
          </div>
          {/* STATUS */}
          <div className="border-[1px] p-3 rounded-md shadow-md">
            <div className="flex items-center gap-1">
              <div className="bg-red-200 rounded-md p-2">
                <StatisticIcon className="text-[#DB4437]" />
              </div>
              <h2 className="text-[#DB4437] font-semibold">TÌNH TRẠNG ĐỒNG HỒ</h2>
            </div>
            <div className="mb-1">
              <span className="font-medium">Lưu lượng nước hiện tại</span> <span>10</span>m³
            </div>
            <div className="mb-1">
              <span className="font-medium">Ngưỡng tiêu thụ trong tháng</span> <span>100</span>m³
            </div>
            <div className="mb-1">
              <span className="font-medium">Tình trạng hoạt động: </span>
              <span className="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">
                Ổn định
              </span>
            </div>
          </div>
        </div>
        {/* GRAPH */}
        <Graph />
      </div>
    </div>
  );
};

export default DetailStation;

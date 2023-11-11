import React from 'react';
import Sidebar from '@/components/Sidebar/Sidebar';
import DropdownFilter from './components/DropdownFilter';
import { SearchIcon } from '@/components/Icons';

import { dataStation as stationList } from '../../Mockdata/ListDataStation';
import { useNavigate } from 'react-router-dom';

const ManageStation: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="flex">
      <Sidebar />
      <div className="p-3 flex-1">
        <h1 className="flex justify-center text-[#4285f4] text-3xl font-semibold">QUẢN LÝ TRẠM NƯỚC</h1>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg p-2">
          <div className="flex items-center justify-between pb-4 bg-white dark:bg-gray-900">
            {/* DROPDOWN FILTER */}
            <DropdownFilter />
            <label htmlFor="table-search" className="sr-only">
              Search
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <SearchIcon className="w-4 h-4" />
              </div>
              <input
                type="text"
                id="table-search-users"
                className="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Tìm kiếm theo tên trạm"
              />
            </div>
          </div>
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="p-4">
                  <div className="flex items-center">
                    <input
                      id="checkbox-all-search"
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label htmlFor="checkbox-all-search" className="sr-only">
                      checkbox
                    </label>
                  </div>
                </th>
                <th scope="col" className="px-6 py-3">
                  Tên trạm
                </th>
                <th scope="col" className="px-6 py-3">
                  Số trạm con
                </th>
                <th scope="col" className="px-6 py-3">
                  Thời gian lắp đặt
                </th>
                <th scope="col" className="px-6 py-3">
                  Tình trạng
                </th>
                <th scope="col" className="px-6 py-3">
                  Lưu lượng nước trong ngày
                </th>
              </tr>
            </thead>
            <tbody>
              {stationList.map((station, index: number) => (
                <tr
                  key={index}
                  className="bg-white border-b  hover:bg-blue-50 hover:cursor-pointer"
                  onClick={() => navigate(`/stations/${station.id}`)}
                >
                  <td className="w-4 p-4">
                    <div className="flex items-center">
                      <input
                        id="checkbox-table-search-1"
                        type="checkbox"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label htmlFor="checkbox-table-search-1" className="sr-only">
                        checkbox
                      </label>
                    </div>
                  </td>
                  <th
                    scope="row"
                    className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    <img className="w-10 h-10 rounded-full" src={station.thumbnail} alt="water meter" />
                    <div className="pl-3">
                      <div className="text-base font-semibold">{station.name}</div>
                      <div className="font-normal text-gray-500">{station.address}</div>
                    </div>
                  </th>
                  <td className="px-6 py-4">{station.devices}</td>
                  <td className="px-6 py-4">{station.installationAt}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <div
                        className={`h-2.5 w-2.5 rounded-full mr-2 ${
                          station.status === 1 ? 'bg-green-500 ' : 'bg-red-600'
                        }`}
                      />
                      {station.status === 1 ? 'Đang hoạt động' : 'Đang sửa chửa'}
                    </div>
                  </td>
                  <td className="px-6 py-4">{station.consumePerDay}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageStation;

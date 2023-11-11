import React from 'react';
import Sidebar from '@/components/Sidebar/Sidebar';
import DropdownFilter from './components/DropdownFilter';
import { SearchIcon } from '@/components/Icons';

import { dataInvoice as listDataInvoice } from '../../Mockdata/ListDataInvoice';

const handleSendInvoice = (id: number) => {
  console.log('send invoice to', id);
};

const ManageInvoices: React.FC = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="p-3 flex-1">
        <h1 className="flex justify-center text-[#4285f4] text-3xl font-semibold">QUẢN LÝ HÓA ĐƠN</h1>
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
                  Lưu lượng nước trong tháng
                </th>
                <th scope="col" className="px-6 py-3">
                  Hình ảnh đính kèm (nếu có)
                </th>
                <th scope="col" className="px-6 py-3">
                  Tổng tiền
                </th>
                <th scope="col" className="px-6 py-3">
                  Ngày gửi
                </th>
                <th scope="col" className="px-6 py-3">
                  Tình trạng
                </th>
                <th scope="col" className="px-6 py-3">
                  Hành động
                </th>
              </tr>
            </thead>
            <tbody>
              {listDataInvoice.map((invoice, index: number) => (
                <tr key={index} className="bg-white border-b  hover:bg-blue-50">
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
                    <img className="w-10 h-10 rounded-full" src={invoice.thumbnail} alt="water meter" />
                    <div className="pl-3">
                      <div className="text-base font-semibold">{invoice.name}</div>
                      <div className="font-normal text-gray-500">{invoice.address}</div>
                    </div>
                  </th>
                  <td className="px-6 py-4">{invoice.consumePerMonth}</td>
                  <td className="px-6 py-4">No image</td>
                  <td className="px-6 py-4">{invoice.consumePerMonth * 2000} VNĐ</td>
                  <td className="px-6 py-4">{invoice.created_at}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <div
                        className={`h-2.5 w-2.5 rounded-full mr-2 ${invoice.status === 0 && 'bg-red-500 '} ${
                          invoice.status === 1 && 'bg-yellow-500 '
                        }
                        ${invoice.status === 2 && 'bg-green-500 '}`}
                      />
                      {invoice.status === 0 && 'Chưa thanh toán'}
                      {invoice.status === 1 && 'Đã gửi'}
                      {invoice.status === 2 && 'Đã thanh toán'}
                    </div>
                  </td>
                  <td
                    className={`text-[#4285f4] px-6 py-4 ${invoice.status === 1 ? 'hover:cursor-pointer' : ''}`}
                    onClick={() => handleSendInvoice(invoice.id)}
                  >
                    {invoice.status === 1 ? 'Gửi lại đơn' : ''}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageInvoices;

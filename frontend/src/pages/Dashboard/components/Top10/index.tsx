import React from 'react';
import { dataInvoice as listDataInvoice } from '@/Mockdata/ListDataInvoice';

const Top10Consumption: React.FC = () => {
  return (
    <div className="p-4 shadow-lg mb-10">
      <h2 className="text-[#4285f4] text-2xl font-bold mb-4">Top 10 trạm có lưu lượng nước tiêu thụ lớn nhất</h2>
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
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
              Cập nhật ngày
            </th>
          </tr>
        </thead>
        <tbody>
          {listDataInvoice.map((invoice, index: number) => (
            <tr key={index} className="bg-white border-b  hover:bg-blue-50">
              <th scope="row" className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                <img className="w-10 h-10 rounded-full" src={invoice.thumbnail} alt="water meter" />
                <div className="pl-3">
                  <div className="text-base font-semibold">{invoice.name}</div>
                  <div className="font-normal text-gray-500">{invoice.address}</div>
                </div>
              </th>
              <td className="px-6 py-4">{invoice.consumePerMonth}</td>
              <td className="px-6 py-4">No image</td>
              <td className="px-6 py-4">{invoice.created_at}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Top10Consumption;

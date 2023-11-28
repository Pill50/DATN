import { MaxIcon, MinIcon } from '@/components/Icons';
import React, { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const dataConsumpPerDay = [
  {
    time: '1h',
    name: 'Trạm nước Bách Khoa',
    value: 6411,
  },
  {
    time: '2h',
    name: 'Trạm nước Bách Khoa',
    value: 6410,
  },
  {
    time: '3h',
    name: 'Trạm nước Bách Khoa',
    value: 6405,
  },
  {
    time: '4h',
    name: 'Trạm nước Bách Khoa',
    value: 6402,
  },
  {
    time: '5h',
    name: 'Trạm nước Bách Khoa',
    value: 6407,
  },
  {
    time: '6h',
    name: 'Trạm nước Bách Khoa',
    value: 6408,
  },
  {
    time: '7h',
    name: 'Trạm nước Bách Khoa',
    value: 6413,
  },
  {
    time: '8h',
    name: 'Trạm nước Bách Khoa',
    value: 6412,
  },
  {
    time: '9h',
    name: 'Trạm nước Bách Khoa',
    value: 6406,
  },
  {
    time: '10h',
    name: 'Trạm nước Bách Khoa',
    value: 6414,
  },
  {
    time: '11h',
    name: 'Trạm nước Bách Khoa',
    value: 6409,
  },
  {
    time: '12h',
    name: 'Trạm nước Bách Khoa',
    value: 6416,
  },
  {
    time: '13h',
    name: 'Trạm nước Bách Khoa',
    value: 6418,
  },
  {
    time: '14h',
    name: 'Trạm nước Bách Khoa',
    value: 6417,
  },
  {
    time: '15h',
    name: 'Trạm nước Bách Khoa',
    value: 6415,
  },
  {
    time: '16h',
    name: 'Trạm nước Bách Khoa',
    value: 6404,
  },
  {
    time: '17h',
    name: 'Trạm nước Bách Khoa',
    value: 6403,
  },
  {
    time: '18h',
    name: 'Trạm nước Bách Khoa',
    value: 6419,
  },
  {
    time: '19h',
    name: 'Trạm nước Bách Khoa',
    value: 6412,
  },
  {
    time: '20h',
    name: 'Trạm nước Bách Khoa',
    value: 6411,
  },
  {
    time: '21h',
    name: 'Trạm nước Bách Khoa',
    value: 6413,
  },
  {
    time: '22h',
    name: 'Trạm nước Bách Khoa',
    value: 6401,
  },
  {
    time: '23h',
    name: 'Trạm nước Bách Khoa',
    value: 6400,
  },
  {
    time: '24h',
    name: 'Trạm nước Bách Khoa',
    value: 6400,
  },
];

const dataConsumpPerDayOfWeek = [
  {
    time: 'Monday',
    name: 'Trạm nước Bách Khoa',
    value: 6411,
  },
  {
    time: 'Tuesday',
    name: 'Trạm nước Bách Khoa',
    value: 6410,
  },
  {
    time: 'Wednesday',
    name: 'Trạm nước Bách Khoa',
    value: 6405,
  },
  {
    time: 'Thursday',
    name: 'Trạm nước Bách Khoa',
    value: 6402,
  },
  {
    time: 'Friday',
    name: 'Trạm nước Bách Khoa',
    value: 6407,
  },
  {
    time: 'Saturday',
    name: 'Trạm nước Bách Khoa',
    value: 6408,
  },
  {
    time: 'Sunday',
    name: 'Trạm nước Bách Khoa',
    value: 6408,
  },
];

const dataConsumpPerDayOfMonth = [
  {
    time: 'Monday',
    name: 'Trạm nước Bách Khoa',
    value: 6411,
  },
  {
    time: 'Tuesday',
    name: 'Trạm nước Bách Khoa',
    value: 6410,
  },
  {
    time: 'Wednesday',
    name: 'Trạm nước Bách Khoa',
    value: 6405,
  },
  {
    time: 'Thursday',
    name: 'Trạm nước Bách Khoa',
    value: 6402,
  },
  {
    time: 'Friday',
    name: 'Trạm nước Bách Khoa',
    value: 6407,
  },
  {
    time: 'Saturday',
    name: 'Trạm nước Bách Khoa',
    value: 6408,
  },
  {
    time: 'Sunday',
    name: 'Trạm nước Bách Khoa',
    value: 6408,
  },
];

const Graph: React.FC = () => {
  const [options, setOptions] = useState<string>('day');
  const [data, setData] = useState(dataConsumpPerDay);

  useEffect(() => {
    switch (options) {
      case 'day':
        setData(dataConsumpPerDay);
        break;
      case 'week':
        setData(dataConsumpPerDayOfWeek);
        break;
      case 'month':
        setData(dataConsumpPerDayOfMonth);
        break;
      default:
        break;
    }
  }, [options]);

  return (
    <div className="h-[300px] mt-10 mb-[200px]">
      <h2 className="text-[#4285f4] text-2xl font-bold mb-4">Thống kê lưu lượng nước tiêu thụ</h2>
      <div className="flex justify-center items-center gap-4">
        <div className="bg-red-200 rounded-md w-fit p-2 relative">
          <div className="rounded-full bg-red-100 w-10 h-10 flex justify-center items-center absolute left-1/2 translate-x-[-60%] top-[-20px]">
            <MaxIcon />
          </div>
          <p className="text-md mt-4">Lưu lượng lớn nhất</p>
          <p className="text-center font-semibold text-xl">1000 m³</p>
        </div>
        <div className="bg-yellow-200 rounded-md w-fit p-2 relative">
          <div className="rounded-full bg-yellow-100 w-10 h-10 flex justify-center items-center absolute left-1/2 translate-x-[-60%] top-[-20px]">
            <MinIcon />
          </div>
          <p className="text-md mt-4">Lưu lượng nhỏ nhất</p>
          <p className="text-center font-semibold text-xl">100 m³</p>
        </div>
      </div>
      <div className="flex justify-end">
        <button
          type="button"
          onClick={() => setOptions('day')}
          className={`font-medium rounded-md text-sm px-5 py-2.5 mr-2 mb-2 
          ${
            options === 'day'
              ? 'bg-[#0F9C58] hover:bg-[#0F9C58] text-white'
              : 'bg-[#eee] hover:bg-slate-400 text-[#333]'
          } 
          `}
        >
          NGÀY
        </button>
        <button
          type="button"
          onClick={() => setOptions('week')}
          className={`font-medium rounded-md text-sm px-5 py-2.5 mr-2 mb-2 
          ${
            options === 'week'
              ? 'bg-[#0F9C58] hover:bg-[#0F9C58] text-white'
              : 'bg-[#eee] hover:bg-slate-400 text-[#333]'
          }`}
        >
          TUẦN
        </button>
        <button
          type="button"
          onClick={() => setOptions('month')}
          className={`font-medium rounded-md text-sm px-5 py-2.5 mr-2 mb-2 
          ${
            options === 'month'
              ? 'bg-[#0F9C58] hover:bg-[#0F9C58] text-white'
              : 'bg-[#eee] hover:bg-slate-400 text-[#333]'
          }`}
        >
          THÁNG
        </button>
      </div>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="value" stroke="#82ca9d" activeDot={{ r: 8 }} name="Lưu lượng nước" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default React.memo(Graph);

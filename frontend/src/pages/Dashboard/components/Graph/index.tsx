import { MaxIcon, MinIcon } from '@/components/Icons';
import React, { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const dataConsumpPerDay = [
  {
    time: '1h',
    'Trạm nước Bách Khoa': 6411,
    'Trạm nước KHTN': 5742,
    'Trạm nước UIT': 6618,
  },
  {
    time: '2h',
    'Trạm nước Bách Khoa': 8041,
    'Trạm nước KHTN': 6878,
    'Trạm nước UIT': 6186,
  },
  {
    time: '3h',
    'Trạm nước Bách Khoa': 8897,
    'Trạm nước KHTN': 9572,
    'Trạm nước UIT': 8403,
  },
  {
    time: '4h',
    'Trạm nước Bách Khoa': 8667,
    'Trạm nước KHTN': 7290,
    'Trạm nước UIT': 8598,
  },
  {
    time: '5h',
    'Trạm nước Bách Khoa': 7552,
    'Trạm nước KHTN': 8503,
    'Trạm nước UIT': 7876,
  },
  {
    time: '6h',
    'Trạm nước Bách Khoa': 7689,
    'Trạm nước KHTN': 6948,
    'Trạm nước UIT': 7845,
  },
  {
    time: '7h',
    'Trạm nước Bách Khoa': 7651,
    'Trạm nước KHTN': 6217,
    'Trạm nước UIT': 6785,
  },
  {
    time: '8h',
    'Trạm nước Bách Khoa': 7962,
    'Trạm nước KHTN': 6115,
    'Trạm nước UIT': 6128,
  },
  {
    time: '9h',
    'Trạm nước Bách Khoa': 6779,
    'Trạm nước KHTN': 9712,
    'Trạm nước UIT': 7912,
  },
  {
    time: '10h',
    'Trạm nước Bách Khoa': 6618,
    'Trạm nước KHTN': 8263,
    'Trạm nước UIT': 9998,
  },
  {
    time: '11h',
    'Trạm nước Bách Khoa': 7243,
    'Trạm nước KHTN': 9372,
    'Trạm nước UIT': 9557,
  },
  {
    time: '12h',
    'Trạm nước Bách Khoa': 6724,
    'Trạm nước KHTN': 8778,
    'Trạm nước UIT': 8049,
  },
  {
    time: '13h',
    'Trạm nước Bách Khoa': 6731,
    'Trạm nước KHTN': 8892,
    'Trạm nước UIT': 8949,
  },
  {
    time: '14h',
    'Trạm nước Bách Khoa': 6871,
    'Trạm nước KHTN': 8569,
    'Trạm nước UIT': 9553,
  },
  {
    time: '15h',
    'Trạm nước Bách Khoa': 8508,
    'Trạm nước KHTN': 9974,
    'Trạm nước UIT': 8161,
  },
  {
    time: '16h',
    'Trạm nước Bách Khoa': 7045,
    'Trạm nước KHTN': 9333,
    'Trạm nước UIT': 8278,
  },
  {
    time: '17h',
    'Trạm nước Bách Khoa': 6679,
    'Trạm nước KHTN': 8728,
    'Trạm nước UIT': 9362,
  },
  {
    time: '18h',
    'Trạm nước Bách Khoa': 7384,
    'Trạm nước KHTN': 9329,
    'Trạm nước UIT': 9487,
  },
  {
    time: '19h',
    'Trạm nước Bách Khoa': 7286,
    'Trạm nước KHTN': 9571,
    'Trạm nước UIT': 8506,
  },
  {
    time: '20h',
    'Trạm nước Bách Khoa': 6367,
    'Trạm nước KHTN': 9887,
    'Trạm nước UIT': 8327,
  },
  {
    time: '21h',
    'Trạm nước Bách Khoa': 6723,
    'Trạm nước KHTN': 8182,
    'Trạm nước UIT': 7639,
  },
  {
    time: '22h',
    'Trạm nước Bách Khoa': 8504,
    'Trạm nước KHTN': 7743,
    'Trạm nước UIT': 9053,
  },
  {
    time: '23h',
    'Trạm nước Bách Khoa': 9328,
    'Trạm nước KHTN': 7321,
    'Trạm nước UIT': 7668,
  },
  {
    time: '24h',
    'Trạm nước Bách Khoa': 9556,
    'Trạm nước KHTN': 9430,
    'Trạm nước UIT': 9655,
  },
];

const dataConsumpPerDayOfWeek = [
  { time: 'Monday', 'Trạm nước Bách Khoa': 6411, 'Trạm nước KHTN': 5742, 'Trạm nước UIT': 6618 },
  { time: 'Tuesday', 'Trạm nước Bách Khoa': 7000, 'Trạm nước KHTN': 6500, 'Trạm nước UIT': 7200 },
  {
    time: 'Wednesday',
    'Trạm nước Bách Khoa': 7200,
    'Trạm nước KHTN': 6800,
    'Trạm nước UIT': 7500,
  },
  {
    time: 'Thursday',
    'Trạm nước Bách Khoa': 6800,
    'Trạm nước KHTN': 6200,
    'Trạm nước UIT': 6900,
  },
  { time: 'Friday', 'Trạm nước Bách Khoa': 6900, 'Trạm nước KHTN': 6300, 'Trạm nước UIT': 7000 },
  { time: 'Saturday', 'Trạm nước Bách Khoa': 7100, 'Trạm nước KHTN': 6500, 'Trạm nước UIT': 7300 },
  { time: 'Sunday', 'Trạm nước Bách Khoa': 7300, 'Trạm nước KHTN': 6700, 'Trạm nước UIT': 7500 },
];

const dataConsumpPerDayOfMonth = [
  {
    time: 'Monday',
    'Trạm nước Bách Khoa': 6411,
    'Trạm nước KHTN': 5742,
    'Trạm nước UIT': 6618,
  },
  { time: 'Tuesday', 'Trạm nước Bách Khoa': 7000, 'Trạm nước KHTN': 6500, 'Trạm nước UIT': 7200 },
  {
    time: 'Wednesday',
    'Trạm nước Bách Khoa': 7200,
    'Trạm nước KHTN': 6800,
    'Trạm nước UIT': 7500,
  },
  {
    time: 'Thursday',
    'Trạm nước Bách Khoa': 6800,
    'Trạm nước KHTN': 6200,
    'Trạm nước UIT': 6900,
  },
  { time: 'Friday', 'Trạm nước Bách Khoa': 6900, 'Trạm nước KHTN': 6300, 'Trạm nước UIT': 7000 },
  { time: 'Saturday', 'Trạm nước Bách Khoa': 7100, 'Trạm nước KHTN': 6500, 'Trạm nước UIT': 7300 },
  { time: 'Sunday', 'Trạm nước Bách Khoa': 7300, 'Trạm nước KHTN': 6700, 'Trạm nước UIT': 7500 },
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
    <div className="h-[300px] px-4">
      <h2 className="text-[#4285f4] text-2xl font-bold mb-6">Biểu đồ tổng lượng nước tiêu thụ</h2>
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
          <Line
            type="monotone"
            dataKey="Trạm nước Bách Khoa"
            stroke="#4285f4"
            activeDot={{ r: 8 }}
            name="Trạm nước Bách Khoa"
          />
          <Line type="monotone" dataKey="Trạm nước KHTN" stroke="#82ca9d" activeDot={{ r: 8 }} name="Trạm nước KHTN" />
          <Line type="monotone" dataKey="Trạm nước UIT" stroke="#ffc658" activeDot={{ r: 8 }} name="Trạm nước UIT" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default React.memo(Graph);

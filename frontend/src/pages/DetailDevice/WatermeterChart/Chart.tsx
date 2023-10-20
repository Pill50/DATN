import React from 'react';
import './Chart.scss';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import SelectOption from '@/components/SelectOption/SelectOption';

const WaterMeterPerHour = [
  {
    time: '1h',
    value: 4000,
  },
  {
    time: '2h',
    value: 5788,
  },
  {
    time: '3h',
    value: 6565,
  },
  {
    time: '4h',
    value: 2323,
  },
  {
    time: '5h',
    value: 4000,
  },
  {
    time: '6h',
    value: 2323,
  },
  {
    time: '7h',
    value: 3452,
  },
  {
    time: '8h',
    value: 1212,
  },
  {
    time: '9h',
    value: 7457,
  },
  {
    time: '10h',
    value: 5656,
  },
  {
    time: '11h',
    value: 4000,
  },
  {
    time: '12h',
    value: 3434,
  },
];
const dayOptions = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

const WaterMeterChart: React.FC = () => {
  return (
    <div className="chart">
      <div className="chart__option">
        <p className="chart__title">Hourly water meter chart</p>
        <SelectOption label={'Day'} options={dayOptions} />
      </div>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={WaterMeterPerHour}
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
          <Line type="monotone" dataKey="value" stroke="#8884d8" activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default WaterMeterChart;

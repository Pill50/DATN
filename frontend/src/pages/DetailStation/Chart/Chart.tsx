import React from 'react';
import './Chart.scss';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import SelectOption from '@/components/SelectOption/SelectOption';

const WaterFlowPerHour = [
  {
    time: '0h',
    value: 3434,
  },
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
  {
    time: '13h',
    value: 4000,
  },
  {
    time: '14h',
    value: 5788,
  },
  {
    time: '15h',
    value: 6565,
  },
  {
    time: '16h',
    value: 2323,
  },
  {
    time: '17h',
    value: 4000,
  },
  {
    time: '18h',
    value: 2323,
  },
  {
    time: '19h',
    value: 3452,
  },
  {
    time: '20h',
    value: 1212,
  },
  {
    time: '21h',
    value: 7457,
  },
  {
    time: '22h',
    value: 5656,
  },
  {
    time: '23h',
    value: 4000,
  },
];
const dayOptions = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const Chart: React.FC = () => {
  return (
    <div className="chart">
      <div className="chart__option">
        <p className="chart__title">Hourly water flow chart</p>
        <SelectOption label={'Day'} options={dayOptions} />
      </div>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={WaterFlowPerHour}
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

export default Chart;

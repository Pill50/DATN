import React from 'react';
import './Graph.scss';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import CustomTooltip from '@/utils/CustomTooltip/CustomTooltip';

// MOCK DATA
import { totalWaterSuply } from '../../../Mockdata/WaterConsumption';
import SelectOption from '@/components/SelectOption/SelectOption';
const dayOptions = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const WaterConsumptionGraph: React.FC = () => {
  return (
    <div className="graph">
      <div className="graph__option">
        <p className="graph__title">Bar chart of total water consumption per hour (m3/hour)</p>
        <SelectOption label={'Day'} options={dayOptions} />
      </div>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={totalWaterSuply}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip content={<CustomTooltip />} />
          <Legend />
          <Bar dataKey="dailyConsumption" fill="#4285f4" />
          {/* <Bar dataKey="Station2" fill="#0f9c58" />
          <Bar dataKey="Station3" fill="#f4b301" /> */}
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default WaterConsumptionGraph;

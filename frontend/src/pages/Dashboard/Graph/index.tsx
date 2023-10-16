import React from 'react';
import './Graph.scss';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import CustomTooltip from '@/utils/CustomTooltip/CustomTooltip';

// MOCK DATA
import { data } from '../../../Mockdata/WaterConsumption';

const WaterConsumptionGraph: React.FC = () => {
  return (
    <div className="graph">
      <p className="graph__title">The water consumption chart for the area (m3/month)</p>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
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
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip content={<CustomTooltip />} />
          <Legend />
          <Bar dataKey="Area1" fill="#4285f4" />
          <Bar dataKey="Area2" fill="#0f9c58" />
          <Bar dataKey="Area3" fill="#f4b301" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default WaterConsumptionGraph;

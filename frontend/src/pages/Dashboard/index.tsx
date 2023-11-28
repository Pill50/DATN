import React from 'react';
import Sidebar from '@/components/Sidebar/Sidebar';
import CardList from './components/CardList';
import MapComponent from './components/Map';
import Graph from './components/Graph';
import WaterConsumptionGraph from './components/BarChart';

const Dashboard: React.FC = () => {
  return (
    <div className="flex">
      {/* <Sidebar /> */}
      <div className="p-3 flex-1">
        <h1 className="flex justify-center text-[#4285f4] text-3xl font-semibold">BẢNG ĐIỀU KHIỂN</h1>
        <MapComponent />
        <div className="flex justify-center gap-4 my-4">
          <CardList />
        </div>
        <div className="flex gap-4">
          <Graph />
          <WaterConsumptionGraph />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

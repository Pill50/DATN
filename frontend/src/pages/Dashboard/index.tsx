import React, { useEffect, useState } from 'react';
import Sidebar from '@/components/Sidebar/Sidebar';
import CardList from './components/CardList';
import MapComponent from './components/Map';
import Graph from './components/Graph';
import Notification from './components/Notification';
import Top10Consumption from './components/Top10';
import axios from 'axios';
import { Device } from '@/types/device';

const Dashboard: React.FC = () => {
  const [cardListData, setCardListData] = useState({
    totalWaterMeters: 0,
    totalPulse: 0,
    totalDigital: 0,
    statusActive: 0,
  });

  const [deviceList, setDeviceList] = useState<Device[]>();

  useEffect(() => {
    const fetchData = async () => {
      const dataResponse = (await axios.get('http://localhost:8080/water-meter/list')).data;

      const cardListObj = {
        totalWaterMeters: dataResponse.totalWaterMeters,
        totalPulse: dataResponse.totalPulse,
        totalDigital: dataResponse.totalDigital,
        statusActive: dataResponse.statusActive,
      };

      setCardListData(cardListObj);
      setDeviceList(dataResponse.devices);
    };

    fetchData();
  }, []);

  return (
    <div className="flex">
      <Sidebar />
      <div className="p-3 flex-1">
        <h1 className="flex justify-center text-[#4285f4] text-3xl font-bold">BẢNG ĐIỀU KHIỂN</h1>
        <div className="flex justify-center gap-4 my-4">
          <CardList cardListData={cardListData} />
        </div>
        {deviceList && <MapComponent deviceList={deviceList} />}
        <div className="grid grid-cols-3 gap-4 mt-10 mb-[100px]">
          <div className="col-span-2 shadow-lg pb-[200px] rounded-md pt-2">
            <Graph />
          </div>
          <Notification />
        </div>
        <Top10Consumption />
      </div>
    </div>
  );
};

export default Dashboard;

import React, { useState } from 'react';
import './Dashboard.scss';
import Sidebar from '@/components/Sidebar/Sidebar';
import Cards from './Card/Cards';
import { TotalWaterSuplyIcon, DeviceIcon, NotificationIcon } from '@/components/Icons';
import WaterConsumptionGraph from './Graph';
import MapComponent from '@/components/Map';

const Dashboard: React.FC = () => {
  const [totalWaterSupply, setTotalWaterSupply] = useState<number>(3);
  const [devices, setDevices] = useState<number>(20);
  const [notifications, setNotifications] = useState<number>(3);
  const [consumePerDay, setConsumePerDay] = useState<number>(30000);
  const [consumePerWeek, setConsumePerWeek] = useState<number>(381928129);

  const cardList = [
    {
      title: 'WATER SUPPLY STATIONS',
      icon: TotalWaterSuplyIcon,
      color: 'green',
      value: totalWaterSupply,
    },
    {
      title: 'DEVICES',
      icon: DeviceIcon,
      color: 'yellow',
      value: devices,
    },
    {
      title: 'NOTIFICATIONS',
      icon: NotificationIcon,
      color: 'red',
      value: notifications,
    },
    {
      title: 'CONSUMED PER DAY (m3)',
      color: 'green',
      value: consumePerDay,
    },
    {
      title: 'CONSUMED PER WEEK (m3)',
      color: 'yellow',
      value: consumePerWeek,
    },
  ];

  return (
    <div className="dashboard">
      <Sidebar />
      <div className="content">
        <h1 className="title">MY DASHBOARD</h1>
        <Cards cardList={cardList} />
        <div className="statistic">
          <MapComponent />
        </div>
        <WaterConsumptionGraph />
      </div>
    </div>
  );
};

export default Dashboard;

import React, { useState } from 'react';
import './Dashboard.scss';
import Sidebar from '@/components/Sidebar/Sidebar';
import Cards from './Card/Cards';
import { AreaIcon, DeviceIcon, NotificationIcon } from '@/components/Icons';

const Dashboard: React.FC = () => {
  const [area, setArea] = useState<number>(10);
  const [devices, setDevices] = useState<number>(20);
  const [notifications, setNotifications] = useState<number>(30);

  const cardList = [
    {
      title: 'AREA',
      icon: AreaIcon,
      color: 'green',
      value: area,
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
  ];

  return (
    <div className="dashboard">
      <Sidebar />
      <div className="content">
        <h1 className="title">MY DASHBOARD</h1>
        <Cards cardList={cardList} />
        {/* GRAPH */}
        <div className="graph">
          <p className="graph__title">The water consumption chart for the area (m3/month)</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

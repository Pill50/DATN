import React from 'react';
import './Dashboard.scss';
import Sidebar from '@/components/Sidebar/Sidebar';

const Dashboard: React.FC = () => {
  return (
    <div className="dashboard">
      <Sidebar />
    </div>
  );
};

export default Dashboard;

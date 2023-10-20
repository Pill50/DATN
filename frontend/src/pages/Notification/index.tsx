import React from 'react';
import './Notification.scss';
import Sidebar from '@/components/Sidebar/Sidebar';
import Card from './Card/Card';

// MOCK DATA
import { notiList } from '@/Mockdata/NotiList';
import { NotificationType } from '@/types/notification';
import Button from '@/components/Button';

const Notification: React.FC = () => {
  return (
    <div className="notification">
      <Sidebar />
      <div className="content">
        <h1 className="title">NOTIFICATION</h1>
        <div className="notification__cards">
          <Button secondary>CLEAR ALL</Button>
          {notiList.map((noti: NotificationType) => {
            return <Card key={noti.id} content={noti} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Notification;

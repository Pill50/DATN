import React from 'react';
import Sidebar from '@/components/Sidebar/Sidebar';
import Card from './components/Card';

// MOCK DATA
import { notiList } from '@/Mockdata/NotiList';
import { NotificationType } from '@/types/notification';

const Notification: React.FC = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex flex-col justify-center items-center flex-1 p-4">
        <h1 className="flex justify-center text-[#4285f4] text-3xl font-semibold">THÔNG BÁO</h1>
        <div className="flex flex-col justify-center items-center gap-2">
          {notiList.map((noti: NotificationType) => {
            return <Card key={noti.id} content={noti} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Notification;

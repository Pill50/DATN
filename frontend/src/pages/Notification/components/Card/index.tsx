import { CloseIcon } from '@/components/Icons';
import React from 'react';

type Notification = {
  id: number;
  device: {
    name: string;
    address: string;
  };
  time: string;
  message: string;
};

interface CardProp {
  content: Notification;
}

const Card: React.FC<CardProp> = ({ content }) => {
  return (
    <div className="w-[700px] border-[1px] border-[#4285f4] rounded-md p-4 relative flex justify-between">
      <div className="cursor-pointer absolute top-0 right-[2px]">
        <CloseIcon />
      </div>
      <div className="font-semibold italic">
        <p>
          Tên trạm nước: <span className="text-green-500">{content.device.name}</span>
        </p>
        <p>
          Địa chỉ: <span className="text-green-500">{content.device.address}</span>
        </p>
        <p>
          Nội dung: <span className="text-green-500">{content.message}</span>
        </p>
      </div>
      <div className="font-semibold italic">
        <p>{content.time}</p>
      </div>
    </div>
  );
};

export default Card;

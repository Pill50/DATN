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
    <div className="notification__card">
      <div className="notification__close">
        <CloseIcon />
      </div>
      <div className="notification__card--info">
        <p>
          Station: <span>{content.device.name}</span>
        </p>
        <p>
          Address: <span>{content.device.address}</span>
        </p>
        <p>
          Message: <span>{content.message}</span>
        </p>
      </div>
      <div className="notification__card--time">
        <p>{content.time}</p>
      </div>
    </div>
  );
};

export default Card;

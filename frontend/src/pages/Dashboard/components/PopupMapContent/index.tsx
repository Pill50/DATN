import React from 'react';
import ArrowIcon from '@assets/images/arrow.png';
import { Link } from 'react-router-dom';

type Marker = {
  id: string;
  name: string;
  address: string;
  latitude: number;
  longitude: number;
  waterConsumptionPerDay: number;
  lifetime: string;
  totalDevice?: number;
};

interface PopupContentProp {
  info: Marker;
}

const PopupMapContent: React.FC<PopupContentProp> = ({ info }) => {
  return (
    <div className="text-xs flex flex-col gap-1">
      <p className="font-semibold text-[#DB4437]">Tên: {info.name}</p>
      <p>Địa chỉ: {info.address}</p>
      <p>Lưu lượng nước trong ngày: {info.waterConsumptionPerDay} m³</p>
      <Link to={`/stations/${info.id}`} className="text-[#4285f4] cursor-pointer flex justify-end items-center gap-1">
        Xem chi tiết <img src={ArrowIcon} alt="->" className="w-4 h-4" />
      </Link>
    </div>
  );
};

export default PopupMapContent;

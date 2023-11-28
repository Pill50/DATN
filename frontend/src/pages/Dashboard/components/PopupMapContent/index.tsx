import React from 'react';
import { useNavigate } from 'react-router-dom';
import ArrowIcon from '@assets/images/arrow.png';

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
  const navigate = useNavigate();

  const handleViewDetailInfoMarker = () => {
    navigate(`/station/${info.id}`);
  };

  return (
    <div onClick={handleViewDetailInfoMarker} className="text-xs flex flex-col gap-1">
      <p className="font-semibold text-[#DB4437]">Tên: {info.name}</p>
      <p>Địa chỉ: {info.address}</p>
      <p>Lưu lượng nước trong ngày: {info.waterConsumptionPerDay} m³</p>
      <p className="text-[#4285f4] cursor-pointer flex justify-end items-center gap-1">
        Xem chi tiết <img src={ArrowIcon} alt="->" className="w-4 h-4" />
      </p>
    </div>
  );
};

export default PopupMapContent;

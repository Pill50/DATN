import React from 'react';
import ArrowIcon from '@assets/images/arrow.png';
import { Link } from 'react-router-dom';
import { Device } from '@/types/device';
interface PopupContentProp {
  info: Device;
}

const PopupMapContent: React.FC<PopupContentProp> = ({ info }) => {
  return (
    <div className="text-xs flex flex-col gap-1">
      <p>Địa chỉ: {info.address}</p>
      <p>Số nguồn con: {info.children.length} nguồn</p>
      <Link
        to={`/stations/${info.waterMeterId}`}
        className="text-[#4285f4] cursor-pointer flex justify-end items-center gap-1"
      >
        Xem chi tiết <img src={ArrowIcon} alt="->" className="w-4 h-4" />
      </Link>
    </div>
  );
};

export default PopupMapContent;

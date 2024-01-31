import React, { useState } from 'react';
import WaterMeterImg from '@assets/images/waterMeter.png';
import ElectricWaterMeterImg from '@assets/images/electricWaterMeter.png';
import { StatusIcon, WaterStationIcon } from '@/components/Icons';

interface CardListProps {
  cardListData: {
    totalWaterMeters: number;
    totalPulse: number;
    totalDigital: number;
    statusActive: number;
  };
}
const CardList: React.FC<CardListProps> = ({ cardListData }) => {
  return (
    <div className="col-span-2 grid grid-cols-4 gap-4 mb-10">
      <div className="p-6 flex justify-center items-center gap-4 rounded-lg shadow-md bg-green-200">
        <div className="flex flex-col gap-2">
          <p className="text-[#666] text-lg font-semibold text-center">Số trạm nước hiện có</p>
          <p className="text-[#333] text-4xl font-bold">3 trạm</p>
        </div>
        <WaterStationIcon className="w-12 h-12" />
      </div>
      <div className="p-6 flex justify-center items-center gap-4 rounded-lg shadow-md bg-blue-200">
        <div className="flex flex-col gap-2">
          <p className="text-[#666] text-lg font-semibold text-center">Đồng hồ cơ</p>
          <p className="text-[#333] text-4xl font-bold">3 cái</p>
        </div>
        <img src={WaterMeterImg} alt="Đồng hồ cơ" className="w-16 h-16" />
      </div>
      <div className="p-6 flex justify-center items-center gap-4 rounded-lg shadow-md bg-red-200">
        <div className="flex flex-col gap-2">
          <p className="text-[#666] text-lg font-semibold text-center">Đồng hồ số</p>
          <p className="text-[#333] text-4xl font-bold">{cardListData.totalPulse} cái</p>
        </div>
        <img src={ElectricWaterMeterImg} alt="Đồng hồ số" className="w-24 h-12" />
      </div>
      <div className="p-6 flex justify-center items-center gap-4 rounded-lg shadow-md bg-yellow-100">
        <div className="flex flex-col gap-2">
          <p className="text-[#666] text-lg font-semibold text-center">Số trạm nước đang hoạt động</p>
          <p className="text-[#333] text-4xl font-bold">3 trạm</p>
        </div>
        <StatusIcon className="w-12 h-14" />
      </div>
    </div>
  );
};

export default CardList;

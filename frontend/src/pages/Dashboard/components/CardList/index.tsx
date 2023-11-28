import React, { useState } from 'react';
import WaterMeterImg from '@assets/images/waterMeter.jpg';
import ElectricWaterMeterImg from '@assets/images/electricWaterMeter.png';
import staticDayImg from '@assets/images/staticDay.png';
import staticWeekImg from '@assets/images/staticWeak.jpg';
import staticMonthImg from '@assets/images/staticMonth.png';

const CardList: React.FC = () => {
  const [totalWaterStation, setTotalWaterStation] = useState<number>(10);
  const [totalWaterMeter, setTotalWaterMeter] = useState<number>(7);
  const [totalWaterElectric, setTotalWaterElectric] = useState<number>(3);
  const [activeStation, setActiveStation] = useState<number>(20);
  const [consumePerDay, setConsumePerDay] = useState<number>(30000);
  const [consumePerWeek, setConsumePerWeek] = useState<number>(100000);
  const [consumePerMonth, setConsumePerMonth] = useState<number>(2782472384);

  const cardList = [
    {
      title: 'Số trạm nước hiện có',
      value: totalWaterStation,
    },
    {
      title: 'Số trạm nước đang hoạt động',
      value: activeStation,
    },
    {
      title: 'Tổng lưu lượng nước trong ngày (m³)',
      value: consumePerDay,
      thumbnail: staticDayImg,
    },
    {
      title: 'Tổng lưu lượng nước trong tháng (m³)',
      value: consumePerMonth,
      thumbnail: staticMonthImg,
    },
    {
      title: 'Số đồng hồ cơ',
      value: totalWaterMeter,
      thumbnail: WaterMeterImg,
    },
    {
      title: 'Số đồng hồ số',
      value: totalWaterElectric,
      thumbnail: ElectricWaterMeterImg,
    },
    {
      title: 'Tổng lưu lượng nước trong tuần (m³)',
      value: consumePerWeek,
      thumbnail: staticWeekImg,
    },
  ];

  return (
    <div className="col-span-2 grid grid-cols-4 gap-4 mb-10">
      {cardList.map((cardItem, index: number) => (
        <div
          className={`p-6  flex justify-center items-center gap-4 border-[1px] rounded-lg shadow-md 
          ${index === 3 ? 'row-span-2 bg-blue-50/40' : ''}
          ${index === 6 ? 'flex-row' : ''}`}
          key={index}
        >
          <div className="">
            {cardItem.thumbnail ? (
              <img
                src={cardItem.thumbnail}
                alt={cardItem.title}
                className={`w-[100px] h-auto ${index === 2 || index === 3 || index === 6 ? 'scale-150' : ''}`}
              />
            ) : (
              <></>
            )}
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <p className="text-[#4285f4] text-lg font-semibold text-center">{cardItem.title}</p>
            <p className="text-[#0F9C58] text-4xl font-bold">{cardItem.value}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardList;

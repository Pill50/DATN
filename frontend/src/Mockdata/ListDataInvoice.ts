import WaterMeterImg from '@assets/images/waterMeter.png';
import WaterMeterElectricImg from '@assets/images/electricWaterMeter.png';

export const dataInvoice = [
  {
    id: 1,
    name: 'Đai học Bách Khoa',
    address: '268, Lý Thường Kiệt, Quận 10',
    status: 2,
    consumePerMonth: 1000,
    thumbnail: WaterMeterImg,
    created_at: '1/1/2023',
  },
  {
    id: 2,
    name: 'Đai học Khoa Học Tự Nhiên',
    address: '168, Lý Thường Kiệt, Quận 5',
    status: 1,
    consumePerMonth: 2300,
    thumbnail: WaterMeterImg,
    created_at: '1/1/2023',
  },
  {
    id: 3,
    name: 'Đai học Sư Phạm Kỹ Thuật',
    address: '1, Võ Văn Ngân, Thủ Đức',
    status: 0,
    consumePerMonth: 550,
    thumbnail: WaterMeterElectricImg,
    created_at: '1/1/2023',
  },
];

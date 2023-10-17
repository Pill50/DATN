import React from 'react';
import './DetailArea.scss';
import Sidebar from '@/components/Sidebar/Sidebar';
import { useParams } from 'react-router-dom';
import ModalEditArea from './ModalEdit/ModalEdit';
import WaterConsumptionGraph from './Graph';
import Chart from './Chart/Chart';

// MOCK DATA
// import { dataArea } from '@/Mockdata/ListDataArea';

// type Area = {
//   id: number;
//   station: string;
//   devices: number;
//   age: number;
// };

const DetailArea: React.FC = () => {
  const { areaID } = useParams();
  console.log(areaID);
  return (
    <div className="detail_area">
      <Sidebar />
      <div className="content">
        <h1 className="title">INFORMATION OF AREA</h1>
        <ModalEditArea areaID={areaID as string} />
        <div className="detail_area__content">
          <div className="detail_area__info">
            <p className="detail_area__address">Address: 45 Tan Lap, Di An</p>
            <p className="detail_area__devices">Total devices: 10</p>
            <p className="detail_area__totalWater">Total water supply: 10000 m3/month</p>
            <p className="detail_area__threshold">Threshold: 12000 m3/month</p>
            <p className="detail_area__install">Installation at: 12/12/2023</p>
            <p className="detail_area__status">Status: Good</p>
          </div>
          <WaterConsumptionGraph />
          <Chart />
        </div>
      </div>
    </div>
  );
};

export default DetailArea;

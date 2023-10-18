import React from 'react';
import './DetailStation.scss';
import Sidebar from '@/components/Sidebar/Sidebar';
import { useParams } from 'react-router-dom';
import ModalEditStation from './ModalEdit/ModalEdit';
import WaterConsumptionGraph from './Graph';
import Chart from './Chart/Chart';
import ModalDelete from '@/components/ModalDelete/ModalDelete';

const DetailStation: React.FC = () => {
  const { stationID } = useParams();
  console.log(stationID);

  return (
    <div className="detail_station">
      <Sidebar />
      <div className="content">
        <h1 className="title">INFORMATION OF STATION</h1>
        <div className="detail_station__action">
          <ModalEditStation stationID={stationID as string} />
          <ModalDelete itemID={stationID as string} />
        </div>
        <div className="detail_station__content">
          <div className="detail_station__info">
            <p className="detail_station__address">Address: 45 Tan Lap, Di An</p>
            <p className="detail_station__devices">Total devices: 10</p>
            <p className="detail_station__totalWater">Total water supply: 10000 m3/month</p>
            <p className="detail_station__threshold">Threshold: 12000 m3/month</p>
            <p className="detail_station__install">Installation at: 12/12/2023</p>
            <p className="detail_station__status">Status: Good</p>
          </div>
          <WaterConsumptionGraph />
          <Chart />
        </div>
      </div>
    </div>
  );
};

export default DetailStation;

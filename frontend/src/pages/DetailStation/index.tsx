import React from 'react';
import './DetailStation.scss';
import Sidebar from '@/components/Sidebar/Sidebar';
import { useParams } from 'react-router-dom';
import WaterConsumptionGraph from './Graph';
import Chart from './Chart/Chart';
import ModalDelete from '@/components/ModalDelete/ModalDelete';
import ModalEditDevice from './ModalEdit/ModalEdit';

const DetailStation: React.FC = () => {
  const { stationID } = useParams();
  console.log(stationID);

  return (
    <div className="detail_station">
      <Sidebar />
      <div className="content">
        <h1 className="title">INFORMATION OF STATION</h1>
        <div className="detail_station__action">
          <ModalEditDevice stationID={stationID as string} />
          <ModalDelete itemID={stationID as string} />
        </div>
        <div className="detail_station__content">
          <div className="detail_station__info">
            <p className="detail_station__address">Address: 268 Ly Thuong Kiet, Q10</p>
            <p className="detail_station__devices">Total devices: 3</p>
            <p className="detail_station__totalWater">Total water supply: 10000 m3/month</p>
            <p className="detail_station__threshold">Threshold: 12000 m3/month</p>
            <p className="detail_station__install">Installation at: 12/12/2022</p>
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

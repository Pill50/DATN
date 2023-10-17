import React from 'react';
import './Device.scss';
import Sidebar from '@/components/Sidebar/Sidebar';
import SelectOption from '@/components/SelectOption/SelectOption';
import ModalCreateDevice from './ModalCreateDevice/ModalCreateDevice';
import DataTable from './Table/Table';

// MOCK DATA
import { dataDevice } from '@/Mockdata/ListDataDevice';
import Chart from './Chart/Chart';

const Device: React.FC = () => {
  return (
    <div className="device">
      <Sidebar />
      <div className="content">
        <h1 className="title">DEVICE</h1>
        <div className="device__action">
          <SelectOption />
          <SelectOption />
          <ModalCreateDevice />
        </div>
        <div className="device__content">
          <div className="device__info">
            <p>Total water flow per month: 100m3</p>
            <p>Total devices: 5</p>
            <p>Threshold: 200m3</p>
            <p>Status: Good / Leak water / Overflow </p>
            <DataTable data={dataDevice} />
          </div>
          <div className="device__map">THIS IS MAP</div>
        </div>
        <div className="device__chart">
          <div className="device__chart--info">
            <h3>
              AREA: <span>N1</span>
            </h3>
            <SelectOption />
          </div>
          <Chart />
          <p className="device__chart--title">The water consumption chart for the area (m3/month)</p>
        </div>
      </div>
    </div>
  );
};

export default Device;
import React from 'react';
import './Device.scss';
import Sidebar from '@/components/Sidebar/Sidebar';
import SelectOption from '@/components/SelectOption/SelectOption';
import ModalCreateDevice from './ModalCreateDevice/ModalCreateDevice';
import DataTable from './Table/Table';

// MOCK DATA
import { dataDevice } from '@/Mockdata/ListDataDevice';
const stationOptions = ['Ward 1', 'Ward 2', 'Ward 3', 'Ward 4', 'Ward 5'];

const Device: React.FC = () => {
  return (
    <div className="device">
      <Sidebar />
      <div className="content">
        <h1 className="title">DEVICE</h1>
        <div className="device__action">
          <SelectOption label="Station" options={stationOptions} />
          <ModalCreateDevice />
        </div>
        <div className="device__content">
          <div className="device__info">
            <DataTable data={dataDevice} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Device;

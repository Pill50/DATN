import React from 'react';
import './Station.scss';
import Sidebar from '@/components/Sidebar/Sidebar';
import SelectOption from '../../components/SelectOption/SelectOption';
import DataTable from './Table/Table';
import ModalCreateStation from './ModalCreate/ModalCreate';

// MOCK DATA
import { dataStation } from '@/Mockdata/ListDataStation';
const stationOptions = ['Ward 1', 'Ward 2', 'Ward 3', 'Ward 4', 'Ward 4'];

type Station = {
  id: number;
  station: string;
  devices: number;
  age: number;
};

const Station: React.FC = () => {
  return (
    <div className="station">
      <Sidebar />
      <div className="content">
        <h1 className="title">STATION</h1>
        <div className="station__action">
          <SelectOption label="Station" options={stationOptions} />
          <ModalCreateStation />
        </div>
        <div className="station__content">
          <div className="station__table">
            <DataTable data={dataStation} />
          </div>
          <div className="station__map">THIS IS MAP</div>
        </div>
      </div>
    </div>
  );
};

export default Station;

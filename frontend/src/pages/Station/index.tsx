import React, { useState } from 'react';
import './Station.scss';
import Sidebar from '@/components/Sidebar/Sidebar';
import SelectOption from '../../components/SelectOption/SelectOption';
import DataTable from './Table/Table';
import ModalCreateStation from './ModalCreate/ModalCreate';

// MOCK DATA
import { dataStation } from '@/Mockdata/ListDataStation';
const stationOptions = ['All', 'Station 1', 'Station 2', 'Station 3'];

const Station: React.FC = () => {
  return (
    <div className="station">
      <Sidebar />
      <div className="content">
        <h1 className="title">STATION</h1>
        <div className="station__action">
          <SelectOption label="Station" options={stationOptions} />
          <ModalCreateStation />
          <button>UPDATE NEW DATA</button>
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

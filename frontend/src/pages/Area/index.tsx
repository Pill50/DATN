import React from 'react';
import './Area.scss';
import Sidebar from '@/components/Sidebar/Sidebar';
import SelectOption from '../../components/SelectOption/SelectOption';
import DataTable from './Table/Table';
import ModalCreateArea from './ModalCreate/ModalCreate';

// MOCK DATA
import { dataArea } from '@/Mockdata/ListDataArea';
const areaOptions = ['Ward 1', 'Ward 2', 'Ward 3', 'Ward 4', 'Ward 4'];

type Area = {
  id: number;
  station: string;
  devices: number;
  age: number;
};

const Area: React.FC = () => {
  return (
    <div className="area">
      <Sidebar />
      <div className="content">
        <h1 className="title">AREA</h1>
        <div className="area__action">
          <SelectOption label="Area" options={areaOptions} />
          <ModalCreateArea />
        </div>
        <div className="area__content">
          <div className="area__table">
            <DataTable data={dataArea} />
          </div>
          <div className="area__map">THIS IS MAP</div>
        </div>
      </div>
    </div>
  );
};

export default Area;

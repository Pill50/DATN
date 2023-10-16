import React from 'react';
import './Area.scss';
import Sidebar from '@/components/Sidebar/Sidebar';
import SelectOption from './SelectOption/SelectOption';
import DataTable from './Table/Table';
import BasicModal from './ModalCreate/ModalCreate';

const Area: React.FC = () => {
  return (
    <div className="area">
      <Sidebar />
      <div className="content">
        <h1 className="title">AREA</h1>
        <div className="area__action">
          <SelectOption />
          <BasicModal />
        </div>
        <div className="area__content">
          <div className="area__table">
            <DataTable />
          </div>
          <div className="area__map">THIS IS MAP</div>
        </div>
      </div>
    </div>
  );
};

export default Area;

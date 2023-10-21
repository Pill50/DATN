import React from 'react';
import './DetailDevice.scss';
import Sidebar from '@/components/Sidebar/Sidebar';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import { useParams } from 'react-router-dom';
import Chart from './Chart/Chart';
import WaterMeterChart from './WatermeterChart/Chart';
import ModalDelete from '@/components/ModalDelete/ModalDelete';
import ModalEditDevice from './ModalEditDevice/ModalEditDevice';

const DetailDevice: React.FC = () => {
  const { deviceID } = useParams();

  return (
    <div className="detail_device">
      <Sidebar />
      <div className="content">
        <h1 className="title">INFORMATION OF DEVICE</h1>
        <div className="detail_device__action">
          <ModalDelete itemID={deviceID as string} />
          <ModalEditDevice deviceID={deviceID as string} />
        </div>
        <div className="detail_device__content">
          <div className="detail_device__block">
            <div className="detail_device__info">
              <p className="detail_device__address">Address: Khoa KHMT</p>
              <p className="detail_device__devices">New water meter: 1000</p>
              <p className="detail_device__totalWater">New water flow: 1234</p>
              <p className="detail_device__install">Installation at: 12/12/2022</p>
              <p className="detail_device__threshold">Pin percent: 90</p>
              <p className="detail_device__status">Status: Good</p>
            </div>
            <div className="detail_device__relay">
              <FormGroup>
                <FormControlLabel control={<Switch defaultChecked />} label="Relay Status" />
              </FormGroup>
            </div>
          </div>
          <WaterMeterChart />
          <Chart />
        </div>
      </div>
    </div>
  );
};

export default DetailDevice;

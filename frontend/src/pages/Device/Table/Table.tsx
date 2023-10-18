import * as React from 'react';
import './Table.scss';
import { useNavigate } from 'react-router-dom';
import { DeviceType } from '@/types/device';

interface DataTableProps {
  data: DeviceType[];
}

const DataTable: React.FC<DataTableProps> = ({ data }) => {
  const navigate = useNavigate();
  const tableHead: string[] = Object.keys(data[0]);

  const handleViewDeviceDetail = (id: number) => {
    console.log('Edit id: ', id);
    navigate(`/device/${id}`);
  };

  return (
    <table>
      <thead>
        <tr>
          {tableHead.map((data, index) => {
            return <th key={index}>{data.toUpperCase()}</th>;
          })}
        </tr>
      </thead>
      <tbody>
        {data.map((deviceItem: DeviceType, index: number) => {
          return (
            <tr key={index} onClick={() => handleViewDeviceDetail(deviceItem.id)}>
              <td>{deviceItem.id}</td>
              <td>{deviceItem.address}</td>
              <td>{deviceItem.waterMeter}</td>
              <td>{deviceItem.waterFlow}</td>
              <td>{deviceItem.installationAt}</td>
              <td>{deviceItem.pinPercent}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default DataTable;

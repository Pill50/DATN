import * as React from 'react';
import './Table.scss';
import { DeleteIcon, EditIcon } from '@/components/Icons';

type Device = {
  id: number;
  address: string;
  water_meter: number;
  water_flow: number;
  installation: string;
  pin_percent: number;
};

interface DataTableProps {
  data: Device[];
}

const DataTable: React.FC<DataTableProps> = ({ data }) => {
  const tableHead: string[] = Object.keys(data[0]);
  tableHead.push('action');

  const handleViewDeviceDetail = (id: number) => {
    console.log('Edit id: ', id);
  };

  const handleDeleteDevice = (id: number) => {
    console.log('Delete id: ', id);
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
        {data.map((deviceItem: Device, index: number) => {
          return (
            <tr key={index}>
              <td>{deviceItem.id}</td>
              <td>{deviceItem.address}</td>
              <td>{deviceItem.water_meter}</td>
              <td>{deviceItem.water_flow}</td>
              <td>{deviceItem.installation}</td>
              <td>{deviceItem.pin_percent}</td>
              <td>
                <span onClick={() => handleViewDeviceDetail(deviceItem.id)}>
                  <EditIcon />
                </span>
                <span onClick={() => handleDeleteDevice(deviceItem.id)}>
                  <DeleteIcon />
                </span>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default DataTable;

import * as React from 'react';
import './Table.scss';
import { useNavigate } from 'react-router-dom';
import { StationType } from '@/types/station';

interface DataTableProps {
  data: StationType[];
}

const DataTable: React.FC<DataTableProps> = ({ data }) => {
  const navigate = useNavigate();
  const handleViewStationDetail = (id: number) => {
    console.log('Edit id: ', id);
    navigate(`/station/${id}`);
  };

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>ADDRESS</th>
          <th>TOTAL WATER SUPPLY</th>
          <th>DEVICES</th>
          <th>INSTALLATION AT</th>
        </tr>
      </thead>
      <tbody>
        {data.map((stationItem: StationType, index: number) => {
          return (
            <tr key={index} onClick={() => handleViewStationDetail(stationItem.id)}>
              <td>{stationItem.id}</td>
              <td>{stationItem.address}</td>
              <td>{stationItem.totalWaterSupply}</td>
              <td>{stationItem.devices}</td>
              <td>{stationItem.installationAt}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default DataTable;

import * as React from 'react';
import './Table.scss';
import { useNavigate } from 'react-router-dom';

type Station = {
  id: number;
  address: string;
  total_water_supply: number;
  devices: number;
  installation_at: string;
};

interface DataTableProps {
  data: Station[];
}

const DataTable: React.FC<DataTableProps> = ({ data }) => {
  const navigate = useNavigate();

  const tableHead: string[] = Object.keys(data[0]);

  const handleViewStationDetail = (id: number) => {
    console.log('Edit id: ', id);
    navigate(`/station/${id}`);
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
        {data.map((stationItem: Station, index: number) => {
          return (
            <tr key={index} onClick={() => handleViewStationDetail(stationItem.id)}>
              <td>{stationItem.id}</td>
              <td>{stationItem.address}</td>
              <td>{stationItem.total_water_supply}</td>
              <td>{stationItem.devices}</td>
              <td>{stationItem.installation_at}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default DataTable;
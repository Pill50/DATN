import * as React from 'react';
import './Table.scss';
import { DeleteIcon, EditIcon } from '@/components/Icons';
import { useNavigate } from 'react-router-dom';

type Area = {
  id: number;
  address: string;
  total_water_supply: number;
  devices: number;
  age: number;
};

interface DataTableProps {
  data: Area[];
}

const DataTable: React.FC<DataTableProps> = ({ data }) => {
  const navigate = useNavigate();

  const tableHead: string[] = Object.keys(data[0]);
  tableHead.push('action');

  const handleViewAreaDetail = (id: number) => {
    console.log('Edit id: ', id);
    navigate(`/area/${id}`);
  };

  const handleDeleteArea = (id: number) => {
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
        {data.map((areaItem: Area, index: number) => {
          return (
            <tr key={index}>
              <td>{areaItem.id}</td>
              <td>{areaItem.address}</td>
              <td>{areaItem.total_water_supply}</td>
              <td>{areaItem.devices}</td>
              <td>{areaItem.age}</td>
              <td>
                <span onClick={() => handleViewAreaDetail(areaItem.id)}>
                  <EditIcon />
                </span>
                <span onClick={() => handleDeleteArea(areaItem.id)}>
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

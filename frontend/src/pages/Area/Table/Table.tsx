import * as React from 'react';
import './Table.scss';
import { DeleteIcon, EditIcon } from '@/components/Icons';

// MOCK DATA
import { dataArea } from '@/Mockdata/ListDataArea';

const handleViewAreaDetail = (id: number) => {
  console.log('Edit id: ', id);
};

const handleDeleteArea = (id: number) => {
  console.log('Delete id: ', id);
};

const DataTable: React.FC = () => {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>NAME</th>
          <th>No DEVICE</th>
          <th>AGE</th>
          <th>ACTION</th>
        </tr>
      </thead>
      <tbody>
        {dataArea.map((areaItem, index) => {
          return (
            <tr key={index}>
              <td>{areaItem.id}</td>
              <td>{areaItem.name}</td>
              <td>{areaItem.numberOfDevice}</td>
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

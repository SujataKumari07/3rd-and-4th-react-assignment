import React from 'react';
import './Table.css';

function Table() {
  
  const tableData = [
    { id: 1, name: 'Sujata Kumari', age: 30, city: 'Kolkata' },
    { id: 2, name: 'Shambhavi Saloni', age: 25, city: 'Ranchi' },
    { id: 3, name: 'Ayush Singh', age: 35, city: 'Bhubaneswar' },
    { id: 4, name: 'Abu Samar', age: 28, city: 'Bangalore' },
    { id: 5, name: 'Sourav Dey', age: 28, city: 'Delhi' },
  ];

  return (
    <div className="table-container">
      <h3 align ="center">USERS TABLE</h3>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>City</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row) => (
            <tr key={row.id}>
              <td>{row.id}</td>
              <td>{row.name}</td>
              <td>{row.age}</td>
              <td>{row.city}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;

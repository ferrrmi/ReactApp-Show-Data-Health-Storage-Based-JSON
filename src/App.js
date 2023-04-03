import logo from './logo.svg';
import './App.css';
import { Table, Container } from 'react-bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './MyTable.css';
import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState([]);
  const [sortOrder, setSortOrder] = useState(1);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('merge_health_storage.json');
      const json = await response.json();
      setData(json);
    }
    fetchData();
  }, []);
  
  function handleSort() {
    setSortOrder(sortOrder === 1 ? -1 : 1);
    const sortedData = [...data].sort((a, b) => {
      return sortOrder * (a['Health'] - b['Health']);
    });
    setData(sortedData);
  }
  
  return (
    <div class="container-fluid">
        <nav class="navbar navbar-light bg-light">
          <h2 >Health Storage Server</h2>
        </nav>
        <Table class="table table-bordered table-hover">
          <thead>
            <tr>
              <th>#</th>
              <th>Hostname</th>
              <th>Device 0</th>
              <th>Model ID</th>
              <th>Serial No</th>
              <th>Revision</th>
              <th>Size</th>
              <th>Interface</th>
              <th>Temperature</th>
              <th>Highest Temperature</th>
              <th onClick={handleSort}>
                Health
                {sortOrder === 1 ? <i className="bi bi-arrow-up"></i> : <i className="bi bi-arrow-down"></i>} 
                {/* display an arrow icon to indicate the current sort order */}
              </th>
              <th>Performance</th>
              <th>Power on time</th>
              <th>Est. lifetime</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td>{`${index + 1}`}</td>
                <td>{item['Hostname']}</td>
                <td>{item['Device 0']}</td>
                <td>{item['Model ID']}</td>
                <td>{item['Serial No']}</td>
                <td>{item['Revision']}</td>
                <td>{item['Size']}</td>
                <td>{item['Interface']}</td>
                <td>{item['Temperature']}</td>
                <td>{item['Highest Temperature']}</td>
                <td>{item['Health']}</td>
                <td>{item['Performance']}</td>
                <td>{item['Power on time']}</td>
                <td>{item['Est. lifetime']}</td>
              </tr>
            ))}
          </tbody>
        </Table>
    </div>
  );
}

export default App;
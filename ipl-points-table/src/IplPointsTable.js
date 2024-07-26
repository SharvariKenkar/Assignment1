import React, { useState, useEffect } from 'react';
import './IplPointsTable.css';

const IplPointsTable = () => {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    fetch('https://my-json-server.typicode.com/FreSauce/json-ipl/data')
      .then((response) => response.json())
      .then((data) => {
        const sortedData = data.sort((a, b) => a.NRR - b.NRR);
        setTeams(sortedData);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="container">
      <h1>IPL 2022 Points Table</h1>
      <table>
        <thead>
          <tr>
            <th>Team</th>
            <th>Matches</th>
          
            <th>Won</th>
            <th>Lost</th>
            <th>Tied</th>
           
            <th>Points</th>
            <th>NRR</th>
          </tr>
        </thead>
        <tbody>
          {teams.map((team) => (
            <tr key={team.id}>
              <td>{team.Team}</td>
              <td>14</td>
             
              <td>{team.Won}</td>
              <td>{team.Lost}</td>
              <td>{team.Tied}</td>
              
              <td>{team.Points}</td>
              <td>{team.NRR}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default IplPointsTable;

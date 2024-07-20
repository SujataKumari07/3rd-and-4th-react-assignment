import React from 'react';
import './Dashboard.css';
import Table from '../Table/Table';
import LineChart from '../Charts/LineChart'; // Adjusted import for LineChart
import BarChart from '../Charts/BarChart'; // Adjusted import for BarChart
import Calendar from '../Calendar/Calendar';
import KanbanBoard from '../KanbanBoard/KanbanBoard';

function Dashboard() {
  return (
    <div className="dashboard">
      <h1 align="center">DASHBOARD</h1>
      <div className="section">
        <h2 align="center">TABLES</h2>
        <Table />
      </div>
      <div className="section">
        <h2 align="center">CHARTS</h2>
        <div className="charts">
          <LineChart />
          <BarChart />
        </div>
      </div>
      <div className="section">
        <h2 align="center">CALENDAR</h2>
        <Calendar />
      </div>
      <div className="section">
        <h2 align="center">KANBAN BOARD</h2>
        <KanbanBoard />
      </div>
    </div>
  );
}

export default Dashboard;


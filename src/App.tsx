import React from 'react';
import './App.css';
import DonutChart from './components/DonutChart';

const chartData = [
  { label:"Faltas insjustificadas", value: 300, color: 'purple' },
  { label:"Horário Britânico", value: 500, color: 'blue' },
  { label:"Intrajornada", value: 200, color: 'red' },
  { label:"Colaboradores com faltas", value: 150, color: 'orange' },
  { label:"Interjornada", value: 252, color: 'green' },
  { label:"Intrajornada", value: 200, color: 'red' },
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <DonutChart data={chartData}  />
      </header>
    </div>
  );
}

export default App;

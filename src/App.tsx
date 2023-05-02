import { Box } from '@mui/material';
import React from 'react';
import './App.css';
import DonutChart from './components/DonutChart';
import DonutChartGoogle from './components/DonutChartGoogle';
import DonutLibChart from './components/DonutLibChart';
import DonutApexChart from './components/DonutApexChart';

const chartData = [
  { label:"Faltas insjustificadas", value: 300, color: '#0099c6' },
  { label:"Horário Britânico", value: 500, color: '#3366cc' },
  { label:"Intrajornada", value: 200, color: '#dc3912' },
  { label:"Colaboradores com faltas", value: 1, color: 'orange' },
  { label:"Interjornada", value: 252, color: 'green' },
  { label:"Intrajornada", value: 200, color: 'purple' },
];

const chartData2 = [
  ["Faltas insjustificadas", 300 ],
  ["Horário Britânico", 500],
  ["Intrajornada", 1 ],
  ["Colaboradores com faltas", 150 ],
  ["Interjornada", 252 ],
  ["Intrajornada", 200 ],
];

const data = {
  labels: ["Apple", "Banana", "Orange"],
  series: [44, 55, 13],
};

function App() {
  return (
    <Box>
      <Box sx={{display:'flex'}}>
        <Box sx={{width:'50%'}}>
          <DonutChart data={chartData} />
        </Box>
        <Box sx={{width:'50%'}}>
          <DonutChartGoogle dados={chartData2} />
        </Box>
      </Box>

      <Box sx={{display:'flex'}}>
        <Box sx={{width:'50%'}}>
          <DonutApexChart data={data} />
        </Box>
        <Box sx={{width:'50%'}}>
          <DonutLibChart dados={chartData} />
        </Box>
      </Box>
    </Box>
  );
}

export default App;

import { Box } from '@mui/material';
import React from 'react';
import './App.css';
import DonutChart from './components/DonutChart';
import DonutChartGoogle from './components/DonutChartGoogle';
import DonutLibChart from './components/DonutLibChart';
import DonutApexChart from './components/DonutApexChart';
import DonutChartNivo from './components/DonutChartNivo';
import LineChartNivo from './components/LineChartNivo';

const chartData = [
  { label:"MARKETING", value: 300, color: '#2F5F98' },
  { label:"COMERCIAL", value: 500, color: '#2D8BBA' },
  { label:"FINANCEIRO", value: 200, color: '#41B8D5' },
  { label:"ADMINISTRATIVO", value: 10, color: '#6CE5E8' },
  { label:"SEM SETOR", value: 252, color: '#704E85' },
  { label:"SUPORTE", value: 15, color: '#31356E' },
];

const chartData2 = [
  ["MARKETING", 300 ],
  ["COMERCIAL", 500],
  ["FINANCEIRO", 100 ],
  ["ADMINISTRATIVO", 150 ],
  ["SEM SETOR", 20 ],
  ["SUPORTE", 200 ],
];

const data = {
  labels: ["Apple", "Banana", "Orange"],
  series: [44, 55, 13],
};

const dataNivo = [
  {
    "id": "MARKETING",
    "label": "MARKETING",
    "value": 2,
    "color": "hsl(137, 70%, 50%)"
  },
  {
    "id": "COMERCIAL",
    "label": "COMERCIAL",
    "value": 85,
    "color": "hsl(16, 70%, 50%)"
  },
  {
    "id": "FINANCEIRO",
    "label": "FINANCEIRO",
    "value": 571,
    "color": "hsl(130, 70%, 50%)"
  },
  {
    "id": "ADMINISTRATIVO",
    "label": "ADMINISTRATIVO",
    "value": 356,
    "color": "hsl(278, 70%, 50%)"
  },
  {
    "id": "SEM SETOR",
    "label": "SEM SETOR",
    "value": 335,
    "color": "hsl(255, 70%, 50%)"
  },
  {
    "id": "SUPORTE",
    "label": "SUPORTE",
    "value": 335,
    "color": "hsl(255, 70%, 50%)"
  }
];

const dataLineNivo = [
  {
    "id": "japan",
    "color": "hsl(212, 70%, 50%)",
    "data": [
      {
        "x": "01/2023",
        "y": 13
      },
      {
        "x": "02/2023",
        "y": 14
      },
      {
        "x": "03/2023",
        "y": 15
      },
      {
        "x": "04/2023",
        "y": 16
      },
      {
        "x": "05/2023",
        "y": 13
      },
      {
        "x": "06/2023",
        "y": 14
      },
      {
        "x": "07/2023",
        "y": 15
      },
    ]
  },
];

function App() {
  return (
    <Box sx={{ minWidth:'600px',display: 'flex', flexDirection: 'row', flexWrap: 'wrap', wordWrap: 'normal' }}>
      <Box sx={{display:'flex',  minWidth:'400px', width:'100%', flexWrap: 'wrap', wordWrap: 'normal' }}>
        <Box sx={{minWidth:'400px', width:'50%'}}>
          <DonutChartNivo dados={dataNivo} />
        </Box>
        <Box sx={{minWidth:'400px',width:'50%'}}>
          <LineChartNivo dados={dataLineNivo} />
        </Box>
      </Box>

      <Box sx={{display:'flex',  minWidth:'400px', width:'100%', flexWrap: 'wrap', wordWrap: 'normal' }}>
        <Box sx={{minWidth:'400px', width:'50%'}}>
          <DonutChart data={chartData} />
        </Box>
        <Box sx={{minWidth:'400px',width:'50%'}}>
          <DonutChartGoogle dados={chartData2} />
        </Box>
      </Box>

      <Box sx={{display:'flex', minWidth:'400px', width:'100%',  flexWrap: 'wrap', wordWrap: 'normal' }}>
        <Box sx={{minWidth:'400px',width:'50%'}}>
          <DonutApexChart data={data} />
        </Box>
        <Box sx={{minWidth:'400px',width:'50%'}}>
          <DonutLibChart dados={chartData} />
        </Box>
      </Box>
    </Box>
  );
}

export default App;

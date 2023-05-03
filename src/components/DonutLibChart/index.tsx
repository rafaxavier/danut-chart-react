import React, { useRef, useEffect } from "react";
import Chart from 'chart.js/auto';
import { Box } from "@mui/material";

interface DonutLibChartProps {
  dados: { label: string, value: number, color: string }[];
}

const DonutLibChart: React.FC<DonutLibChartProps> = ({ dados }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef && chartRef.current) {
      const chartInstance = new Chart(chartRef.current, {
        type: "doughnut",
        data: {
          labels: dados.map(d => d.value+' - '+d.label),
          
          datasets: [
            {
              data: dados.map(d => d.value),
              backgroundColor: dados.map(d => d.color),
              hoverBackgroundColor: dados.map(d => d.color),
              borderWidth:0,
              
            },
          ],
        },
        options: {
          layout:{
            // autoPadding: true ,
            padding:60 //tamanho do arco
          },
          maintainAspectRatio: false,
          responsive: true,
          plugins: { 
            legend: {
              display:true,
              position:'right',
              align:'center',
              title:{
                display:true,
                color:'red',
                text:'testeeeee'
              }
            },
            title:{
              display:true,
              color:'#a2a',
              text:'LIB CHART JS'
            }
          }
        },
      });
      return () => {
        chartInstance.destroy();
      };
    }
  }, [dados]);

  return (
    <Box  m={2} p={2} sx={{border:'1px solid black', height:'350px', }}>
      <canvas ref={chartRef}  />
    </Box>
  );
};

export default DonutLibChart;
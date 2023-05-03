import React, { useRef, useEffect } from "react";
import ApexCharts from "apexcharts";
import { ApexOptions } from "apexcharts";
import { Box } from "@mui/material";

interface DonutApexChartProps {
  data: { labels: string[]; series: number[] };
}

const DonutApexChart: React.FC<DonutApexChartProps> = ({ data }) => {
  const chartRef = useRef<HTMLDivElement>(null);

  const chartOptions: ApexOptions = {
    title:{
      text:'LIB APEX CHART',
    },
    plotOptions: {
      pie: {
        expandOnClick: false,
        donut: {
          size: "50%",
          labels: {
            show: true, //exibe item no centro
          }
        },
      }
    },
    chart: {
      type: "donut",
      width:'350px',
    },
    stroke:{
      width:0, // retirando as bordas das fatias
    },
    series: data.series,
    labels: data.labels,
  };
  
  let chart: ApexCharts | undefined;

  useEffect(() => {
    if (chartRef.current) {
      chart = new ApexCharts(chartRef.current, chartOptions);
      chart.render();
    }
    return () => {
      if (chart) {
        chart.destroy();
      }
    };
  }, [data]);

  useEffect(() => {
    if (chart && data) {
      chart.updateOptions({
        series: data.series,
        labels: data.labels,
      });
    }
  }, [data]);

  return (
    <Box m={2} p={2} sx={{height:'350px', border: '1px solid black' }} ref={chartRef} />
  );
};

export default DonutApexChart;
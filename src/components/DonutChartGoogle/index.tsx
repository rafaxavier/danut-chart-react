import { Box } from "@mui/material";
import React from "react";
import { Chart } from "react-google-charts";

interface DonutChartGoogleProps {
  dados?: any;
}

const DonutChartGoogle: React.FC<DonutChartGoogleProps> = ({ dados }) => {
  let transformedData: {} | undefined = [];
  if (dados) {
    transformedData = [["Label", "Value"], ...dados];
  }

  const options = {
    title: "Meu título",
    pieHole: 0.5,
    is3D: false,
    pieSliceText: "none",
    pieSliceBorderColor: "transparent",
    legend: {
      position: "labeled",
      textStyle: {
        fontSize: 14,
        color: "grey",
      },
    },
  };

  return (
    <Box  m={2} p={2} sx={{border:'1px solid black', height:'350px'}}>
      <Chart
      chartType="PieChart"
      width="100%"
      height="300px"
      data={transformedData}
      options={options}
    />
    </Box>
    
  );
};

export default DonutChartGoogle;
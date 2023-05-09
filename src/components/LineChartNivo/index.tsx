import { Box } from "@mui/material";
import React from "react";
import { ResponsiveLine, Serie } from '@nivo/line';

interface LineChartNivoProps {
  dados?: Serie[];
}

const LineChartNivo: React.FC<LineChartNivoProps> = ({ dados = [] }) => {

  return (
    <Box  m={2} p={2} sx={{border:'1px solid black', height:'350px', minWidth:'500px'}}>
      <ResponsiveLine
        data={dados}
        margin={{ top: 50, right: 30, bottom: 50, left: 30 }}
        xScale={{ type: 'point' }}
        yScale={{
            type: 'linear',
            min: 0,
            max: 'auto',
            stacked: true,
            reverse: false
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
            tickSize: 0,
            tickPadding: 10,
            tickRotation: 0,
            legend: '',
            legendOffset: 36,
            legendPosition: 'middle'
        }}
        axisLeft={{
            tickSize: 15,
            tickPadding: 5,
            tickRotation: 0,
            legend: '',
            legendOffset: 0,
            legendPosition: 'middle'
        }}
        enableGridX={false}
        colors={{ scheme: 'category10' }}
        lineWidth={0}
        enablePoints={false}
        pointSize={10}
        pointColor={{ from: 'color', modifiers: [] }}
        pointBorderColor={{ from: 'color', modifiers: [] }}
        pointLabelYOffset={-12}
        enableArea={true}
        areaOpacity={1}
        debugSlices={true}
        useMesh={true}
        legends={[]}
      />
    </Box>
    
  );
};

export default LineChartNivo;
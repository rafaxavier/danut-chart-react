import { Box } from "@mui/material";
import React from "react";
import { ResponsivePie } from '@nivo/pie'

interface DonutChartNivoProps {
  dados?: any;
}

const DonutChartNivo: React.FC<DonutChartNivoProps> = ({ dados }) => {

  return (
    <Box  m={2} p={2} sx={{border:'1px solid black', height:'350px'}}>
      {/* <ResponsivePie
        data={dados}
        margin={{ top: 100, right: 100, bottom: 100, left: 100 }}
        valueFormat=" >-"
        // sortByValue={true} ordernar por tamanho
        innerRadius={0.5} // tamanho do circulo central
        activeInnerRadiusOffset={2} //animacao hover
        activeOuterRadiusOffset={2} //animacao hover
        colors={{ scheme: 'category10' }}
        borderColor={{
            from: 'color',
            modifiers: [
                [
                    'brighter',
                    0
                ]
            ]
        }}
        enableArcLinkLabels={false}
        arcLabel={e=>e.id+" ("+e.value+")"}
        arcLabelsRadiusOffset={2.4} // distancia das infos p/ o grafico
        arcLabelsSkipAngle={5} // Ignorea a info se o angulo do arco for menor que o valor fornecido
        arcLabelsTextColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    3
                ]
            ]
        }}
        motionConfig="wobbly"
        legends={[
            {  
                anchor: 'right',
                direction: 'column',
                justify: false,
                translateX: 7,
                translateY: 7,
                itemWidth: 7,
                itemHeight: 27,
                itemsSpacing: 7,
                symbolSize: 7,
                itemDirection: 'right-to-left'
            }
        ]}
    /> */}
      <ResponsivePie
        data={dados}
        margin={{ top: 100, right: 100, bottom: 100, left: 100 }}
        valueFormat=" >-"
        // sortByValue={true}
        innerRadius={0.55}
        activeInnerRadiusOffset={1}
        activeOuterRadiusOffset={1}
        colors={{ scheme: 'category10' }}
        borderColor={{
            from: 'color',
            modifiers: [
                [
                    'brighter',
                    0
                ]
            ]
        }}
        arcLinkLabel={e=>e.id+" - "+e.value}
        arcLinkLabelsSkipAngle={5} //Ignorea a info se o angulo do arco for menor que o valor fornecido
        arcLinkLabelsTextOffset={10} // distancia da info p/ linha
        arcLinkLabelsTextColor="#333333"
        arcLinkLabelsOffset={7} // distancia da linha p/ grafico
        arcLinkLabelsDiagonalLength={20}
        arcLinkLabelsStraightLength={23} //comprimento da linha
        arcLinkLabelsThickness={1} // espessura da linha p/ grafico
        arcLinkLabelsColor={{ from: 'color', modifiers: [] }}
        enableArcLabels={false}
        arcLabel={e=>e.id+" ("+e.value+")"}
        arcLabelsTextColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    3
                ]
            ]
        }}
        motionConfig="wobbly"
        legends={[
            {
                anchor: 'right',
                direction: 'column',
                justify: false,
                translateX: 7,
                translateY: 7,
                itemWidth: 7,
                itemHeight: 27,
                itemsSpacing: 7,
                symbolSize: 7,
                itemDirection: 'right-to-left'
            }
        ]}
    />
    </Box>
    
  );
};

export default DonutChartNivo;
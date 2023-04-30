import { Box } from '@mui/material';
import React, { useEffect, useRef } from 'react';

interface DonutChartProps {
  data: { label: string, value: number, color: string }[];
}

const DonutChart: React.FC<DonutChartProps> = ({ data }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

      let totalValue = 0;
      data.forEach(value => totalValue += value.value);

      let startAngle = 0;
      data.forEach(({ label, value, color }, index) => {
        const sliceAngle = 2 * Math.PI * value / totalValue;
        const endAngle = startAngle + sliceAngle;
      
        // Desenha o segmento do gráfico
        ctx.beginPath();
        ctx.arc(canvas.width / 2, canvas.height / 2, canvas.height / 4, startAngle, endAngle);
        ctx.lineTo(canvas.width / 2, canvas.height / 2);
        ctx.fillStyle = color;
        ctx.fill();
      
        // Adiciona o valor ao redor do gráfico
        const midAngle = startAngle + sliceAngle / 2;
        const textRadius = canvas.height / 2.6;
        const x = canvas.width / 2 + Math.cos(midAngle) * textRadius;
        const y = canvas.height / 2 + Math.sin(midAngle) * textRadius;
        ctx.fillStyle = "grey";
        ctx.font = "600 14px Arial";
        ctx.fillText(label, x - ctx.measureText(label).width / 2, y - 15);
        ctx.fillText(value.toString(), x - ctx.measureText(value.toString()).width / 2, y, 20);
      
        startAngle = endAngle;
      });

      // Desenha um novo círculo interno com a cor de fundo
      const innerRadius = canvas.height / 8;
      ctx.beginPath();
      ctx.arc(canvas.width / 2, canvas.height / 2, innerRadius, 0, 2 * Math.PI);
      ctx.fillStyle = "#fff"; // Cor de fundo da rosca
      ctx.fill();
    }
  }, [data]);

  return (
    <Box sx={{height:'350px', border:'1px solid black'}}>
      <canvas ref={canvasRef} width={350} height={350} />
    </Box>
  );
};

export default DonutChart;
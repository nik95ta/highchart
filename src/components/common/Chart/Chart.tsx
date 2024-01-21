import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { Box } from '@mui/material';

interface ChartProps {
  chartOptions: Highcharts.Options;
}

const Chart: React.FC<ChartProps> = ({ chartOptions }) => {
  return (
    <Box display='flex' justifyContent='center' alignItems='center' height='100vh'>
      <Box width='80%'>
        <HighchartsReact highcharts={Highcharts} options={chartOptions} />
      </Box>
    </Box>
  );
};

export default Chart;

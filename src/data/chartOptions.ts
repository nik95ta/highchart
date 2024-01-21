import Highcharts from 'highcharts';
import { generateNumbers } from '../utils';

const chartOptions: Highcharts.Options = {
  title: {
    text: 'Three Series Comparison Across Months',
  },
  xAxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  },
  series: [
    {
      data: generateNumbers(),
      type: 'line',
    },
    {
      data: generateNumbers(),
      type: 'line',
    },
    {
      data: generateNumbers(),
      type: 'line',
    },
  ],
};

export default chartOptions;

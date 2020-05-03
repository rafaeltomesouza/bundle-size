import React from 'react';
import Chart from 'react-apexcharts'

type staticProps = {
  data: any
};

const Statics = (props: staticProps) => {
  const state = {
    series: [{
      name: 'module size (KB)',
      data: props.data.module
    }, {
      name: 'minify size (KB)',
      data: props.data.minify
    }, {
      name: 'gzip size (KB)',
      data: props.data.gzip
    }],
    options: {
      chart: {
        type: 'bar',
        height: 430
      },
      plotOptions: {
        bar: {
          horizontal: true,
          dataLabels: {
            position: 'top',
          },
        }
      },
      dataLabels: {
        enabled: true,
        offsetX: -6,
        style: {
          fontSize: '12px',
          colors: ['#fff']
        }
      },
      stroke: {
        show: true,
        width: 1,
        colors: ['#fff']
      },
      xaxis: {
        categories: props.data.currentVersion,
      },
    },
  };

  return (
    <div>
      <Chart
        options={state.options}
        series={state.series}
        type="bar"
        width={500}
        height={320}
      />
    </div>
  );
}

export { Statics };

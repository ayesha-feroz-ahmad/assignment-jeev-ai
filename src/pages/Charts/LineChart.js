import React, { useEffect } from 'react'
import Highcharts from 'highcharts'


function LineChart() {
  useEffect(() => {
    Highcharts.chart('lineChart', {

      title: {
        text: '',
        align: 'left'
      },
      yAxis: {
        title: {
          text: 'Number of Employees'
        }
      },

      xAxis: {
        accessibility: {
          rangeDescription: 'Range: 2010 to 2020'
        }
      },

      legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
      },

      plotOptions: {
        series: {
          label: {
            connectorAllowed: false
          },
          pointStart: 2010
        }
      },

      series: [{
        name: 'Installation & Developers',
        data: [43934, 48656, 65165, 81827, 112143, 142383]
      }, {
        name: 'Manufacturing',
        data: [24916, 37941, 29742, 29851, 32490, 30282]
      }],

      responsive: {
        rules: [{
          condition: {
            maxWidth: 500
          },
          chartOptions: {
            legend: {
              layout: 'horizontal',
              align: 'center',
              verticalAlign: 'bottom'
            }
          }
        }]
      }

    });

  }, [])
  return (
    <div>
      <div id="lineChart"></div>
    </div>
  )
}

export default LineChart

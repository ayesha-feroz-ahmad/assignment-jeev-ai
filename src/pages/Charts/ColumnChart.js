import React, { useEffect } from 'react'
import Highcharts from 'highcharts'


function ColumnChart() {

  useEffect(() => {
    Highcharts.chart('columnChart', {
      chart: {
        type: 'column'
      },
      title: {
        text: ''
      },
      xAxis: {
        categories: [
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May'
        ],
        crosshair: true
      },
      yAxis: {
        min: 0,
        title: {
          text: 'Rainfall (mm)'
        }
      },
      tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
          '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
      },
      plotOptions: {
        column: {
          pointPadding: 0.2,
          borderWidth: 0
        }
      },
      series: [{
        name: 'Tokyo',
        data: [49.9, 71.5, 106.4, 129.2, 144.0]

      }, {
        name: 'New York',
        data: [83.6, 78.8, 98.5, 93.4, 106.0]

      }]
    });
  }, [])

  return (
    <div>
      <div id="columnChart"></div>
    </div>
  )
}

export default ColumnChart

import React, { useEffect } from 'react'
import Highcharts from 'highcharts'


function BarChart() {

  useEffect(() => {
    Highcharts.chart('barChart', {
      chart: {
        type: 'bar'
      },
      title: {
        text: '',
        align: 'left'
      },
      xAxis: {
        categories: ['Africa', 'America', 'Asia', 'Europe', 'Oceania'],
        title: {
          text: null
        }
      },
      yAxis: {
        min: 0,
        title: {
          text: 'Population (millions)',
          align: 'high'
        },
        labels: {
          overflow: 'justify'
        }
      },
      tooltip: {
        valueSuffix: ' millions'
      },
      plotOptions: {
        bar: {
          dataLabels: {
            enabled: true
          }
        }
      },
      legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'top',
        x: -40,
        y: 80,
        floating: true,
        borderWidth: 1,
        backgroundColor:
          Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF',
        shadow: true
      },
      credits: {
        enabled: false
      },
      series: [{
        name: 'Year 1990',
        data: [631, 727, 3202, 721]
      }, {
        name: 'Year 2000',
        data: [814, 841, 3714, 726]
      },]
    });

  }, [])
  return (
    <div>
      <div id="barChart"></div>
    </div>
  )
}

export default BarChart

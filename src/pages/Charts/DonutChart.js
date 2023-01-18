import React, { useEffect } from 'react'
import Highcharts from 'highcharts'


function DonutChart() {

  useEffect(() => {
    var colors = Highcharts.getOptions().colors,
      categories = [
        'Chrome',
        'Safari',
        'Edge',
        'Firefox',
        'Other'
      ],
      data = [
        {
          y: 61.04,
          color: colors[2],
          drilldown: {
            name: 'Chrome',
            categories: [
              'Chrome v97.0',
              'Chrome v96.0',
              'Chrome v95.0',
              'Chrome v94.0'
            ],
            data: [
              36.89,
              18.16,
              0.54,
              0.7
            ]
          }
        },
        {
          y: 9.47,
          color: colors[3],
          drilldown: {
            name: 'Safari',
            categories: [
              'Safari v15.3',
              'Safari v15.2',
              'Safari v15.1',
              'Safari v15.0',

            ],
            data: [
              0.1,
              2.01,
              2.29,
              0.49,

            ]
          }
        },



      ],
      browserData = [],
      versionsData = [],
      i,
      j,
      dataLen = data.length,
      drillDataLen,
      brightness;


    // Build the data arrays
    for (i = 0; i < dataLen; i += 1) {

      // add browser data
      browserData.push({
        name: categories[i],
        y: data[i].y,
        color: data[i].color
      });

      // add version data
      drillDataLen = data[i].drilldown.data.length;
      for (j = 0; j < drillDataLen; j += 1) {
        brightness = 0.2 - (j / drillDataLen) / 5;
        versionsData.push({
          name: data[i].drilldown.categories[j],
          y: data[i].drilldown.data[j],
          color: Highcharts.color(data[i].color).brighten(brightness).get()
        });
      }
    }

    // Create the chart
    Highcharts.chart('donutChart', {
      chart: {
        type: 'pie'
      },
      title: {
        text: '',
        align: 'left'
      },

      plotOptions: {
        pie: {
          shadow: false,
          center: ['50%', '50%']
        }
      },
      tooltip: {
        valueSuffix: '%'
      },
      series: [{
        name: 'Browsers',
        data: browserData,
        size: '60%',
        dataLabels: {
          formatter: function () {
            return this.y > 5 ? this.point.name : null;
          },
          color: '#ffffff',
          distance: -30
        }
      }, {
        name: 'Versions',
        data: versionsData,
        size: '80%',
        innerSize: '60%',
        dataLabels: {
          formatter: function () {
            // display only if larger than 1
            return this.y > 1 ? '<b>' + this.point.name + ':</b> ' +
              this.y + '%' : null;
          }
        },
        id: 'versions'
      }],
      responsive: {
        rules: [{
          condition: {
            maxWidth: 400
          },
          chartOptions: {
            series: [{
            }, {
              id: 'versions',
              dataLabels: {
                enabled: false
              }
            }]
          }
        }]
      }
    });

  }, [])

  return (
    <div>
      <div id="donutChart"></div>
    </div>
  )
}

export default DonutChart

//solidgauge
<template>
    <div>
      <highcharts class="hc rooo" :options="chartOptions" ref="mapChart"></highcharts>
    </div>
  </template>
  
  <script>
  import Highcharts from 'highcharts'
  import exportingInit from 'highcharts/modules/exporting'
  
  exportingInit(Highcharts)
  
  export default {
    data() {
      return {
        dat: []
      };

    
    },
    
    computed: {
        chartOptions(){
          return{
            chart: {
            type: 'pie',
            width: '400',
            borderRadius: 10,
            backgroundColor: '#1e293b',
            style: {
            color: '#0998FE',
            fontWeight: 'bold'
        }
    },
    title: {
        text: 'Browser market share, January, 2022',
        align: 'left'
    },
    subtitle: {
        text: 'Source: <a href="http://statcounter.com" target="_blank">statcounter.com</a>',
        align: 'left'
    },
    plotOptions: {
        pie: {
            shadow: false,
            center: ['50%', '50%'],
            borderColor: '#1e293b'
        }
    },
    tooltip: {
        valueSuffix: '%'
    },
    series: [{
        name: 'Browsers',
        data: [],
        size: '60%',
        dataLabels: {
            formatter: function () {
                return this.y > 5 ? this.point.name : null;
            },
            color: '#1e29',
            distance: -30,
            backgroundColor: '#1e29'
        },
        style: {
            color: '#0998FE',
            fontWeight: 'bold',
            backgroundColor: '#1e29'
        }
    }, {
        name: 'Versions',
        data: [12,43,34,41],
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
        }
        }}
    }
  </script>

  <style>
.rooo{
    width: 40;
}
</style>
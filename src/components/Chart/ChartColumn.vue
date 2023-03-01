<template>
    <div>
      <highcharts class="hc" :options="chartOptions" ref="mapChart"></highcharts>
    </div>
  </template>
  
  <script>
  import Highcharts from 'highcharts'
import { chart } from 'highcharts';
  import exportingInit from 'highcharts/modules/exporting'
  
  exportingInit(Highcharts)
  
  export default {
    props:{
        typeChart: {
            type: String,
            default: 'column'
        }

    },
    data() {
      return {
        dat: []
      };
    },
    methods:{
        dada(ds){
          this.$store.dispatch('fetch')
            alert(ds)
        }
    },
  
    computed: {
      chartOptions(){
        return{
          chart: {
          type: 'area',
          width: '800',
          backgroundColor: '#1e293b',
          borderRadius: 10,
          
      },
      credits: {
        enabled: false
    },
      accessibility: {
          description: 'Image description: An area chart compares the nuclear stockpiles of the USA and the USSR/Russia between 1945 and 2017. The number of nuclear weapons is plotted on the Y-axis and the years on the X-axis. The chart is interactive, and the year-on-year stockpile levels can be traced for each country. The US has a stockpile of 6 nuclear weapons at the dawn of the nuclear age in 1945. This number has gradually increased to 369 by 1950 when the USSR enters the arms race with 6 weapons. At this point, the US starts to rapidly build its stockpile culminating in 32,040 warheads by 1966 compared to the USSR’s 7,089. From this peak in 1966, the US stockpile gradually decreases as the USSR’s stockpile expands. By 1978 the USSR has closed the nuclear gap at 25,393. The USSR stockpile continues to grow until it reaches a peak of 45,000 in 1986 compared to the US arsenal of 24,401. From 1986, the nuclear stockpiles of both countries start to fall. By 2000, the numbers have fallen to 10,577 and 21,000 for the US and Russia, respectively. The decreases continue until 2017 at which point the US holds 4,018 weapons compared to Russia’s 4,500.'
      },
      exporting: {

        buttons: [{
          text: 'custom button',
          onclick: function () {
            alert('clicked');
          },
          color: {
    linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
    stops: [
        [0, '#003399'], // start
        [0.5, '#ffffff'], // middle
        [1, '#3366AA'] // end
    ]
}
         
        },{
          text: 'custom button',
          onclick: function () {
            
          },
      
        },{
          text: 'custom button',
          onclick: this.dada,
          theme: {
                'stroke-width': 1,
                stroke: 'silver',
                fill: '#0998FE',
                borderRadius:20,
                r: 0,
                states: {
                    hover: {
                        fill: '#a4edba'
                    },
                    select: {
                        stroke: '#039',
                        fill: '#a4edba'
                    }
                }
            }
          
        
          
          
        }]

},


      title: {
          text: this.$store.state.api.coin,
          style: {
            color: '#0998FE',
            fontWeight: 'bold'
        }
          
      },
      subtitle: {
          text: 'Binance: <a href="https://binance.com" ' +
              'target="_blank">Click</a>',
              style: {
            color: '#0998FE',
            fontWeight: 'bold'
        }
      },
      xAxis: {
       
          categories: this.list.map(i => i.element),
          labels: {
              formatter: function () {
                  return this.value // clean, unformatted number for year
              },style: {
            color: '#0998FE',
            fontWeight: 'bold'
        }
          },
          accessibility: {
              rangeDescription: 'Range: 1940 to 2017.'
          }
      },
      yAxis: [{
        gridLineColor: '#334155' ,
        gridLineHeight: 5,

          title: {
              text: ''
          },
          labels: {

              formatter: function () {
                  return 'R$ ' + this.value
              }, style: {
            color: '#0998FE',
            fontWeight: 'bold'
        }
          },
      }],
      tooltip: {
          pointFormat: '{series.name} had stockpiled <b>{point.y}</b><br/>warheads in {point.x}',
          backgroundColor: '#000000'
      },
      plotOptions: {
          area: {
              pointStart:1,
              marker: {
                  enabled: false,
                  symbol: 'circle',
                  radius: 1,
                  states: {
                      hover: {
                          enabled: true
                      }
                  }
              }
          },
          series: {
            cursor: 'all-scroll',
            color: '#0998FE',
            borderRadius:'10px',
            borderColor:'',
            events: {
               hide: function (event) {
                    alert('wq');
                }
            }
        }
      },
      legend: {
        enabled: false
    },
      series: [{
          name: this.$store.state.api.coin,
          data: this.list.map(i => Number(i.openprice)),
          type: this.typeChart,

      }],
      responsive: {
        rules: [{
            condition: {
                maxWidth: 900
            },
            chartOptions: {
                chart: {
                    className: 'small'
                }
            }
        }]
    }
      }
    },
    
    list(){
      console.log(this.$store.state.api.data);
      return this.$store.state.api.data
  
    }
    }//computed
  };
  </script>

  <style>
.highcharts-button-normal{
  color:#fff;
}
</style>
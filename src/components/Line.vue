<template>
    <Line :data="Data" :options="Option" />
  </template>
  
  <script lang="ts">
  import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  } from 'chart.js'

  import { Line } from 'vue-chartjs'

  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  )
  
  export default {
    name: 'App',
    components: {
      Line
    },
    data() {

    },
    computed: {
        Data() {
            return{
                labels: this.list.map(i => i.element),
  datasets: [
    {
      label: 'Data One',
      backgroundColor: '#000',
      data: this.list.map(i => i.closeprice)
    }
  ]
            }
        },
        Option(){
            return{
                // backgroundColor: 'rgba(0, 0, 0, 0.8)',
                responsive: true,
  maintainAspectRatio: false,
  fillcolor: "#3eb9af",
      backgroundColor: "#3eb9af",
      strokeColor: "#3eb9af",
      pointColor: "#3eb9af",
      pointStrokeColor: "#fff",
      pointHighlightFill: "#fff",
      pointHighlightStroke: "#3eb9af",
 
            borderColor: '#3eb9af',
            borderWidth: 2,
            pointRadius: 5,
            pointBackgroundColor: 'white',
            pointBorderWidth: 2,
            pointBorderColor: '#3eb9af',
  display:false,
  scales: {
    y: {
        grid: {
          color: 'red',
          borderColor: 'grey',
          tickColor: 'grey',
          ticks: {
              suggestedMin: 10,
              suggestedMax: 50
            }
        }
      },
    x: {
        grid: {
            display: false,
          borderColor: 'grey',
          tickColor: 'grey'
        }
      },
  
    },legend: {
          display: true,
          position: 'top',
          labels: {
            fontColor: 'black',
            fontSize: 14
          }
        },
 
            }
        },



        list(){
            
            return this.$store.state.api.data
            
        }
    }
  }
  </script>
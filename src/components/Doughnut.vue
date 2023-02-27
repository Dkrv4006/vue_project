<template>
    <Doughnut :data="Data" :options="Option" />
  </template>
  
  
  <script lang="ts">
  import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
  import { Doughnut } from 'vue-chartjs'

  
  ChartJS.register(ArcElement, Tooltip, Legend)
  
  export default {
    name: 'App',
    components: {
      Doughnut
    },
    data() {

    },
    computed: {
        Data() {
            return{
                labels: ['VueJs', 'EmberJs', 'ReactJs', 'AngularJs','Nodejs'],
                datasets: [
                        {
                            backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16','#dd1'],
                            data: [40, 20, 80, 10,30]
                        }
                        ]
            }
        },
        Option(){
            return{
                responsive: true,
    maintainAspectRatio: false,
    borderRadius: 5,
            }
        }
    }
  }
  </script>
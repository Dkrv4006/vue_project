<template>
  <div class="container">
    
    <Bar
      id="my-chart-id"
      :options="chartOptions"
      :data="chartData"
    />
  </div>
  <div>
    <select v-model="selectedOption">
      <option value="ADAUSDT">ADA</option>
      <option value="ETHUSDT">ETH</option>
      <option value="BTCUSDT">BTC</option>
    </select>
    <button @click="submit">Enviar</button>
  </div>

  </template>
  
  <script>
  import { Bar } from 'vue-chartjs'
  import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
  
  ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)
  
  export default {
    name: 'BarChart',
    components: { Bar },
    data() {
      return {
        selectedOption: {
          type: String,
          default: 'BTCUSDT'
        }
    }
  },
  methods: {
    submit() {
      this.$store.dispatch('fetchData', this.selectedOption)
    },
    ta(){
      this.$store.dispatch('fetchData')
    },
   

  },
    computed:{
      
      chartData(){
        const data = ['daniel','renata','joao']
        return{
            labels: this.lista.map(i => i.element),
            datasets: [ { data: this.lista.map(i => i.openprice) } ]

        }
      },
      chartOptions(){
        return{
          responsive: true,
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderRadius: 5,

        }
      },

    lista() {
    return this.$store.state.api.data
    }
  },
  mounted () {

        this.ta()
  },
}
  
  
  </script>

<style>
.container{
  width: 100%;
}
</style>
  
  
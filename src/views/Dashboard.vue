<template>
  <title>Dashboard</title>
  <Loading  v-if="isLoading"/>
  <main v-else>
    
    <Heade/>
      <Home/>
      <div class="chart">
        <div class="grafico">
          <ChartConumn type-chart="column"/>
        </div>
        <div class="grafico">

          <ChartSolidgauge/>
        </div>
        <Dashcoin/>
      </div>


  </main>
 

  </template>
  
  <script>

import ChartConumn from '../components/Chart/ChartColumn.vue'
import ChartSolidgauge from '../components/Chart/ChartSolidgauge.vue';
import Dashcoin from '../components/Dashcoin.vue';
import Heade from '../components/Heade.vue'
import Home from '../components/Home.vue';
// import Loading from '@/components/Loading.vue';
import Loading from '../components/Loading.vue';
  
  export default {
    name: 'BarChart',
    components: { ChartConumn, Heade, Loading, Home, ChartSolidgauge, Dashcoin },
    data() {
      return {
        isLoading: true,
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
      

    lista() {
    return this.$store.state.api.data
    }
  },
  mounted () {

        this.ta()
        setTimeout(() => {
      this.isLoading = false;
    }, 300);
  },
}
  
  
  </script>

<style scoped>
main{
  width: 100%;

}
.chart{
  display: flex;
  gap: 20px;
  width: 100%;
}

.container{
  width: 100%;
  padding: 20px;
}

.chart {
  display: flex;
  flex-wrap: wrap;
}

.graficos {
    width: 700px;
    flex-grow: 1;
}
</style>
  
  
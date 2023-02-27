<template>
  <title>Dashboard</title>
  <Loading  v-if="isLoading"/>
  <main v-else>
    
    <Heade/>
      <Home/>
      <ChartConumn type-chart="column"/>


  </main>
 

  </template>
  
  <script>

import ChartConumn from '../components/Chart/ChartConumn.vue'
import Heade from '../components/Heade.vue'
import Home from '../components/Home.vue';
// import Loading from '@/components/Loading.vue';
import Loading from '../components/Loading.vue';
  
  export default {
    name: 'BarChart',
    components: { ChartConumn, Heade, Loading, Home },
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
    }, 1000);
  },
}
  
  
  </script>

<style scoped>
main{
  width: 100%;

}

.container{
  width: 100%;
  padding: 20px;
}
</style>
  
  
<script>

export default {
  
  methods: {
    ta(){
      this.$store.dispatch('fetchData')
      console.log(this.$store.state.api.data);
    },
   
  },
  created() {
    setInterval(this.ta, 999120000)
  },
  computed:{
    lista() {
    return this.$store.state.api.data
    }
  }
}
</script>

<template>
 <div>
    <h2>Dados da API:</h2>
    <button @click="ta" >daniel</button>
    <button @click="lista" >liste</button>
    <div>
      <ul>
        <li v-for="(item, index) in lista" :key="index">{{ item.symbol }}: {{ item.lastPrice }}</li>
      </ul>
    </div>
  </div>



    
</template>


<style scoped>

li{
  list-style: none;
}



</style>
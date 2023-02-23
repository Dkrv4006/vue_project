<script>

export default {
  methods: {
    ta(){
      this.$store.dispatch('fetchData')
    },
   

  },
  mounted() {
    this.ta()
  },
  created() {

    setInterval(this.ta, 10000000)
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
        <li v-for="(item) in lista" :key="item.element">
          {{ item.element }} 
          {{ item.minprice }} 
          {{ item.maxprice }}
          {{ item.openprice }}
          {{ item.closeprice }}
        </li>
      </ul>
    </div>
  </div>



    
</template>


<style scoped>

li{
  list-style: none;
}



</style>
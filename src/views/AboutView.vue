<script>

import Modal from '../components/modal.vue'


export default {

  data(){
    return{
      openb: false,
    }
  },
    methods: {
        ta() {
            this.$store.dispatch("fetchData");
        },

        open(){
          this.openb = !this.openb
        }
    },
    mounted() {
        this.ta();
    },
    created() {
        setInterval(this.ta, 10000000);
    },
    computed: {
        lista() {
            return this.$store.state.api.data;
        }
    },
    components: { Modal }
}

</script>
<template>
 <div class="al">
    <h2>Dados da API:</h2>
    <button @click="open" >daniel</button>
    <button @click="lista" >liste</button>
    <div>

      <Modal :toggleButton="openb">

       <h1>danie</h1>

      </Modal>
      <!-- <ul>
        <li v-for="(item) in lista" :key="item.element">
          {{ item.element }} 
          {{ item.minprice }} 
          {{ item.maxprice }}
          {{ item.openprice }}
          {{ item.closeprice }}
        </li>
      </ul> -->
    </div>
    
  </div>



    
</template>


<style scoped>

.al{
  position: relative;
  list-style: none;
}



</style>


<style scoped>

li{
  list-style: none;
}



</style>
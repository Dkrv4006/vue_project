<script>

import Button from '../components/Button.vue';
import Modal from '../components/modal.vue'

export default {

  data(){
    return{
      openb: false,
      toggle: true,
      negotiation: 'deposit',
      nome: '',
      email: '',
      mensagem: '',
      filter: ''

    }
  },
    methods: {
        ta() {
            this.$store.dispatch("fetchData");
        },

        open(){
          this.openb = !this.openb
        },
        enviarFormulario() {
      // Lógica para enviar o formulário aqui
      console.log('Formulário enviado' + this.nome  + this.email + ' ' + this.negotiation + this.toggle);
    }
    },
    mounted() {
        this.ta();
    },
    created() {
        setInterval(this.ta, 10000000);
    },
    computed: {
      filterSymbol(){
        const filter = this.filter.toLowerCase()
        return this.lista.filter(symbol  => symbol.symbol.toLowerCase().includes(filter))
      },
        lista() {
            return this.$store.state.api.mony;
        },
        

    estiloAtivo() {
      return {
        backgroundColor: 'green',
        color: 'white'
      };
    },
    estilore() {
      return {
        backgroundColor: 'red',
        color: 'white'
      };
    },
    estiloInativo() {
      return {
        backgroundColor: 'gray',
        color: 'black'
      };
    },
    
  
    },

    components: { Modal, Button }
}

</script>
<template>
  <title>About</title>
 <div class="al">
    <h2>Dados da API:</h2>
    <button @click="open" >daniel</button>
    <button @click="lista" >liste</button>
    <div>

      <Modal :toggleButton="openb" background="#1e293b" >

        <form  @submit.prevent="enviarFormulario">
          <label for="nome">Nome:</label>
    <input type="text" id="nome" v-model="nome">

    <label for="email">Email:</label>
    <input type="email" id="email" v-model="email">

    <label for="mensagem">Mensagem:</label>
    <textarea id="mensagem" v-model="mensagem"></textarea>
    <div class="container-button">

      <Button @click=" this.toggle = true , this.negotiation = 'deposit'" :class="this.toggle ? 'deposit' : 'disable'"  > buy </Button>
     
      <Button @click="this.toggle = false , this.negotiation = 'removal'"  :class="!this.toggle ? 'removal' : 'disable'" > shell </Button>
    </div>
          <button type="submit">Enviar</button>
        </form>

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

    <input type="text" v-model="filter">
    <h4>{{ this.filter }}</h4>
    
  </div>

  <div>
    <div class="heade">
      <span>symbol</span>
      <span>symbol</span>
      <span>symbol</span>
    </div>
    <div class="mony" v-for=" item in filterSymbol">
      <div class="symbol">{{ item.symbol }}</div>
      <div class="price">{{ item.askPrice }}</div>
      <div :class="item.priceChangePercent < 0 ? 'min' : 'max' " >{{ item.priceChangePercent }} %</div>

    </div>
  </div>



    
</template>


<style scoped>

.heade{
  width: 100%;
  padding: 10px;
  border-bottom: 2px solid var(--dark-alt);
  background: var(--darkblack);

  display: flex;
  align-items: center;
  justify-content: space-around;
  position: sticky;
  top: 0;
}
.al{
  width: 100%;
  position: relative;
  list-style: none;
}
form{
  width: 70%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  
}

input{
   
  padding: 10px 20px;
  border-radius: 10px;
}
.deposit{
  width: 50%;
  background: rgba(0, 224, 0, 0.267);
  
}
.removal{
  background: rgba(224, 0, 0, 0.288);
  
}
.disable{
  background: black;
}

.container-button{
  display: flex;
  gap: 10px;
}

.mony{
  display: flex;
  justify-content: space-around;

  padding: 10px 0;
  border-bottom: 1px solid var(--dark-alt);

}
.min{
  color: red;
}
.max{
  color: green;
}
span{
  font-size: 30px;
  color: var(--primary);
}

</style>

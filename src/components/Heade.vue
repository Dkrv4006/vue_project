<template>
    <header>
        <div>

    <select placeholder="ds" value="ddss" v-model="selectedOption" @change="submit" class="meu-select">
        <option value="" disabled selected > -- Selecione --</option>
      <option value="ADAUSDT" >ADA/USDT</option>
      <option value="ETHUSDT">ETH/USDT</option>
      <option value="BTCUSDT">BTC/USDT</option>
    </select>

  </div>

    </header>

</template>

<script>
 
 export default {
    name: 'Heade',

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
header{
    /* position: absolute; */
    width: 100%;
    height: 70px;
    background: var(--darkblack);
    cursor:all-scroll;
    display: flex;
    justify-content: end;
    align-items: center;
    padding: 0 15px;
}
.meu-select {
  padding: 10px;
  border-radius: 5px;
  border: none;
  text-align: center;
  font-size: 16px;
  color: var(--primary);
  background-color: var(--dark);
  cursor: pointer;
}
.meu-select:focus {
  outline: none;
  border-color: var(--primary);
  box-shadow: 0 0 0 2px var(--primary);
}

</style>
import axios from "axios"

const state = {
  data: [''],
  coin: ['']

}

const mutations = {
  setData(state, data) {
    state.data = data

  },
  setCoin(state,coin){
    state.coin = coin
    console.log(coin);
     
  },

}

const actions = {
  async  fetchData(commit, payload) {


    
  //   const moedasUSDT = dat.filter(item => item.symbol.slice(-4) === 'USDT');

    const symbols = []// lista de símbolos das moedas que você deseja obter o histórico
const interval = '1M'; // intervalo de tempo mensal
const limit = 12; // número máximo de resultados (12 meses)
const startTime = new Date().setFullYear(new Date().getFullYear() - 1); // data de um ano atrás
const endTime = Date.now(); // data atual
console.log(startTime);
console.log(endTime);
if(payload !== undefined){
  symbols.push(payload)
}else{
  console.log(this.setData);
  symbols.push('BTCUSDT')
}

commit.commit('setCoin',symbols)
const requests = symbols.map(symbol => {
  const url = `https://api.binance.com/api/v3/klines?symbol=${symbols}&interval=${interval}&limit=${limit}&startTime=${startTime}&endTime=${endTime}`;
  return axios.get(url);
});


      try {
        const responses = await Promise.all(requests);
        const data = responses.map((response) => {
          const items = response.data;
      
          const newData = items.map((item) => ({
            element: new Date(item[0]).toLocaleDateString('pt-BR'),
            openprice: item[1],
            maxprice: item[2],
            minprice: item[3],
            closeprice: item[4],
          }));
      
          return newData;
        }).flat();
      
  
        // console.table(data);
        commit.commit('setData' , data)
      } catch (error) {
        console.error(error);
      }
    },

//     const symbols = ['BTCUSDT', 'ETHUSDT', 'BNBUSDT'] // lista de símbolos de moeda desejados
  async  fetch(commit, payload) {

   const dat = await  axios.get('https://api.binance.com/api/v3/ticker/24hr')
    .then(response => response.data)
    .catch(error => {
      console.error(error)
    })
    const data = new Date().getTime()
    const dataFormatada = new Date(data).toLocaleDateString('pt-BR')
    console.log(Date.now())
    
    
    const moedasUSDT = dat.filter(item => item.symbol.slice(-4) === 'USDT');
    // commit.commit('setData' , moedasUSDT)



    console.log(moedasUSDT );


    }

//     const symbols = ['BTCUSDT', 'ETHUSDT', 'BNBUSDT'] // lista de símbolos de moeda desejados

// const startTime = 1640995200000 // carimbo de data/hora Unix em milissegundos para o início do período desejado (01/01/2022)
// const endTime = Date.now() // carimbo de data/hora Unix em milissegundos para o fim do período desejado (31/01/2022)

// const interval = '1M' // intervalo de tempo desejado (mensal)

// const fetchData = async (symbol) => {
//   const url = `https://api.binance.com/api/v3/klines?symbol=${symbol}&interval=${interval}&startTime=${startTime}&endTime=${endTime}`
//   const response = await axios.get(url)
//   const data = response.data
//   console.log(`Histórico de ${symbol}:`)
//   console.log(data)
// }

// symbols.forEach(fetchData)








  //  const dat = await  axios.get('https://api.binance.com/api/v3/ticker/24hr')
  //   .then(response => response.data)
  //   .catch(error => {
  //     console.error(error)
  //   })
  //   const data = new Date().getTime()
  //   const dataFormatada = new Date(data).toLocaleDateString('pt-BR')
  //   console.log(Date.now())
    
    
  //   const moedasUSDT = dat.filter(item => item.symbol.slice(-4) === 'USDT');
  //   commit.commit('setData' , moedasUSDT)



    // console.log(moedasUSDT );
    
  }

export default {
  state,
  mutations,
  actions
}

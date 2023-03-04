import axios from "axios"

const state = {
  data: [''],
  coin: [''],
  mony: ['']

}

const mutations = {
  setData(state, data) {
    state.data = data

  },
  setCoin(state,coin){
    state.coin = coin
    console.log(coin);
     
  },
  setMony(state,mony){
    state.mony = mony
    console.log(mony);
     
  },

}

const actions = {

  async  fetchData(commit, payload) {

    const symbols = []
    const interval = '1M';
    const limit = 12;
    const startTime = new Date().setFullYear(new Date().getFullYear() - 1); // data de um ano atrás
    const endTime = Date.now(); // data atual

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

      commit.commit('setData' , data)
    } catch (error) {
        console.error(error);
      }
  },


  async mony(commit, payload) {

    const mony = await axios.get('https://api.binance.com/api/v3/ticker/24hr')
                            .then(response => response.data)
                            .catch(error => {
                              console.error(error)
                            })
      const date = new Date().getTime()
      const dataFormatada = new Date(date).toLocaleDateString('pt-BR')
      
      const moedasUSDT = mony.filter(item => item.symbol.slice(-4) === 'USDT' && item.symbol.length <= 8);
      commit.commit('setMony' , moedasUSDT)



      // console.log(moedasUSDT );
  }  
}
export default {
  state,
  mutations,
  actions
}

import axios from "axios"
const state = {
  data: []
}

const mutations = {
  setData(state, data) {
    state.data = data
  }
}

const actions = {
  async  fetchData(commit) {
   const dat = await  axios.get('https://api.binance.com/api/v3/ticker/24hr')
    .then(response => response.data)
    .catch(error => {
      console.error(error)
    })
    
    
    const moedasUSDT = dat.filter(item => item.symbol.slice(-4) === 'USDT');
    commit.commit('setData' , moedasUSDT)



    // console.log(moedasUSDT );
    
  }
}

export default {
  state,
  mutations,
  actions
}

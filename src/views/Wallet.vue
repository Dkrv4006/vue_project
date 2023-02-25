<template>
    <div>
      <div v-for="coin in coins" :key="coin.id">
        <h2>{{ coin.name }} ({{ coin.symbol }})</h2>
        <p>Preço: {{ coin.price }}</p>
        <img :src="coin.logo" alt="Logo" width="50">
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        coins: [],
      };
    },
    // async created() {
    //   const apiKey = '3d1fac3f-7cae-48cd-994d-7c085aba9619';
    //   const symbols = 'BTC,ETH';
    //   const limit = 2;
    //   const response = await axios.get(`https://sandbox-api.coinmarketcap.com/v1/cryptocurrency/listings/latest`, {
    //     headers: {
    //       'X-CMC_PRO_API_KEY': apiKey,
    //     },
    //   });
    //   const data = response.data.data;
    //   console.log(data);
    //   this.coins = Object.keys(data).map(key => ({
    //     id: data[key].id,
    //     name: data[key].name,
    //     symbol: data[key].symbol,
    //     price: data[key].quote.USD.price,
    //     logo: `https://s2.coinmarketcap.com/static/img/coins/64x64/${data[key].id}.png`,
    //   }));
//     new Promise(async (resolve, reject) => {
//   try {
//     response = await axios.get('https://sandbox-api.coinmarketcap.com/v1/cryptocurrency/listings/latest', {
//       headers: {
//         "X-CMC_PRO_API_KEY": '3d1fac3f-7cae-48cd-994d-7c085aba9619',
//       },
//     });
//   } catch(ex) {
//     response = null;
//     // error
//     console.log(ex);
//     reject(ex);
//   }
//   if (response) {
//     // success
//     const json = response.data;
//     console.log(json);
//     resolve(json);
//   }
// });
//     },
  };
  </script>

<template>
    <div class="carrossel">
      <div class="carrossel-container"  ref="container">
        <div v-for="(item, index) in items" :key="index" class="carrossel-item">
          {{ item }}
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        items: [
        {
          name: "Bitcoin",
      icon:''
    },
    {
      name: "Ethereum",
      icon:''
    },
    {
      name: "Binance Coin",
      icon:''
    },
    {
      name: "Cardano",
      icon:''
    },
    {
      name: "Dogecoin",
      icon:''
    },
    {
      name: "XRP",
      icon:''
   , },
    {
      name: "Polkadot",
      icon:''
    },
    {
      name: "Uniswap",
      icon:''
    },
    {
      name: "Litecoin",
      icon:''
    },
    {
      name: "Chainlink",
      icon:''
    },
    {
      name: "Bitcoin Cash",
      icon:''
    },
    {
      name: "Stellar",
      icon:''
    },
    {
      name: "Theta Token",
      icon:''
    },
    {
      name: "VeChain",
      icon:''
    },
    {
      name: "EOS",
      icon:''
   , },
    {
      name: "Filecoin",
      icon:''
    },
    {
      name: "TRON",
      icon:''
  ,  },
    {
      name: "Solana",
      icon:''
,    },
    {
      name: "Cosmos",
      icon:''
,    },
    {
      name: "Algorand",
      icon:''
    }
        ],
        offset: 0,
        currentIndex: 0,
        width: 0,
      };
    },

  };
  </script>
  
  <style scoped>
  .carrossel {
    width: 100%;
    overflow: hidden;
    position: relative;
  }
  
  .carrossel-container {
    display: flex;
    animation: slide 20s linear infinite;
    white-space: nowrap;
  }
  
  @keyframes slide {
    0% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(-200%);
    }
  }
  
  .carrossel-item {
    flex: 0 0 300px;
    margin-right: 10px;
    background-color: #ccc;
    padding: 20px;
    text-align: center;
    animation: slide-reverse 20s linear infinite;
  }
/*   
  @keyframes slide-reverse {
    0% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(0);
    }
  } */
  </style>
  
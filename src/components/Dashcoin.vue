<template>
    <div class="carrossel">
      <div class="carrossel-container"  ref="container">
        <div v-for="(item, index) in items" :key="index" class="carrossel-item">
          <i :class="item.icon"></i>
          <span>daniel</span>
          <!-- {{ item.name }} -->
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import btc from '../../public/SVG/btc.svg'
  export default {
    data() {
      return {
        items: [
        {
          name: "Bitcoin",
          icon: 'cf cf-btc'
    },
    {
      name: "Ethereum",
      icon:'cf cf-ebtc'
    },
    {
      name: "Cardano",
      icon:'cf cf-ada'
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
    width:100%;
    max-width: 100%;
 
    overflow: hidden;
    position: relative;
  }
  
  .carrossel-container {
    display: flex;
    gap: 10px;
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
  .carrossel-item{
    border-radius: 30px;
  }
  
  .carrossel-item {
    flex: 0 0 200px;

    background-color: #ccc;
    padding: 20px 5px;
    text-align: center;
    /* animation: slide-reverse 20s linear infinite; */
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

  i{
    width: 40%;
    height: 100%;
    background: red;
  }
  </style>
  
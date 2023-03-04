<template>
    <div class="carrossel">
      <div class="carrossel-container"  ref="container">
        <div v-for="(item, index) in items" :key="index" class="carrossel-item">
          <div class="icon">
            <i :class="item.icon"></i>
          </div>
          <span>{{ item.name }}</span>
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
      icon:'cf cf-doge'
    },
    {
      name: "XRP",
      icon:'cf cf-xrp'
   , },
    {
      name: "Polkadot",
      icon:'cf cf-dot'
    },
    {
      name: "Litecoin",
      icon:'cf cf-ltc'
    },
    {
      name: "Chainlink",
      icon:'cf cf-link'
    },

    {
      name: "Gala",
      icon:'cf cf-gala'
    },
    {
      name: "Hedera",
      icon:'cf cf-hbar'
    },
    {
      name: "Solana",
      icon:'cf cf-sol'
   },
   {
      name: "Poly",
      icon:'cf cf-matic'
    },

        ],
      };
    },

  };
  </script>
  
  <style scoped>
span{
   width: 70%;
   color: white;
   font-size: 16px;
  }
  .carrossel {
    width:100%;
    max-width: 100%;
 
    overflow: hidden;
    position: relative;
  }
  
  .carrossel-container {
    display: flex;
    gap: 10px;
    animation: slide 40s linear infinite;
    /* white-space: nowrap; */
    
    
  }
.icon{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 35%;
    height: 100%;
    border-radius: 60px;
    background: rgb(26, 26, 26);
  }
.icon > i{
  font-size: 40px;
  color: var(--primary)
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
    border-radius: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .carrossel-item {
    flex: 0 0 170px;
    height: 60px;
    background-color: #1e293b;
    padding: 1px;
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

  </style>
  
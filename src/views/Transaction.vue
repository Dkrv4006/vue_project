<template>
    <div>
      <div v-for="(ticker, index) in tickers" :key="index">
        {{ ticker.symbol }}: {{ ticker.price }}
      </div>
    </div>
  </template>
  
  <script>
  import WebSocket from 'ws'
  
  export default {
    data() {
      return {
        tickers: []
      }
    },
    mounted() {
      const socket = new WebSocket('wss://stream.binance.com:9443/ws/!ticker@arr')
  
      socket.on('message', (data) => {
        const tickers = JSON.parse(data).map(item => ({ symbol: item.s, price: item.c }))
        this.tickers = tickers
      })
    }
  }
  </script>
  
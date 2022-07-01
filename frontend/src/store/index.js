import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    btcPriceBuy: "",
    btcPriceSell: "",
    btcSpot: "",
  },

  mutations: {
    SET_BTC_DATA: (state, payload) => {
      console.log(payload);
      (state.btcPriceBuy = payload.buyAt),
        (state.btcPriceSell = payload.sellAt),
        (state.btcSpot = payload.spot);
    },
  },
  actions: {
    async getBitcoinData({ commit }, btcData) {
      try {
        const BTC_DATA = { action: "SUBSCRIBE", market: "btc_mxn" };
        this.socket = new WebSocket("ws://localhost:9001/ws");
        this.socket.onopen = () => {
          this.status = "connected";
          this.socket.send(JSON.stringify(BTC_DATA));
          this.socket.onmessage = (event) => {
            const PARSED = JSON.parse(event.data);
            const BTC_DATA = PARSED.btc_mxn;
            console.log(BTC_DATA);
            commit("SET_BTC_DATA", BTC_DATA);
          };
        };
      } catch (error) {
        console.log(error);
      }
    },
  },

  getters: {
    bitcoinPriceBuy: (state) => state.btcPriceBuy,
    bitcoinPriceSell: (state) => state.btcPriceSell,
    bitcoinSpot: (state) => state.btcSpot,
  },
});

import Vue from "vue";
import Vuex from "vuex";
import { BASE_PROD_URL, BASE_DEV_URL } from "../API/index.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    btcPriceBuy: "",
    btcPriceSell: "",
    btcSpot: "",
  },

  mutations: {
    SET_BTC_DATA: (state, payload) => {
      (state.btcPriceBuy = payload.buyAt),
        (state.btcPriceSell = payload.sellAt),
        (state.btcSpot = payload.spot);
    },
  },
  actions: {
    async getBitcoinData({ commit }, btcData) {
      try {
        const BTC_DATA = { action: "SUBSCRIBE", market: "btc_mxn" };
        if (process.env.NODE_ENV === "development") {
          this.socket = new WebSocket(BASE_DEV_URL);
        } else {
          this.socket = new WebSocket(BASE_PROD_URL);
        }

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

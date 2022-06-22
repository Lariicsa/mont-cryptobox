<template>
  <div id="app" class="space">
    <div class="container__main">
      <Header
        :itemsList="topMenuList"
        :priceData="btcWSpricer"
        :listAlcoins="btcWsSellBuy"
      />
      <router-view />
    </div>
  </div>
</template> 
<script>
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import DATA from "./data";

export default {
  name: "App",

  components: {
    Footer,
    Header,
  },

  data() {
    return {
      topMenuList: DATA.topNavigation,
      footerItems: DATA.footer.items,
      footerSocial: DATA.footer.social,
      socket: null,
      btcData: null,
      btcPrice: "",
      priceBuy: 0,
      priceSell: 0,
    };
  },

  created() {
    const BTC_DATA = { action: "SUBSCRIBE", market: "btc_mxn" };
    this.socket = new WebSocket("ws://localhost:9001/ws");
    this.socket.onopen = () => {
      this.status = "connected";
      this.socket.send(JSON.stringify(BTC_DATA));
      this.socket.onmessage = (event) => {
        console.log(event.data);
        let PARSED = JSON.parse(event.data);
        this.btcData = PARSED;
        this.btcPrice = PARSED.btc_mxn.spot;
        this.priceBuy = PARSED.btc_mxn.buyAt;
        this.priceSell = PARSED.btc_mxn.sellAt;
      };
    };
  },

  computed: {
    btcWSpricer() {
      let WS_DATA = this.btcPrice;
      const DATA = {
        altcoin: "Bitcoin",
        price: WS_DATA,
        value: "bitcoin",
      };
      return DATA;
    },

    btcWsSellBuy() {
      let WS_BUY = this.priceBuy;
      let WS_SELL = this.priceSell;
      const DATA = {
        altcoin: "Bitcoin",
        slug: "btc",
        priceBuy: `Compra ${WS_BUY} MXN`,
        priceSell: `Venta ${WS_SELL} MXN`,
      };
      return [DATA];
    },
  },
};
</script>

<template>
  <div id="app" class="space">
    <div class="container__main">
      <Header :itemsList="topMenuList" :priceData="btcWSpricer" />
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
      btcWSprice: {
        altcoin: "Bitcoin",
        value: "bitcoin",
        price: "578,638.68",
      },
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
  },
};
</script>

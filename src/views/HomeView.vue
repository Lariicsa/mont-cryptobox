<template>
  <div class="container__main">
    <Header
      :itemsList="topMenuList"
      :priceData="btcWSpricer"
      :listAlcoins="btcWsSellBuy"
    />
    <div class="container__inner">
      <div class="row globalmargin">
        <HeroImage :title="heroImageData.title" :text="heroImageData.text" />
        <Cardlist
          :altcoins="btcWsSellBuy"
          :isRelative="true"
          top="-2rem"
          right="0"
        />
      </div>
      <div class="row globalmargin extratop">
        <div class="grid__container cols4">
          <Icontext
            v-for="item in icons"
            :title="item.title"
            :text="item.text"
            :icon="item.icon"
            :key="item.title"
          />
        </div>
      </div>
      <div id="bitcoin" class="row globalmargin">
        <Commoncontent :image="content1.image" :text="content1.text">
          <Datitle :span="content1.span" :title="content1.title" />
        </Commoncontent>
      </div>

      <div id="cajeros" class="row right globalmargin">
        <Maps
          :mapData="currentBranch"
          @onChangeDrop="setBranchData(currentBranch)"
        >
          <template v-slot:drop-slot>
            <Dropselect
              v-model="selectedBranch"
              variant="normal"
              :options="branchesListFormatted"
              name="branches"
              @onChange="setBranchData(selectedBranch)"
            />
          </template>
          <template v-slot:card-slot>
            <CardlistAction
              :dropdata="branchesData"
              :itemSelected="currentBranch.slug"
              @onClick="getBranchData"
            />
          </template>
        </Maps>
      </div>
      <div class="row between globalmargin">
        <Form
          buttonText="Enviar"
          formTitle="Mantente informado"
          textHelp="Leo mauris viverra sapien, dictumst nunc egestas morbi magna. Integer ligula tellus fermentum nec.
Volutpat velit turpis euismod. Mi blandit egestas netus nisl facilisis diam, turpis leo. Habitant turpis orci habitant."
        />
      </div>
      <Footer :items="footerItems" :social="footerSocial" />
    </div>
  </div>
</template>

<script>
import CardlistAction from "@/components/CardlistAction";
import Cardlist from "@/components/CardList";
import Commoncontent from "@/components/CommonContent";
import Datitle from "@/components/Titles";
import Dropselect from "@/components/Dropselect";
import Footer from "@/components/Footer";
import Form from "@/components/Form";
import Grid from "@/components/Grid";
import Header from "@/components/Header";
import HeroImage from "@/components/HeroImage";
import Icontext from "@/components/IconText";
import Maps from "@/components/Maps";
import DATA from "../data";

export default {
  name: "HomeView",

  components: {
    CardlistAction,
    Cardlist,
    Commoncontent,
    Datitle,
    Dropselect,
    Footer,
    Form,
    Grid,
    Header,
    HeroImage,
    Icontext,
    Maps,
  },

  data() {
    return {
      topMenuList: DATA.topNavigation,
      heroImageData: DATA.heroImage,
      icons: DATA.iconText,
      footerItems: DATA.footer.items,
      footerSocial: DATA.footer.social,
      mapsData: DATA.branches[0],
      branchesData: DATA.branches,
      currentBranch: DATA.branches[0],
      content1: DATA.static01,
      title2: DATA.static02,
      title3: DATA.static03,
      listAlcoins: DATA.listCryptos,
      socket: null,
      btcData: null,
      selectedBranch: "delvalle",
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
        this.btcData = PARSED.btc_mxn;
        this.priceBuy = PARSED.btc_mxn.buyAt;
        this.priceSell = PARSED.btc_mxn.sellAt;
      };
    };
  },

  mounted() {
    this.setBranchData;
    this.branchesList;
  },

  methods: {
    getBranchData(data) {
      this.currentBranch = data;
    },

    setBranchData(data) {
      const DROP_OPTION = data;
      switch (DROP_OPTION) {
        case "delvalle":
          this.currentBranch = this.branchesListFormatted[0];
          break;
        case "gdl":
          this.currentBranch = this.branchesListFormatted[1];
          break;
        case "mty":
          this.currentBranch = this.branchesListFormatted[2];
          break;
        case "qro":
          this.currentBranch = this.branchesListFormatted[3];
          break;
        case "satelite":
          this.currentBranch = this.branchesListFormatted[4];
          break;
        default:
          this.currentBranch = this.branchesListFormatted[0];
          break;
      }
    },
  },

  computed: {
    branchesListFormatted() {
      let branches = this.branchesData.map((ele) => {
        return { ...ele, value: ele.slug, text: ele.branchname };
      });
      return branches;
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

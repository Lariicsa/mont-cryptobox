<template>
  <div class="container__main">
    <Header
      :itemsList="topMenuList"
      :priceData="btcWSpricer"
      :listAlcoins="btcWsSellBuy"
    >
      <template v-slot:nav-cardlist>
        <Cardlist
          :altcoins="btcWsSellBuy"
          :isRelative="true"
          top="0"
          right="0"
          ui="simple"
        />
      </template>
    </Header>
    <div class="container__inner">
      <div class="row globalmargin">
        <HeroImage :title="heroImageData.title" :text="heroImageData.text" />
        <Cardlist
          :altcoins="btcWsSellBuy"
          :isRelative="true"
          top="-16%"
          right="0"
        />
      </div>

      <div id="bitcoin" class="row globalmargin">
        <Commoncontent :image="content1.image" :text="content1.text">
          <Datitle :span="content1.span" :title="content1.title" />
        </Commoncontent>
      </div>

      <div id="bitcoin-en-efectivo" class="row center globalmargin extratop">
        <Datitle
          :span="iconsTitle.span"
          :title="iconsTitle.title"
          alignment="center"
        />
        <div class="grid__container cols4 iconsmargin">
          <Icontext
            v-for="item in icons"
            :title="item.title"
            :text="item.text"
            :icon="item.icon"
            :key="item.title"
          />
        </div>
      </div>
      
      <div id="cajeros" class="row right globalmargin extratop">
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

      <div id="contacto" class="row between globalmargin">
        <Form
          :buttonText="formdata.textButton"
          :formTitle="formdata.formTitle"
          :formText="formdata.formText"
          :formsubTitle="formdata.formSubtitle"
          :textHelp="formdata.formHelptext"
        />
      </div>
      <Footer :items="footerItems" :social="footerSocial" />
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
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
      iconsTitle: DATA.iconsTitle,
      footerItems: DATA.footer.items,
      footerSocial: DATA.footer.social,
      mapsData: DATA.branches[0],
      branchesData: DATA.branches,
      currentBranch: DATA.branches[0],
      content1: DATA.static01,
      title2: DATA.static02,
      title3: DATA.static03,
      listAlcoins: DATA.listCryptos,
      formdata: DATA.formData,
      socket: null,
      btcData: null,
      selectedBranch: "delvalle",
    };
  },

  created() {
    this.getBitcoinData()
  },

  mounted() {
    this.setBranchData;
    this.branchesList;
  },

  methods: {
    ...mapActions(["getBitcoinData"]),
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
    ...mapGetters(["bitcoinPriceBuy", "bitcoinPriceSell", "bitcoinSpot"]),
    branchesListFormatted() {
      let branches = this.branchesData.map((ele) => {
        return { ...ele, value: ele.slug, text: ele.branchname };
      });
      return branches;
    },

    btcWsSellBuy() {
      const WS_BUY = this.bitcoinPriceBuy;
      const WS_SELL = this.bitcoinPriceSell;
      const DATA = {
        altcoin: "Bitcoin",
        slug: "btc",
        priceBuy: `Compra ${WS_BUY} MXN`,
        priceSell: `Venta ${WS_SELL} MXN`,
      };
      return [DATA];
    },

    btcWSpricer() {
      const WS_DATA = this.bitcoinSpot;
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

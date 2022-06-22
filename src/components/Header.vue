
<template>
  <div class="header">
    <a href="/" class="header__logo"></a>
    <div class="header__burger" @click="burgerClick"></div>
    <Navigation
      ui="mobile"
      v-show="isMenuOpen"
      :itemsList="itemsList"
      :priceData="priceData"
    />
    <div class="header__navigation">
      <Navigation
        :itemsList="itemsList"
        @clickPrice="showPrices"
        :priceData="priceData"
      />
      <Cardlist
        v-show="showAltcoins"
        :altcoins="listAlcoins"
        @onMouseLeave="hidePricesOnBlur"
        top="6rem"
        right="0"
      />
    </div>
  </div>
</template>
<script>
import Cardlist from "@/components/CardList.vue";
import Navigation from "@/components/Navigation.vue";
import DATA from "../data/index";
export default {
  name: "Header",
  components: {
    Cardlist,
    Navigation,
  },

  props: {
    itemsList: {
      type: Array,
      default: ["item1"],
    },
    ui: {
      type: String,
      default: "simple",
    },
    hasSubmenues: {
      type: Boolean,
      default: false,
    },
    priceData: {
      type: Object,
      default: null,
    },
    listAlcoins: {
      type: Array,
    },
  },

  data() {
    return {
      isMenuOpen: false,

      showAltcoins: false,
    };
  },
  methods: {
    burgerClick() {
      this.isMenuOpen = !this.isMenuOpen;
    },

    showPrices() {
      this.showAltcoins = !this.showAltcoins;
    },

    hidePricesOnBlur() {
      this.showAltcoins = false;
      this.isMenuOpen = false;
    },
  },
};
</script>
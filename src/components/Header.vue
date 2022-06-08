
<template>
  <div class="header row between xcenter">
    <a href="/" class="header__logo"></a>
    <div class="header__burger" @click="burgerClick"></div>
    <Navigation v-show="isMenuOpen" :itemsList="itemsList" />
    <div class="header__navigation">
      <Navigation :itemsList="itemsList" />
      <Cryptoprice v-model="currentAltcoin" :salected="priceData[0]" />
    </div>
  </div>
</template>
<script>
import Cryptoprice from "@/components/Cryptoprice.vue";
import Navigation from "@/components/Navigation.vue";
import DATA from "../data";
export default {
  name: "Header",
  components: {
    Cryptoprice,
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
  },

  data() {
    return {
      isMenuOpen: false,
      currentAltcoin: "Bitcoin",
      priceData: DATA.cryptoPrices,
    };
  },
  methods: {
    burgerClick() {
      this.isMenuOpen = !this.isMenuOpen;
    },

    selectAltcoin() {},
  },
};
</script>
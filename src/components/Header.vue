
<template>
  <div class="header row between xcenter">
    <a href="/" class="header__logo"></a>
    <div class="header__burger" @click="burgerClick"></div>
    <Navigation ui="mobile" v-show="isMenuOpen" :itemsList="itemsList" />
    <div class="header__navigation">
      <Navigation :itemsList="itemsList" />
      <Cardlist :altcoins="listAlcoins" />
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
  },

  data() {
    return {
      isMenuOpen: false,
      listAlcoins: DATA.listCryptos,
    };
  },
  methods: {
    burgerClick() {
      this.isMenuOpen = !this.isMenuOpen;
    },
  },
};
</script>
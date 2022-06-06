
<template>
  <div class="header row between xcenter">
    <a href="/" class="header__logo"></a>
    <div class="header__burger" @click="burgerClick"></div>
    <Navigation v-show="isMenuOpen" :itemsList="itemsList" />
    <div class="header__navigation">
      <Navigation :itemsList="itemsList" />
    </div>
  </div>
</template>
<script>
import Navigation from "@/components/Navigation.vue";
export default {
  name: "Header",
  components: {
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
    };
  },
  methods: {
    burgerClick() {
      this.isMenuOpen = !this.isMenuOpen;
    },
  },
};
</script>

<template>
  <div class="row between xcenter">
    <a href="/" class="header__logo"></a>
    <Navigation :itemsList="itemsList" />
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
};
</script>
<template>
  <div class="container__main">
    <Header :itemsList="topMenuList" />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import DATA from "./data";
export default {
  name: "App",
  components: {
    Header,
  },

  data() {
    return {
      topMenuList: DATA.topNavigation,
    };
  },

  computed: {},
};
</script>

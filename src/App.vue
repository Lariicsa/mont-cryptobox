<template>
  <div id="app" class="space">
    <Header :itemsList="topMenuList" />
    <router-view />
  </div>
</template> 
<script>
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import DATA from "./data";

export default {
  name: "HomeView",

  components: {
    Footer,
    Header,
  },

  data() {
    return {
      topMenuList: DATA.topNavigation,
      footerItems: DATA.footer.items,
      footerSocial: DATA.footer.social,
    };
  },
};
</script>

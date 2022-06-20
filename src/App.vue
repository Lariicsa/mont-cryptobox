<template>
  <div id="app" class="space">
    <div class="container__main">
      <Header :itemsList="topMenuList" />
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
    };
  },
};
</script>

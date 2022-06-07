<template>
  <div class="container__main">
    <Header :itemsList="topMenuList" />
    <div class="container__inner">
      <HeroImage :title="heroImageData.title" :text="heroImageData.text" />
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import HeroImage from "@/components/HeroImage.vue";
import DATA from "./data";
export default {
  name: "App",
  components: {
    Header,
    HeroImage,
  },

  data() {
    return {
      topMenuList: DATA.topNavigation,
      heroImageData: DATA.heroImage,
    };
  },

  computed: {},
};
</script>

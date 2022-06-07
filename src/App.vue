<template>
  <div class="container__main">
    <Header :itemsList="topMenuList" />
    <div class="container__inner">
      <HeroImage :title="heroImageData.title" :text="heroImageData.text" />
      <div class="row between">
        <Icontext
          v-for="item in icons"
          :title="item.title"
          :text="item.text"
          :icon="item.icon"
          :key="item.title"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import HeroImage from "@/components/HeroImage.vue";
import Icontext from "@/components/IconText.vue";
import DATA from "./data";
export default {
  name: "App",
  components: {
    Header,
    HeroImage,
    Icontext,
  },

  data() {
    return {
      topMenuList: DATA.topNavigation,
      heroImageData: DATA.heroImage,
      icons: DATA.iconText,
    };
  },

  computed: {},
};
</script>

<template>
  <div class="container__main">
    <Header :itemsList="topMenuList" />
    <div class="container__inner">
      <HeroImage :title="heroImageData.title" :text="heroImageData.text" />
      <Grid>
        <Icontext
          v-for="item in icons"
          :title="item.title"
          :text="item.text"
          :icon="item.icon"
          :key="item.title"
        />
      </Grid>
    </div>
  </div>
</template>

<script>
import Grid from "@/components/Grid.vue";
import Header from "@/components/Header.vue";
import HeroImage from "@/components/HeroImage.vue";
import Icontext from "@/components/IconText.vue";
import DATA from "./data";
export default {
  name: "App",
  components: {
    Grid,
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
<style lang="scss">
  .grid__container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    position: relative;
    justify-items: stretch;
    grid-column-gap: 0.8rem;
    grid-row-gap: 0.8rem;
    height: auto;
  }
</style>

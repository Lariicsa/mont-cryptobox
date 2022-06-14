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
      <div class="row right">
        <Maps :mapData="mapsData"> <Dropselect /></Maps>
      </div>
      <Footer logo="" :items="footerItems" :social="footerSocial" />
    </div>
  </div>
</template>

<script>
import Footer from "@/components/Footer.vue";
import Grid from "@/components/Grid.vue";
import Header from "@/components/Header.vue";
import HeroImage from "@/components/HeroImage.vue";
import Icontext from "@/components/IconText.vue";
import Maps from "@/components/Maps.vue";
import DATA from "./data";
import Dropselect from "./components/Dropselect.vue";

export default {
  name: "App",
  components: {
    Dropselect,
    Footer,
    Grid,
    Header,
    HeroImage,
    Icontext,
    Maps,
  },

  data() {
    return {
      topMenuList: DATA.topNavigation,
      heroImageData: DATA.heroImage,
      icons: DATA.iconText,
      footerItems: DATA.footer.items,
      footerSocial: DATA.footer.social,
      mapsData: DATA.branches[0],
    };
  },
};
</script>
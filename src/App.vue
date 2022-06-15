<template>
  <div class="container__main">
    <Header :itemsList="topMenuList" />
    <div class="container__inner">
      <HeroImage :title="heroImageData.title" :text="heroImageData.text" />
      <div class="row globalmargin">
        <div class="grid__container cols4">
          <Icontext
            v-for="item in icons"
            :title="item.title"
            :text="item.text"
            :icon="item.icon"
            :key="item.title"
          />
        </div>
      </div>
      <div class="row right globalmargin">
        {{ currentBranch.branchname }}
        <Maps
          :mapData="currentBranch"
          :dropselectModel="currentBranch.text"
          :dropOptions="branchesListFormatted"
          :dropName="currentBranch.slug"
          @onChangeDrop="getBranchData"
        >
          <CardlistAction :dropdata="branchesData" @onClick="getBranchData"
        /></Maps>
      </div>
      <Footer logo="" :items="footerItems" :social="footerSocial" />
    </div>
  </div>
</template>

<script>
import CardlistAction from "@/components/CardlistAction";
import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Header from "@/components/Header";
import HeroImage from "@/components/HeroImage";
import Icontext from "@/components/IconText";
import Maps from "@/components/Maps";
import DATA from "./data";

export default {
  name: "App",

  components: {
    CardlistAction,
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
      branchesData: DATA.branches,
      currentBranch: DATA.branches[0],
    };
  },

  mounted() {
    this.branchesList;
  },

  methods: {
    getBranchData(data) {
      this.currentBranch = data;
      console.log("data", data);
    },
  },

  computed: {
    branchesListFormatted() {
      let branches = this.branchesData.map((ele) => {
        return { ...ele, value: ele.slug, text: ele.branchname };
      });
      return branches;
    },
  },
};
</script>
<template>
 
    <!-- <Header :itemsList="topMenuList" /> -->
    <div class="container__inner">
      <div class="row globalmargin">
        <HeroImage :title="heroImageData.title" :text="heroImageData.text" />
        <Cardlist
          :altcoins="listAlcoins"
          :isRelative="true"
          top="-2rem"
          right="0"
        />
      </div>
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
      <div class="row globalmargin">
        <Commoncontent :image="content1.image" :text="content1.text">
          <Datitle :span="content1.span" :title="content1.title" />
        </Commoncontent>
      </div>

      <div class="row right globalmargin">
        <!-- <Dropselect
          v-model="currentBranch"
          :options="branchesListFormatted"
          name="branches"
          @onChange="getBranchData(currentBranch)"
        /> -->
        <Maps
          :mapData="currentBranch"
          :dropselectModel="currentBranch"
          :dropOptions="branchesListFormatted"
          :dropName="currentBranch.slug"
          @onChangeDrop="getBranchData"
        >
          <CardlistAction :dropdata="branchesData" @onClick="getBranchData"
        /></Maps>
      </div>
      <Footer :items="footerItems" :social="footerSocial" />
    </div>
</template>

<script>
import CardlistAction from "@/components/CardlistAction";
import Cardlist from "@/components/CardList";
import Commoncontent from "@/components/CommonContent";
import Datitle from "@/components/Titles";
import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Header from "@/components/Header";
import HeroImage from "@/components/HeroImage";
import Icontext from "@/components/IconText";
import Maps from "@/components/Maps";
import DATA from "../data";

import Dropselect from "@/components/Dropselect.vue";

export default {
  name: "HomeView",

  components: {
    CardlistAction,
    Cardlist,
    Commoncontent,
    Datitle,
    Footer,
    Grid,
    Header,
    HeroImage,
    Icontext,
    Maps,

    Dropselect,
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
      content1: DATA.static01,
      title2: DATA.static02,
      title3: DATA.static03,
      listAlcoins: DATA.listCryptos,
    };
  },

  mounted() {
    this.branchesList;
    this.dropOption;
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

    dropOption: {
      get() {
        return this.currentBranch;
      },

      set(newValue) {
        this.currentBranch = newValue;
      },
    },
  },
};
</script>

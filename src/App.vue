<template>
  <div id="app" class="space">
      <router-view />
  
  </div>
</template> 
<script>
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default {
  name: "App",

  components: {
    Footer,
    Header,
  },

};
</script>

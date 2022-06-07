<template>
  <div class="footer">
    <Grid columns="repeat(3, 1fr)">
      <div class="footer__logo"></div>
      <ul class="footer__list">
        <li class="footer__item" v-for="item in items" :key="item.id">
          {{ item.name }}
        </li>
      </ul>
      <ul class="footer__social">
        <li
          :class="`footer__net ${net.name}`"
          v-for="net in social"
          :key="net.id"
        ></li>
      </ul>
    </Grid>
  </div>
</template>
<script>
import Grid from "@/components/Grid.vue";

export default {
  name: "Footer",
  components: {
    Grid,
  },
  props: {
    logo: {
      type: String,
    },
    items: {
      type: Array,
    },
    social: {
      type: Array,
    },
  },
};
</script>
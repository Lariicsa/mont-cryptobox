<template>
  <div class="footer">
    <div class="footer__content">
      <div class="footer__logo"></div>
      <ul class="footer__list">
        <li v-for="item in items" :key="item.id">
          <a class="footer__item" :href="item.link"> {{ item.name }}</a>
        </li>
      </ul>
      <ul class="footer__social">
        <li
          :class="`footer__net ${net.name}`"
          v-for="net in social"
          :key="net.id"
        >
          <a :href="net.link"></a>
        </li>
      </ul>
    </div>
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
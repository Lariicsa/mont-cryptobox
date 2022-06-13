<template>
  <div class="cardlist__wrapper" @mouseleave="onMouseLeave">
    <div class="cardlist" v-for="coin in altcoins" :key="coin.slug">
      <div class="cardlist__name">{{ coin.slug }}</div>
      <div class="cardlist__values">
        <div class="cardlist__price">{{ coin.priceBuy }}</div>
        <div class="cardlist__price">{{ coin.priceSell }}</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "CardList",

  props: {
    altcoins: {
      type: Array,
    },
  },

  mounted() {
    this.altcoins;
  },
  computed: {
    hasHr() {
      return this.altcoins.length > 1;
    },
  },

  methods: {
    onMouseLeave() {
      this.$emit("onMouseLeave");
    },
  },
};
</script>

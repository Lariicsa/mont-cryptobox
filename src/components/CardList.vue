<template>
  <div class="cardlist__wrapper">
    <ul class="cardlist">
      <template v-for="coin in altcoins" :key="coin.slug">
        <div class="cardlist__name">{{ coin.slug }}</div>
        <div class="cardlist__values">
          <div class="cardlist__price">{{ coin.priceBuy }}</div>
          <div class="cardlist__price">{{ coin.priceSell }}</div>
        </div>
      </template>
    </ul>
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
};
</script>

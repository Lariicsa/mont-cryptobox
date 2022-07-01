<template>
  <div
    :class="
      isRelative ? `cardlist__wrapper full ${ui}` : `cardlist__wrapper ${ui}`
    "
    @mouseleave="onMouseLeave"
    :style="`position:${
      isRelative ? 'relative' : 'absolute'
    }; top:${top}; right:${right}`"
  >
    <div :class="`cardlist ${ui}`" v-for="coin in altcoins" :key="coin.slug">
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
    isRelative: {
      type: Boolean,
      default: false,
    },
    top: {
      type: String,
      default: "6rem",
    },
    right: {
      type: String,
      default: "0",
    },
    ui: {
      type: String,
      default: "",
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

<template>
  <div class="cryptoprice__wrapper" @click="onClick">
    <div class="cryptoprice__selected">1 {{ altcoinData.altcoin }}</div>
    <div class="cryptoprice__quantity">{{ altcoinData.price }} MXN</div>
  </div>
</template>
<script>
export default {
  name: "Cryptoprice",

  props: {
    altcoinData: {
      type: Object,
      default: null,
    },
  },

  mounted() {
    this.altcoinData;
  },

  methods: {
    onChange(value) {
      this.$emit("input", parseInt(value));
      this.$emit("onChange");
    },
    onClick() {
      this.$emit("onClick");
    },
  },
};
</script>

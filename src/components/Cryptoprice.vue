<template>
  <div class="cryptoprice__wrapper">
    <div class="cryptoprice__selected">1 {{ salected.altcoin }}</div>
    <div class="cryptoprice__quantity">{{ salected.price }} MXN</div>
  </div>
</template>
<script>
export default {
  name: "Cryptoprice",

  props: {
    altcoins: {
      type: Array,
    },
    salected: {
      type: Object,
    },
  },

  mounted() {
    this.salected;
  },

  methods: {
    onChange(value) {
      this.$emit("input", parseInt(value));
      this.$emit("onChange");
    },
  },
};
</script>

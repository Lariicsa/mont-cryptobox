<template>
  <div class="dropselect">
    <div class="dropselect__title">Ubica un cajero</div>
    <div class="dropselect__subtitle">
      Ubica tu cajero dentro de nuestra red
    </div>
    <ul class="dropselect__branches">
      <li
        v-for="branch in dropdata"
        class="dropselect__item"
        :key="branch.slug"
        @click="onClick(branch)"
      >
        {{ branch.branchname }}
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "Dropselect",

  props: {
    dropdata: {
      type: Array,
    },
  },

  mounted() {
    this.dropdata;
  },

  methods: {
    onClick(data) {
      this.$emit("onClick", data);
    },
  },
};
</script>

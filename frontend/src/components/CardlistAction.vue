<template>
  <div class="actionlist">
    <div class="actionlist__title">Ubica un cajero</div>
    <div class="actionlist__subtitle">
      Ubica tu cajero dentro de nuestra red
    </div>
    <ul class="actionlist__branches">
      <li
        v-for="branch in dropdata"
        class="actionlist__item"
        :class="itemSelected === branch.slug ? 'selected' : ''"
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
  name: "CardlistAction",

  props: {
    dropdata: {
      type: Array,
    },
    itemSelected: {
      type: String,
      default: "",
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

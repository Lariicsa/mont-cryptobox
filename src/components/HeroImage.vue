<template>
  <div class="heroimage">
    <div class="row sm heroimage__content">
      <h2 class="heroimage__title">{{ title }}</h2>
      <p class="heroimage__text">
        {{ text }}
      </p>
    </div>
    <div class="row sm heroimage__image"></div>
  </div>
</template>
<script>
import CANVAS from "../utils/waving";
export default {
  name: "HeroImage",
  props: {
    title: {
      type: String,
    },
    text: {
      type: String,
    },
  },
};
</script>
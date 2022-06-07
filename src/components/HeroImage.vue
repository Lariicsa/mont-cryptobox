<template>
  <div class="heroimage">
    <div class="column heroimage__content">
      <h1 class="heroimage__title">{{ title }}</h1>
      <p class="heroimage__text" v-html="text"></p>
    </div>
    <div class="row heroimage__image"></div>
  </div>
</template>
<script>
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
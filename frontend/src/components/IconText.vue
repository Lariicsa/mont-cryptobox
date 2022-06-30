<template>
  <div class="iconimage">
    <div :class="'iconimage__icon ' + icon"></div>
    <h2 class="iconimage__title">{{ title }}</h2>
    <div class="iconimage__text">{{ text }}</div>
  </div>
</template>
<script>
export default {
  name: "IconText",
  props: {
    title: {
      type: String,
    },
    text: {
      type: String,
    },
    icon: {
      type: String,
    },
  },
};
</script>
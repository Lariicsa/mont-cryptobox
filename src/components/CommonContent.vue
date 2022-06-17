<template>
  <div class="common">
    <div
      class="common__image"
      :style="` background-image: url(${image})`"
    ></div>
    <div class="common__content">
      <slot></slot>
      <div class="common__text" v-html="text" />
    </div>
  </div>
</template>
<script>
export default {
  name: "CommonContent",

  props: {
    image: {
      type: String,
      default: "",
    },
    span: {
      type: String,
      default: "your span here"
    },
    text: {
      type: String,
      default: "your text here"
    },
  },
};
</script>

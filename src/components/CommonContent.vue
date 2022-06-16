<template>
  <div class="common__wrapper">
    <slot></slot>
    <div class="common">
      <div
        class="common__image"
        :style="`'background-image:url(${image})'`"
      ></div>
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
    },
    span: {
      type: String,
    },
    text: {
      type: String,
    },
  },
};
</script>

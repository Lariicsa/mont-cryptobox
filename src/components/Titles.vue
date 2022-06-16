<template>
  <div class="datitle__wrapper">
    <span class="datitle__span">{{ span }}</span>
    <div class="datitle">{{ title }}</div>
  </div>
</template>
<script>
export default {
  name: "Datitle",

  props: {
    span: {
      type: String,
    },
    title: {
      type: String,
    },
    alignment: {
      type: String,
    },
  },
};
</script>

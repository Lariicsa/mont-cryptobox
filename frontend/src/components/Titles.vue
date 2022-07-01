<template>
  <div class="datitle__wrapper" :class="alignment">
    <span class="datitle__span">{{ span }}</span>
    <h2 class="datitle">{{ title }}</h2>
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

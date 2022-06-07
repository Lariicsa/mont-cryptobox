<template>
  <div
    class="grid__container"
    :style="`grid-template-columns:${columns}; grid-column-gap: ${vgap}; grid-row-gap: ${hgap};`"
  >
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "Grid",
  props: {
    columns: {
      type: String,
      default: "repeat(4, 1fr)",
    },
    hgap: {
      type: String,
      default: "0.8rem",
    },
    vgap: {
      type: String,
      default: "0.8rem",
    },
  },
};
</script>
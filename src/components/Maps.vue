<template>
  <div class="maps__wrapper">
    <div class="maps">
      <iframe
        :src="mapData"
        width="100%"
        height="100%"
        style="border: 0"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  </div>
</template>
<script>
export default {
  name: "Maps",

  props: {
    mapData: {
      type: String,
      default: "",
    },
  },
};
</script>

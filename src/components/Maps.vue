<template>
  <div class="maps__wrapper">
    <div class="maps__mobile">
      <div class="dropselect__title">Ubica un cajero</div>
      <div class="dropselect__subtitle">
        Ubica tu cajero dentro de nuestra red
      </div>
    </div>
    <div class="maps__top">
      <div class="maps__info address">{{ mapData.address }}</div>
      <div class="maps__info ping" v-html="mapData.horaries"></div>
    </div>
    <div class="maps">
      <iframe
        :src="mapsBasePath + mapData.mapurl"
        id="gmap_canvas"
        width="100%"
        height="100%"
        style="border: 0"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
    <div class="maps__bottom">
      <div class="maps__head">Fecha de instalación</div>
      <div class="maps__head">límites</div>
      <div class="maps__head">criptomonedas</div>
      <div class="maps__info">{{ mapData.installation }}</div>
      <div class="maps__info" v-html="pricesInfo"></div>
      <div class="maps__info">{{ mapData.altcoins }}</div>
    </div>
    <div class="maps__select">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "Maps",

  props: {
    mapData: {
      type: Object,
    },
  },
  data() {
    return {
      mapsBasePath: "https://www.google.com/maps/embed?pb=",
    };
  },

  mounted() {
    this.mapData;
  },

  computed: {
    pricesInfo() {
      return `${this.mapData.limitBuy} <br/> ${this.mapData.limitSell}`;
    },
  },
};
</script>

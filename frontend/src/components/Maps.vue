<template>
  <div class="maps__wrapper">
    <div class="maps__mobile">
      <div class="actionlist__title">Ubica un cajero</div>
      <div class="actionlist__subtitle">
        Ubica tu cajero dentro de nuestra red
      </div>
      <slot name="drop-slot"></slot>
    </div>
    <div class="maps__top">
      <div class="maps__info address" v-html="mapData.address" />
      <div class="maps__info ping" v-html="mapData.horaries"></div>
      <div class="maps__topmobile">
        <div class="maps__head">
          Fecha de instalación
          <span class="maps__info" v-html="mapData.installation" />
        </div>

        <div class="maps__head">
          límites <span class="maps__info" v-html="pricesInfo"></span>
        </div>

        <div class="maps__head">
          criptomonedas
          <span class="maps__info">{{ mapData.altcoins }}</span>
        </div>
      </div>
    </div>
    <div class="maps" @mouseenter="setIndexClass" @mouseleave="unsetIndexClass">
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
    <div class="maps__select" :class="{ onmap: isOnMap }">
      <slot name="card-slot"></slot>
    </div>
  </div>
</template>
<script>
import Dropselect from "@/components/Dropselect.vue";
export default {
  name: "Maps",

  components: {
    Dropselect,
  },

  props: {
    mapData: {
      type: Object,
    },
    dropOptions: {
      type: Array,
    },
    dropselectModel: {
      type: Object,
    },
    dropName: {
      type: String,
    },
  },
  data() {
    return {
      mapsBasePath: "https://www.google.com/maps/embed?pb=",
      isOnMap: false,
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

  methods: {
    onChangeDrop(data) {
      this.$emit("onChangeDrop", data);
    },

    setIndexClass() {
      this.isOnMap = true;
    },
    unsetIndexClass() {
      this.isOnMap = false;
    },
  },
};
</script>

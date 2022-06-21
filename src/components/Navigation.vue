<template>
  <nav :class="'navigation ' + ui">
    <div :class="'navigation__out ' + ui">
      <ul :class="'navigation__list ' + ui">
        <li
          :class="'navigation__wrapper ' + ui"
          v-for="item in itemsList"
          :key="item.id"
          @click="itemClick"
        >
          <a :href="'#' + item.pathName" :class="'navigation__item ' + ui">{{
            item.value
          }}</a>

          <ul v-if="hasSubmenues" :class="'navigation__sublist ' + ui">
            <li v-for="subitem in item.subMenues" :key="subitem.id">
              <a
                :href="subitem.pathName"
                :class="'navigation__subitem ' + ui"
                >{{ subitem.value }}</a
              >
            </li>
          </ul>
        </li>
        <Cryptoprice
          v-model="currentAltcoin"
          :altcoinData="priceData"
          @onClick="clickPrice"
        />
      </ul>
    </div>
  </nav>
</template>
<script>
import Cryptoprice from "@/components/Cryptoprice.vue";
import DATA from "../data";
export default {
  name: "Navigation",

  components: {
    Cryptoprice,
  },

  data() {
    return {
      currentAltcoin: "Bitcoin",
    };
  },

  props: {
    itemsList: {
      type: Array,
      default: ["item1"],
    },
    ui: {
      type: String,
      default: "simple",
    },
    hasSubmenues: {
      type: Boolean,
      default: false,
    },
    priceData: {
      type: Object,
      default: null,
    },
  },

  mounted() {
    this.subMenues;
  },

  methods: {
    actionItem(value) {
      this.$emit("actionItem", value);
    },

    clickPrice() {
      this.$emit("clickPrice");
    },
    itemClick() {
      this.$emit("itemClick");
    },
  },
};
</script>
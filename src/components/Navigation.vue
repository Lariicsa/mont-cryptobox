<template>
  <nav :class="'navigation ' + ui">
    <div class="navigation__out">
      <ul :class="'navigation__list ' + ui">
        <li
          :class="'navigation__wrapper ' + ui"
          v-for="item in itemsList"
          :key="item.id"
        >
          <a :href="item.pathName" :class="'navigation__item ' + ui">{{
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
      </ul>
    </div>
  </nav>
</template>
<script>
export default {
  name: "Navigation",

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
  },

  mounted() {
    this.subMenues;
  },

  methods: {
    actionItem(value) {
      this.$emit("actionItem", value);
    },
  },
};
</script>
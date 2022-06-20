<template>
  <div class="dropselect__wrapper">
    <select
      class="dropselect"
      :name="name"
      v-model="selected"
      @change="onChange($event.target.value)"
    >
      <option v-if="selected" value="">{{ selected ? "selected" : "" }}</option>
      <option
        v-for="option in options"
        :value="option.value"
        :key="option.value"
      >
        {{ option.text }}
      </option>
    </select>
  </div>
</template>
<script>
export default {
  name: "Dropselect",

  props: ["id", "options", "value", "name"],

  methods: {
    onChange(value) {
      this.$emit("input", value);
      this.$emit("onChange");
      console.log('ds', value);
    },
  },

  computed: {
    selected: {
      get: function () {
        return this.value;
      },
      set: function () {},
    },
  },
};
</script>

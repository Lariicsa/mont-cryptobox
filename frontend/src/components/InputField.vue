<template>
  <div class="textfield" :class="showError ? 'error' : ''">
    <div class="textfield__title" v-if="titleLabel">{{ titleLabel }}</div>
    <label
      :class="
        this.value && titleLabel == undefined
          ? 'textfield__label filled'
          : 'textfield__label'
      "
      :for="name"
      >{{ phName }}</label
    >
    <div class="textfield__inner">
      <input
        :name="name"
        :type="type"
        :disabled="disabled"
        :class="showError ? 'textfield__input error' : 'textfield__input hide'"
        :placeholder="placeholder"
        ref="input"
        :value="value"
        @input="updateValue()"
        @keyup="onKeyUp()"
        @keyup.enter="onKeyUpEnter()"
        @blur="onBlur()"
        :maxlength="maxlength"
      />
      <span class="textfield__icon" :class="iconname"></span>
    </div>
    <div :class="showError ? `textfield__${typemsg}` : 'hide'">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "InputField",
  props: [
    "titleLabel",
    "placeholder",
    "type",
    "typemsg",
    "showError",
    "errorLabel",
    "value",
    "name",
    "disabled",
    "phName",
    "autofocus",
    "maxlength",
    "iconname",
  ],
  mounted() {
    if (this.autofocus) this.$refs.input.focus();
  },
  methods: {
    btnAdd() {
      this.$emit("btnAdd");
    },
    updateValue() {
      this.$emit("input", this.$refs.input.value);
    },
    onKeyUp() {
      this.$emit("keyup");
    },
    onKeyUpEnter() {
      this.$emit("keyupEnter");
    },
    onBlur() {
      this.$emit("onBlur");
    },
  },
};
</script>

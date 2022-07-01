<template>
  <div class="cryptoform__wrapper">
    <div class="cryptoform__info">
      <h2 class="cryptoform__title">{{ formTitle }}</h2>
      <p class="cryptoform__text">
        {{ formText }}
      </p>
    </div>
    <transition name="formData">
      <form @submit.prevent="updateAddress(userAddress)" class="cryptoform">
        <div class="row">
          <h3>{{ formsubTitle }}</h3>
          <p class="cryptoform__text">{{ textHelp }}</p>
        </div>
        <Inputfield
          phName="Nombre:"
          name="nombre"
          type="text"
          v-model="userAddress.nombre"
          typemsg="error"
        >
        </Inputfield>

        <div class="row between xcenter">
          <div class="row md">
            <Inputfield
              phName="e-Mail:"
              type="email"
              name="email"
              v-model="userAddress.email"
              typemsg="error"
            />
          </div>
          <div class="row sm">
            <div class="cryptoform__button" @click="close">
              {{ buttonText }}
            </div>
          </div>
        </div>
      </form>
    </transition>
  </div>
</template>
<script>
import Inputfield from "@/components/InputField";
export default {
  name: "cryptoForm",
  props: [
    "isShown",
    "formText",
    "buttonText",
    "formTitle",
    "formsubTitle",
    "textHelp",
    "showPhone",
  ],

  components: {
    Inputfield,
  },

  data() {
    return {
      userAddress: {
        nombre: "",
        email: "",
      },
    };
  },

  methods: {
    updateAddress(userAddress) {
      const userDataForm = this.userAddress;
      setTimeout(() => {
        this.$emit("close");
      }, 500);
    },

    close() {
      this.$emit("close");
    },
  },
};
</script>

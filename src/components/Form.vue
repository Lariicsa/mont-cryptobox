<template>
  <div class="cryptoform__wrapper">
    <div class="cryptoform__info">
      <h2 class="cryptoform__title">Moneda digital descentralizada</h2>
      <p class="cryptoform__text">
        Leo mauris viverra sapien, dictumst nunc egestas morbi magna. Integer
        ligula tellus fermentum nec. Volutpat velit turpis euismod. Mi blandit
        egestas netus nisl facilisis diam, turpis leo. Habitant turpis orci
        habitant.
      </p>
    </div>
    <transition name="formData">
      <form @submit.prevent="updateAddress(userAddress)" class="cryptoform">
        <div class="row">
          <h3>{{ formTitle }}</h3>
          <p>{{ textHelp }}</p>
        </div>
        <Inputfield
          phName="Nombre:"
          :autofocus="true"
          name="nombre"
          type="text"
          v-model="userAddress.nombre"
          typemsg="error"
        >
        </Inputfield>

        <div class="row between">
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
  props: ["isShown", "buttonText", "formTitle", "textHelp", "showPhone"],

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

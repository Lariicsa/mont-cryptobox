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
          phName="Nombre completo:"
          name="nombre"
          type="text"
          v-model="userAddress.nombre"
          typemsg="error"
          iconname="user"
        >
        </Inputfield>

        <Inputfield
          phName="Empresa:"
          type="text"
          name="company"
          v-model="userAddress.company"
          typemsg="error"
          iconname="company"
        />
        <Inputfield
          phName="Teléfono:"
          type="number"
          name="phone"
          v-model="userAddress.phone"
          typemsg="error"
          iconname="phone"
        />
        <Inputfield
          phName="e-Mail:"
          type="email"
          name="email"
          v-model="userAddress.email"
          typemsg="error"
          iconname="email"
        />

        <div class="row between xcenter">
          <div class="row md">
            <Inputfield
              phName="Asunto:"
              type="text"
              name="subject"
              v-model="userAddress.subject"
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
        company: "",
        email: "",
        phone: "",
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

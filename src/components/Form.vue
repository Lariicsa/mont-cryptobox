<template>
  <transition name="formData">
    <form @submit.prevent="updateAddress(userAddress)">
      <div class="row">
        <h4>{{ formTitle }}</h4>
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
          <div class="form__button" @click="close">
            {{ btnCancel }}
          </div>
        </div>
      </div>
    </form>
  </transition>
</template>
<script>
import Inputfield from "@/components/InputField";
export default {
  name: "StoreForm",
  props: [
    "isShown",
    "btnOk",
    "btnCancel",
    "formTitle",
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
      this.$store.dispatch("addUnregisteredAddress", {
        shippingMethod: "Tienda",
        storeId: 1,
        nombre: userDataForm.nombre,
        email: userDataForm.email,
        phone: userDataForm.phone,
        allowDelay: false,
      });
      setTimeout(() => {
        this.$emit("close");
      }, 500);
    },
  },
};
</script>

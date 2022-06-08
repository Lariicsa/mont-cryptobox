import { createStore } from "vuex";
import { getAltcoinPrice } from "../API/index";

export default createStore({
  state: {
    coinName: "",
    coinPrice: "",
  },
  getters: {},
  mutations: {},
  actions: {
    async getAltcoinPrice({ commit }, book) {
      try {
        const response = await getAltcoinPrice();
        console.log(response.data);
      } catch (error) {
        console.log(error.response);
      }
    },
  },
});

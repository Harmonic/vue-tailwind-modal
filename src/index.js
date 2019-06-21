import VueTailwindModal from "./VueTailwindModal.vue";
//require('./css/modal.css');

export default {
 install(Vue, options) {
  // Let's register our component globally
  // https://vuejs.org/v2/guide/components-registration.html
  Vue.component("vue-tailwind-modal", VueTailwindModal);
 }
};
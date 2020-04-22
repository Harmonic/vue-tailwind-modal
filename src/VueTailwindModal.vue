<template>
  <Transition name="fade">
    <div
      v-if="showing"
      class="fixed inset-0 w-full h-screen flex items-center justify-center bg-smoke-800"
      @click.self="close"
    >
      <div class="relative max-h-screen w-full max-w-2xl bg-white shadow-lg rounded-lg p-8 flex">
        <button
          aria-label="close"
          class="absolute top-0 right-0 text-xl text-gray-500 my-2 mx-4 focus:outline-none"
          @click.prevent="close"
        >
          ×
        </button>
        <div class="overflow-auto max-h-screen w-full">
          <slot />
        </div>
      </div>
    </div>
  </Transition>
</template>

<script>
export default {
  props: {
    showing: {
      required: true,
      type: Boolean
    }
  },
  watch: {
    showing(value) {
      if (value) {
        return document.querySelector('body').classList.add('overflow-hidden');
      }

      document.querySelector('body').classList.remove('overflow-hidden');
    }
  },
  methods: {
    close() {
      this.$emit('close');
    }
  },
  mounted: function() {
    document.addEventListener("keydown", e => {
      if (e.keyCode == 27) {
        this.close();
      }
    });
    }
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.6s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>

<template>
  <button class="app-btn" @click="$emit('click')">
    <slot />
  </button>
</template>

<script>
export default {
  name: "AppButton",

  props: {
    maxWidthInRem: {
      type: Number,
      required: false,
      default: 2,
    },
  },

  emits: ["click"],

  computed: {
    maxWidthValue() {
      return `${this.maxWidthInRem}rem`;
    },
  },
};
</script>

<style scoped>
.app-btn {
  padding: 0.5rem;
  max-width: v-bind(maxWidthValue);
  width: 100%;
  text-align: center;
  border: none;
  border-radius: 0.25rem;
  color: var(--color-text);
  background-color: var(--color-btn);
  cursor: pointer;
  position: relative;
  transition: 0.3s;
}
.app-btn:hover {
  box-shadow: 0.25rem 0.25rem 0.25rem 0 rgba(0, 0, 0, 0.2);
}
.app-btn:disabled {
  transform: none;
  filter: grayscale(50%);
  cursor: default;
}
.app-btn::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  background: linear-gradient(
    175deg,
    rgba(255, 255, 255, 0.4) 0,
    rgba(255, 255, 255, 0) 100%
  );
  opacity: 0;
  transition: opacity 0.3s ease;
  pointer-events: none;
}
.app-btn:not(:disabled):hover::before {
  opacity: 1;
}
</style>

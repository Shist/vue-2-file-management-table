<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    :width="sizeInPixels"
    :height="sizeInPixels"
  >
    <title>{{ tip }}</title>
    <path :style="{ fill: 'var(--color-icon)' }" :d="svgPath" />
  </svg>
</template>

<script>
export default {
  name: "BaseIcon",

  props: {
    sizeInRem: {
      type: Number,
      required: true,
    },
    tip: {
      type: String,
      required: true,
    },
    svgPath: {
      type: String,
      required: true,
    },
  },

  computed: {
    sizeInPixels() {
      return (
        this.sizeInRem *
        parseFloat(getComputedStyle(document.documentElement).fontSize)
      );
    },
  },
};
</script>

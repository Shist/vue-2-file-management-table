<template>
  <BaseIcon
    :sizeInRem="sizeInRem"
    :tip="tip"
    svgPath="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z"
  />
</template>

<script>
export default {
  name: "IconLeftArrow",

  props: {
    sizeInRem: {
      type: Number,
      required: false,
      default: 1.5,
    },
    tip: {
      type: String,
      required: false,
      default: "Previous",
    },
  },
};
</script>

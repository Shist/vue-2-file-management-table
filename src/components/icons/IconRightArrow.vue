<template>
  <BaseIcon
    :sizeInRem="sizeInRem"
    :tip="tip"
    svgPath="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"
  />
</template>

<script>
export default {
  name: "IconRightArrow",

  props: {
    sizeInRem: {
      type: Number,
      required: false,
      default: 1.5,
    },
    tip: {
      type: String,
      required: false,
      default: "Next",
    },
  },
};
</script>

<template>
  <BaseIcon
    :sizeInRem="sizeInRem"
    :tip="tip"
    svgPath="M20 14H14V20H10V14H4V10H10V4H14V10H20V14Z"
  />
</template>

<script>
export default {
  name: "IconAdd",

  props: {
    sizeInRem: {
      type: Number,
      required: false,
      default: 1.5,
    },
    tip: {
      type: String,
      required: false,
      default: "Add",
    },
  },
};
</script>

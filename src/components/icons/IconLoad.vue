<template>
  <BaseIcon
    :sizeInRem="sizeInRem"
    :tip="tip"
    svgPath="M2 12H4V17H20V12H22V17C22 18.11 21.11 19 20 19H4C2.9 19 2 18.11 2 17V12M12 15L17.55 9.54L16.13 8.13L13 11.25V2H11V11.25L7.88 8.13L6.46 9.55L12 15Z"
  />
</template>

<script>
export default {
  name: "IconLoad",

  props: {
    sizeInRem: {
      type: Number,
      required: false,
      default: 1.5,
    },
    tip: {
      type: String,
      required: false,
      default: "Download",
    },
  },
};
</script>

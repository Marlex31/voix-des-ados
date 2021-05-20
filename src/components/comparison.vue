<template>
  <ImgComparisonSlider>
    <!-- eslint-disable -->
    <img
      slot="before"
      style="width: 50%; margin:auto; display:block;"
      src="@/assets/macon.png"
    />
    <img
      slot="after"
      style="width: 50%; margin:auto; display:block;"
      src="@/assets/ma-con.png"
    />
    <!-- eslint-enable -->
  </ImgComparisonSlider>
</template>

<script>
import { ImgComparisonSlider } from '@img-comparison-slider/vue';

export default {
  name: 'ExampleComponent',
  components: {
    ImgComparisonSlider,
  },
};
</script>
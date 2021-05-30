<template>
    <div>
        <div ref="carousel">
            <img class="carousel-cell" src="@/assets/tarte/tarte-cut.jpg">
            <img class="carousel-cell" src="@/assets/tarte/tarte-closeup.jpg">
            <img class="carousel-cell" src="@/assets/tarte/tarte-pan.jpg">
        </div>
    </div>
</template>


<script>

import Flickity from 'flickity'

export default {
    name: "carousel",
    mounted(){
        new Flickity(this.$refs['carousel'], {
            // options
            cellAlign: 'center',
            wrapAround: true,
            // contain: true
        });
    }
}
</script>

<style scoped>

.carousel-cell{
    width: 50%;
    height: auto;
    margin-left: 10%;
    margin-top: 10%;
}
</style>
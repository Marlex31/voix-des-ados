<template>
    <div ref="main">
        {{carousel}}
    </div>
</template>


<script>

import { Flickity } from "flickity/dist/flickity.pkgd";
var elem = this.$refs.main
console.log(elem);
var flkty = new Flickity( elem, {
    cellAlign: 'left',
    contain: true
});

export default {

    data(){
        return{
            carousel: flkty
        }
    },
}
</script>

<style scoped>
@import url("D:/Programming/Magazine/magazine/node_modules/flickity/dist/flickity.css");

</style>
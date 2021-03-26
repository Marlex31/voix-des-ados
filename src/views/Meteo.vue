<template>
<div>

    <iframe width="900" height="600" :src=source>
    </iframe>
    <button @click="change">Click Me</button>

</div>
</template>

<style scoped>

.weather{
    margin: auto;
}

</style>

<script>
let x = 6
export default {
    methods:{
        change(){
            x = x + 1
            // not updating
        }
    },
    data(){
        return{
            source: `https://embed.windy.com/embed2.html?lat=46.740&lon=2.571&detailLat=46.838&detailLon=2.999
        &width=900&height=600&zoom=${x}&level=surface&overlay=wind&product=ecmwf&menu=&message=true&marker=&
        calendar=now&pressure=&type=map&location=coordinates&detail=&metricWind=default&metricTemp=default
        &radarRange=-1`
        }
    }
}
</script>
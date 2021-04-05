<template>
<div>

    <iframe width="900" height="600" :src="source[0]" ref="frame">
    </iframe>
    <button @click="change(0)">Click Me</button>
    <button @click="change(1)">Click Me</button>

</div>
</template>

<style scoped>

.weather{
    margin: auto;
}

</style>

<script>

export default {
    methods:{
        change(index){
            this.$refs['frame'].src = this.source[index]
    }
    },
    data(){
        return{
            source:
            [`https://embed.windy.com/embed2.html?lat=46.740&lon=2.571&detailLat=46.838&detailLon=2.999
        &width=900&height=600&zoom=6&level=surface&overlay=wind&product=ecmwf&menu=&message=true&marker=&
        calendar=now&pressure=&type=map&location=coordinates&detail=&metricWind=default&metricTemp=default
        &radarRange=-1`,
            `https://embed.windy.com/embed2.html?lat=46.740&lon=2.571&detailLat=46.838&detailLon=2.999
        &width=900&height=600&zoom=5&level=surface&overlay=wind&product=ecmwf&menu=&message=true&marker=&
        calendar=now&pressure=&type=map&location=coordinates&detail=&metricWind=default&metricTemp=default
        &radarRange=-1`
            ]
        }
    }
}
</script>
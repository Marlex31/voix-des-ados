<template>
<div>
    <h1 style="margin-left: 3.5%;">Références</h1>
    <ol style="font-size: 25px;">
        <li v-for="(link, item) in links" :key="item">
            <a :href="link">{{ item }}</a>
        </li>
    </ol>
</div>
</template>

<script>
export default {
    props: ['links']
}
</script>


<style scoped>

li{
    margin-left: 5%;
    list-style-type: disc;
}

</style>
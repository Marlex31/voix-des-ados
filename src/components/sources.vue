<template>
<div>
    <h1 style="margin-left: 3.5%;">Références:</h1>
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

a{
  position: relative;
  padding: 0.1em 0;
  text-decoration: none;
}
/* Fade in */
a::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 0.1em;
  background-color: black;
  opacity: 0;
  transition: opacity 300ms, transform 300ms;
}
/* Scale from center */
a::after {
  opacity: 1;
  transform: scale(1);
  transform-origin: center;
}
a:hover::after,
a:focus::after{
  transform: scale(0);
}

li{
    margin-left: 5%;
    list-style-type: disc;
}

</style>
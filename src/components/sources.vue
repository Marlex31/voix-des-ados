<template>
<div>
    <h1 style="margin-left: 3.5%;">Références :</h1>
    <ol>
        <li v-for="(link, item) in links" :key="item">
            <a :href="link" target="_blank">{{ item }}</a>
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
  padding: 2px;
}

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
  background-color: #4e4e4e;
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
a:visited{
    color: inherit;
}

li{
    margin-left: 5%;
    list-style-type: disc;
}

</style>
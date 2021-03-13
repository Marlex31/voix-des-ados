<template>
<div class="grid-container">
  <!-- <div class="grid-item" v-for="n in 30" :key="n">{{ n }} </div> -->

  <div class="grid-item entertainment">Zodiac</div>
  <div class="grid-item entertainment">Youtuber</div>
  <div class="grid-item gastronomy">Recette</div>

  <div class="grid-item misc" v-for="n in 29" :key='n'>{{ n + 3 }}</div>

</div>
</template>

<script>
// import { Isotope } from "flickity";
// var iso = new Isotope('container')

export default {
    name: "home",
}

</script>

<style>
.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-template-rows: repeat(4, 175px);
  background-color: #2196F3;
  padding: 30px 10px;
}
.grid-item {
  background-color: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(0, 0, 0, 0.8);
  font-size: 30px;
  text-align: center;
  width: 150px;
  height: 150px;
}

.entertainment{
  background-color: rgb(255, 94, 94);
}
.gastronomy{
  background-color: rgb(233, 176, 102);
}

.misc{
  background-color: lightgray;
}

</style>
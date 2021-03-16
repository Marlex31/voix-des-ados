<template>
<div>
  <button @click="removeArticle" style="font-size:25px;">Pop</button>
  <div class="grid-container">
    <div v-for="(item, index) in list" :key="index" :class="item.tags"
    class="grid-item scaleIn">
      {{item['title']}}
    </div>
  </div>
</div>
</template>

<script>

import jsonList from "../assets/articles.json"

export default {
    name: "home",
    data(){
      return{
        list: jsonList,
      }
    },
    methods:{
      removeArticle(){
        this.list.pop()
      }
    }
}
</script>

<style>
.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-template-rows: repeat(4, 175px);
  padding: 50px 10px;
}

.grid-item {
  background-color: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(0, 0, 0, 0.8);
  font-size: 25px;
  text-align: left;
  width: 150px;
  height: 150px;
  padding: 5px;
  transition: linear 0.2s;
}

.grid-item:hover{
  background-color: cyan;
  scale: 1.1;
}

.scaleIn{animation:scaleIn .5s cubic-bezier(.39,.575,.565,1.000) 4s both}
@keyframes scaleIn{
  0%{transform:scale(.8); opacity:0}
  100%{transform:scale(1); opacity:1}
  }

.entertainment{
  background-color: rgb(255, 94, 94);
}
.gastronomy{
  background-color:chocolate;
}

.misc{
  background-color: lightgray;
}

.technology{
  background-color: lightskyblue;
}

.culture{
  background-color: mediumseagreen;
}

.geography{
  background-color: lightsalmon;
}

.history{
  background-color: rgb(230, 109, 230);
}

.sports{
  background-color: lightgreen;
}

</style>
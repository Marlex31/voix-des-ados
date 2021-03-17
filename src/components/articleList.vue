<template>
<div>
  <div class="flex-container" v-for="(item, index) in titleArr" :key="index">
    <button @click="reqSort" class="flex-item">{{ item.toUpperCase() }}</button>
  </div>

  <div class="grid-container">
    <div v-for="(item, index) in list" :key="index" :class="[item.tags, scale]"
    class="grid-item">
      {{item['title']}}
    </div>
  </div>
</div>
</template>


<script>

import jsonList from "../assets/articles.json";

var titles = []
jsonList.forEach(element => {
  element.tags.forEach(el => {
  if (!titles.includes(el)) {
    titles.push(el)
  }
  });
});

export default {
    name: "home",
    data(){
      return{
        list: jsonList,
        titleArr: titles,
        scale: "scaleIn",
        lastReq: null
      }
    },
    methods:{
      reqSort(e){
        // DRY
        if (this.lastReq == e.target.innerHTML.toLowerCase()){
          this.list = jsonList
          this.lastReq = null
        }
        else{
          this.list = jsonList.filter(item => item.tags.includes(e.target.innerHTML.toLowerCase()))
          this.lastReq = e.target.innerHTML.toLowerCase()
        }
      }
    },
    beforeUpdate(){
        this.scale = 'scaleInFast'
    }
}
</script>

<style>

.flex-container{
  display: inline-flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
}

.flex-item{
  font-size: 20px;
  text-align: center;
  margin: 5px;
  border-radius: 5px;
}


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
.scaleInFast{animation:scaleInFast .5s cubic-bezier(.39,.575,.565,1.000) 0.4s both}
@keyframes scaleInFast{
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
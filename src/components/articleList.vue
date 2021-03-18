<template>
<div>
  <div class="flex-container" v-for="(item, index) in titleArr" :key="index">
    <button @click="reqSort" class="btn" :class="btnToggle(index)">
      {{ item.toUpperCase() }}
    </button>
  </div>
  <transition-group tag="div" class="grid-container" name="list">
    <div v-for="(item, index) in list" :key="index" :class="item.tags"
    class="grid-item">
      {{item['title']}}
    </div>
  </transition-group>
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
        lastReq: null,
        activeIndex: null
      }
    },
    methods:{
      btnToggle(index){
        if (this.activeIndex == index) {
          return "btn-active"
        }
        return "btn-disabled"
      },
      reqSort(e){
        // DRY
        this.activeIndex = titles.indexOf(e.target.innerHTML.toLowerCase())
        if (this.lastReq == e.target.innerHTML.toLowerCase()){
          this.list = jsonList
          this.lastReq = null
          this.activeIndex = null
        }
        else{
          this.list = jsonList.filter(item => item.tags.includes(e.target.innerHTML.toLowerCase()))
          this.lastReq = e.target.innerHTML.toLowerCase()
        }
      }
    }
}
</script>

<style>

.list-enter-active,
.list-leave-active {
  transition: all 1s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: scale(.8);
}
/* .list-move {
  transition: transform 5s ease;
} */


.flex-container{
  display: inline-flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
}

.btn{
  font-size: 20px;
  text-align: center;
  margin: 0 15px;
  border-radius: 5px;
  box-shadow: 2px 2px 5px grey;
}

.btn:hover{
  background-color: lightgreen;
}
.btn:active{
  color: white;
  background-color: limegreen;
}

.btn-disabled{
  color: green;
  background-color: lightgrey;
}
.btn-active{
  color: white;
  background-color: green;
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
  box-shadow: 5px 5px 10px grey;
  transition: linear 0.2s;
}

.grid-item:hover{
  background-color: cyan;
  scale: 1.1;
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
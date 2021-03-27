<template>
<div>
  <div class="flex-container">
    <button v-for="(item, index) in tagsArr" :key="index"
    @click="reqSort" class="btn" :class="btnToggle(index)">
      {{ item.toUpperCase() }}
    </button>
  </div>

  <transition-group tag="div" class="grid-container" name="list">
    <div v-for="(item, index) in titleArr" :key="index" :class="item.tags" :id="index"
    class="grid-item" @click="route">
      {{ item['title'] }}
    </div>
  </transition-group>
</div>
</template>


<script>

import jsonList from "../assets/articles.json";

var tags = []
jsonList.forEach(element => {
  element.tags.forEach(el => {
  if (!tags.includes(el)) {
    tags.push(el)
  }
  });
});

export default {
    name: "ArticleList",
    data(){
      return{
        titleArr: jsonList,
        tagsArr: tags,
        lastReq: null,
        activeIndex: null
      }
    },
    methods:{
      route(e){
        this.$router.push(e.target.id);
      },
      btnToggle(index){
        if (this.activeIndex == index) {
          return "btn-active"
        }
        return "btn-disabled"
      },
      reqSort(e){
        let target = e.target.innerHTML.toLowerCase()
        this.activeIndex = tags.indexOf(target)
        if (this.lastReq == target){
          this.titleArr = jsonList
          this.lastReq = null
          this.activeIndex = null
        }
        else{
          this.titleArr = jsonList.filter(item => item.tags.includes(target))
          this.lastReq = target
        }
      }
    }
}
</script>

<style scoped>

.list-enter-active,
.list-leave-active {
  transition: all .4s ease-in-out;
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
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
}

.btn{
  font-size: 20px;
  text-align: center;
  padding: 8px;
  margin: 0 15px;
  border-radius: 5px;
  box-shadow: 2px 2px 5px grey;
  transition: all .2s ease-in-out;
}

.btn:hover{
  background-color: lightgreen;
  transform: scale(1.1);
  cursor: pointer;
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
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(4, 175px);
  margin: 5% auto;
  width: 90%;
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
  margin: auto;
  border-radius: 10px;
}

.grid-item:hover{
  background-color: cyan;
  scale: 1.05;
  box-shadow: 5px 5px 15px grey;
  cursor: pointer;
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
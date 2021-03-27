<template>
<div>
  <div class="flex-container">
    <i :class="btnToggle(0)" @click="reqSort" title="Entertainment" class="btn fas fa-gamepad fa-3x"></i>
    <svg ref="tower" :class="btnToggle(1)" @click="reqSort" class="btn" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 736 1920">
      <title>Francophonie</title>
      <path d="M371 1v5.675c3.116.245 6.316 1.64 6.423-3.36l1.15 6.674-7.325.744c-.126 1.495-.349 2.923-.35 4.352-.023 21.83-.211 43.664.173 65.487.065 3.703 2.83 7.3 3.949 11.065.682 2.297 1.043 4.873.76 7.23-.406 3.386 2.207 7.677-2.594 10.061-.333.166-.174 2.348.393 3.133 3.24 4.489 3.233 13.267.116 17.464-.636.857-.59 3.018.062 3.894 2.897 3.892 3.026 13.613.147 17.199-.679.846-.91 3.344-.683 3.435 4.5 1.812 1.956 5.689 2.692 8.556.38 1.478.609 3.716 1.599 4.204 12.038 5.937 18.529 16.317 23.235 28.22.49 1.237 1.01 2.462 1.677 4.08h9.505v14.43l-5.859 2.75 5.173 3.125v16.047l-4.744.712c-1.595 4.108 1.008 4.065 3.701 4.014 2.489-.046 4.98-.01 8.201-.01l1.846 26.23c-4.108 3.606-7.306 5.667-9.523 8.497-7.156 9.137-9.157 20.262-10.53 31.332-.979 7.883-1.136 15.944-.847 23.896 2.515 69.1 4.869 138.208 7.948 207.283 3.45 77.397 7.226 154.783 11.58 232.133 3.388 60.206 7.568 120.373 11.983 180.515 3.267 44.514 6.693 89.044 11.497 133.41 4.37 40.37 10.684 80.53 16.17 120.78.785 5.763 1.728 11.505 2.668 17.72h21.765c.8 4.3 1.652 8.09 2.11 11.928.101.86-1.095 2.63-1.831 2.71-4.388.476-6.466 3.483-7.616 7.03-3.408 10.516-5.413 21.192-2.619 32.268 15.998 63.403 31.426 126.956 48.19 190.155 6.81 25.673 16.543 50.568 24.808 75.863.935 2.86 2.542 3.343 5.155 3.309 8.788-.115 17.579-.044 26.35-.044v45.114l9.617.91c-7.02 9.285-10.49 25.411-7.398 33.94l-3.177 1.833c10.953 22.49 21.795 44.781 32.662 67.06 31.6 64.78 63.224 129.55 94.784 194.35 1.82 3.735 4.177 6.16 8.19 8.005 6.148 2.828 11.658 7.048 17.44 10.679-1.46 6.6 3.63 9.369 7.377 12.913-1.333.334-2.666.957-4 .958-49 .05-98 .042-147 .042 1.12-4.044 3.201-8.076-.763-11.923-.577-.561-.384-2.851.283-3.602 3.254-3.66 4.532-7.873 4.539-12.657.045-31.032-10.353-59-24.88-85.831-30.874-57.02-103.08-107.442-175.69-112.408-60.707-4.151-114.575 11.485-162.117 49.315-41.511 33.031-68.164 75.206-77.648 127.593-2.101 11.605-5.348 23.942 3.332 34.843.442.555.297 2.312-.227 2.785-4.176 3.76-1.725 7.856-.829 11.885-49 0-98 .008-147-.042-1.334-.001-2.667-.625-4-.958 3.615-3.43 8.46-6.15 7.393-13.275 6.371-3.59 13.404-7.303 20.14-11.493 2.102-1.308 3.885-3.67 5-5.947 29.928-61.163 59.75-122.378 89.589-183.585 11.38-23.346 22.738-46.704 34.154-70.032 1.425-2.91 2.392-5.448 1.675-9.087-.924-4.69.346-9.769-.122-14.603-.7-7.224-2.027-14.406-8.404-20.69l10.003-.909v-45.187h22.189c8.202-.002 7.971-.094 10.984-7.715 20.208-51.111 32.071-104.613 45.36-157.71 8.85-35.354 17.975-70.641 26.491-106.075 2.574-10.71.623-21.54-3.842-31.588-1.022-2.3-4.384-3.508-6.525-5.383-.924-.809-2.186-2.114-2.08-3.058.413-3.686 1.311-7.318 2.139-11.526h21.724c2.709-18.204 5.691-35.912 7.925-53.713 5.41-43.12 10.993-86.23 15.502-129.45 3.37-32.299 5.288-64.753 7.643-97.153 3.032-41.708 6.067-83.418 8.698-125.153 2.097-33.257 3.651-66.55 5.34-99.832 2.603-51.257 5.197-102.514 7.64-153.778 2.213-46.44 4.43-92.88 6.245-139.336 1.379-35.3 2.461-70.62 2.992-105.941.205-13.695-2.473-27.22-9.26-39.455-2.469-4.45-5.21-9.027-11.936-9.925l1.969-27.633c4.306-.535 8.28-.996 12.225-1.64.153-.024.02-1.796.02-2.991l-5.016-.505v-16.5l5.116-2.78-5.766-2.834v-14.34h9.506c3.748-10.25 8.187-19.713 16.465-26.774.76-.649 1.384-1.604 2.256-1.95 6.089-2.413 9.133-6.475 7.864-13.281-.121-.648 1.422-1.47 1.739-2.37.433-1.234 1.058-3.016.514-3.876-3.378-5.34-3.37-11.843.165-17.827.495-.838.5-2.476.003-3.307-3.515-5.871-3.582-12.748-.172-17.786.543-.802.723-2.817.231-3.204-5.682-4.474-1.604-10.443-2.351-15.611-.29-2.001 2.118-4.26 2.725-6.554.931-3.52 1.896-7.166 1.929-10.767.184-19.83.089-39.665.09-59.498v-5.584l-7.468-.715.775-5.944L367 8.164V1h4zm-46.559 1327.04c-11.922 72.733-22.662 145.119-38.175 216.77h165.208l-38.561-216.77H324.44z"/>
    </svg>
    <i :class="btnToggle(2)" @click="reqSort" title="Technology" class="btn fas fa-desktop fa-3x"></i>
    <i :class="btnToggle(3)" @click="reqSort" title="History" class="btn fas fa-landmark fa-3x"></i>
    <i :class="btnToggle(4)" @click="reqSort" title="Culture" class="btn fas fa-book fa-3x"></i>
    <i :class="btnToggle(5)" @click="reqSort" title="Gastronomy" class="btn fas fa-utensils fa-3x"></i>
    <i :class="btnToggle(6)" @click="reqSort" title="Geography" class="btn fas fa-globe fa-3x"></i>
    <i :class="btnToggle(7)" @click="reqSort" title="Misc" class="btn fas fa-archive fa-3x"></i>
    <i :class="btnToggle(8)" @click="reqSort" title="Sports" class="btn fas fa-swimmer fa-3x"></i>
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
        let target = null
        try {
          target = e.target.title.toLowerCase()
        } catch (error) {
          if (error instanceof TypeError){
            target = 'francophonie'
            e.target.style.fill = 'white'
          }
        }
        this.activeIndex = tags.indexOf(target)
        if (this.lastReq == target){
          this.titleArr = jsonList
          this.lastReq = null
          this.activeIndex = null
          this.$refs['tower'].style.fill = '#2c3e50' // from App.vue
        }
        else{
          this.titleArr = jsonList.filter(item => item.tags.includes(target))
          this.lastReq = target
        }
      }
    },
    mounted(){
      this.$refs['tower'].style.fill = '#2c3e50' // from App.vue
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
  margin-top: 200px;
}

.btn{
  width: 50px;
  height: 50px;
  background-color: chartreuse;
  text-align: center;
  padding: 8px;
  margin: 0 15px;
  border-radius: 5px;
  box-shadow: 2px 2px 5px grey;
  transition: all .2s ease-in-out;
}

.btn:hover{
  background-color: chartreuse;
  transform: scale(1.1);
  cursor: pointer;
}
.btn:active{
  color: white;
  background-color: chartreuse;
}

.btn-disabled{
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
<template>
  <div>
    <router-view/>
    <button @click="scrollTop" class="arrow">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" height="70px">
        <path d="M16 3C8.832 3 3 8.832 3 16s5.832 13 13 13 13-5.832 13-13S23.168 3 16 3zm0 2c6.086 0 11 4.914 11 11s-4.914 11-11 11S5 22.086 5 16 9.914 5 16 5zm0 3.875l-6.406 6.406L11 16.72l4-4V23h2V12.719l4 4 1.406-1.438z"/>
      </svg>
    </button>

    <div style="height: 200px;"></div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      // scroll: window.scrollY
    }
  },
  methods:{
    scrollTop(){
        console.log(window.scrollY);
        window.scrollTo(0, 0);
    }
  }
}
</script>

<style>
abbr{
  text-decoration: solid underline white 2px;
}
abbr:hover{
  cursor: help;
}

.arrow{
  margin-left:auto;
  margin-right: 2.5%;
  display:block;
  background-color: rgba(0, 0, 0, 0);
  padding: 0;
  border: 0;
  cursor: pointer;
  transition: all .1s ease-in-out;
}
.arrow:hover{
  transform: scale(1.2);
}


* {
  scroll-behavior: smooth;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
  font-size: 24px;
}

.title{
  text-align: center;
  margin: auto;
  margin: 15px 0;
}

</style>

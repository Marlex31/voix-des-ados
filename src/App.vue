<template>
  <div>
    <router-view/>
    <button @click="scrollTop" class="arrow">
      <svg v-if="this.$route.fullPath !='/3'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" height="70px">
        <path d="M16 3C8.832 3 3 8.832 3 16s5.832 13 13 13 13-5.832 13-13S23.168 3 16 3zm0 2c6.086 0 11 4.914 11 11s-4.914 11-11 11S5 22.086 5 16 9.914 5 16 5zm0 3.875l-6.406 6.406L11 16.72l4-4V23h2V12.719l4 4 1.406-1.438z"/>
      </svg>
      <img v-else src="@/assets/misc/sign.png" style="height:150px;" alt="Scroll to top">
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
        // console.log(window.scrollY);
        window.scrollTo(0, 0);
    }
  }
}
</script>

<style>

a.has-tooltip{
    text-decoration-line: underline;
    text-decoration-color: inherit;
    text-decoration-style: dotted;
    cursor: help;
}

/* =Tooltip Style -------------------- */

/* Tooltip Wrapper */
.has-tooltip {
  position: relative;
}
.has-tooltip .tooltip {
  opacity: 0;
  visibility: hidden;
  transition: visibility 0s ease 0.5s, opacity .3s ease-in;
}
.has-tooltip:hover .tooltip {
  opacity: 1;
  visibility: visible;
}

/* Tooltip Body */
.tooltip {
  background-color: #222;
  bottom: 130%;
  color: #fff;
  font-size: 16px;
  text-indent: 0px;
  left: 50%;
  margin-left: -56px;
  padding: 6px;
  position: absolute;
  text-align: center;
  width: 120px;
  z-index: 4;
  border-radius: 3px;
  text-decoration: none;
  text-shadow: none;
}

/* Tooltip Caret */
.tooltip:after {
  border-top: 5px solid rgb(85, 85, 85);
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  bottom: -5px;
  content: " ";
  font-size: 0px;
  left: 50%;
  line-height: 0%;
  margin-left: -4px;
  position: absolute;
  width: 0px;
  z-index: 1;
}


abbr{
  text-decoration: solid underline inherit 2px;
}
abbr:hover{
  cursor: help;
}

.arrow{
  margin-left: auto;
  margin-right: 2.5%;
  display: block;
  background-color: rgba(0, 0, 0, 0);
  padding: 0;
  border: 0;
  cursor: pointer;
  transition: all .1s ease-in-out;
  padding-top: 100px;
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

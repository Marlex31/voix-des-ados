<template>
<div>
<!-- <net_hist></net_hist> -->
<!-- <terminal source="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
    fugiat nulla pariatur.">
</terminal> -->
<!-- <carousel></carousel> -->
<hero></hero>
<div style="height: 100px;"></div>
<home></home>
</div>
</template>

<script>
// import net_hist from './components/net_hist'
// import terminal from './components/terminal'
import hero from './components/hero'
// import carousel from './components/carousel'
import home from './components/home'

export default {
  name: 'App',
  components: {
    // net_hist
    // terminal
    // carousel
    hero,
    home
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: moccasin;
}
</style>

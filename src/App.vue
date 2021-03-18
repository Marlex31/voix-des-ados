<template>
<div>
  <hero></hero>
  <div style="height: 150px;"></div>
  <home></home>
</div>
</template>

<script>
import hero from './components/hero'
import home from './components/articleList'

export default {
  name: 'App',
  components: {
    hero,
    home
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
  background-color: moccasin;
}
</style>

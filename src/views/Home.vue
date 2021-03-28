<template>
<div>
  <hero></hero>
  <article-list></article-list>
</div>
</template>

<script>

import hero from '../components/hero.vue'
import ArticleList from '../components/articleList.vue'

export default {
  components: {
    hero,
    ArticleList
  },
  mounted(){
    document.body.style.backgroundColor = "lightblue";
  },
  beforeUnmount(){
    window.scrollTo(0, 0);
  }
}
</script>
<template>
<div class="terminal">
  <p>
    {{ text }}
  <span class="typed-cursor">&#9608;</span>
  </p>
</div>
</template>

<script>

export default {
    name: "terminal",
    data(){
      return{
        text: "",
        controller: new Audio(require('../assets/writing.mp4'))
    }
    },
    methods: {
      write(){
        this.text += this.source[this.text.length]
        if(this.text.length != this.source.length){
          setTimeout(this.write, 50)
        }
        else{
          this.controller.pause();
          // add pause for cursor blink
        }
      }
    },
    mounted() {
      this.write()
      this.controller.play();
    },
    // replace with slot?
    props: {
      source: String
    }
    }

</script>

<style>

.terminal{
    font-family: monospace;
    font-size: 25px;
    text-align: left;
    padding: 0 30px;
}


/* ----- blinking cursor animation ----- */
.typed-cursor{
  opacity: 1;
  animation: blink 0.95s infinite;
}

@keyframes blink{
    0% { opacity:1; }
    50% { opacity:0; }
    100% { opacity:1; }
}

</style>

<template>
<div>
    <div class="box">
        <h1 class="msg">Aïe ! Cette page est introuvable.</h1>
        <br><br><br><br>
        <router-link to="/" class="flex-container msg heartbeat">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="10%">
                <path d="M 16 2.59375 L 15.28125 3.28125 L 2.28125 16.28125 L 3.71875 17.71875 L 5 16.4375 L 5 28 L 14 28 L 14 18 L 18 18 L 18 28 L 27 28 L 27 16.4375 L 28.28125 17.71875 L 29.71875 16.28125 L 16.71875 3.28125 Z M 16 5.4375 L 25 14.4375 L 25 26 L 20 26 L 20 16 L 12 16 L 12 26 L 7 26 L 7 14.4375 Z"/>
            </svg>
            <p style="padding-left: 2.5%;">
                Va à la page d'accueil
            </p>
        </router-link>
    </div>
</div>
</template>

<script>
export default {
    mounted(){
        // console.log(this.$router.currentRoute._value.name);
        // console.log(this.$router.getRoutes());
        document.body.style.backgroundColor = "lightblue";
    }
}
</script>

<style scoped>

.heartbeat {
	animation: heartbeat 1.7s ease-in-out infinite both;
}
@keyframes heartbeat {
  from {
    transform: scale(1);
    transform-origin: center center;
    animation-timing-function: ease-out;
  }
  10% {
    transform: scale(0.96);
    animation-timing-function: ease-in;
  }
  17% {
    transform: scale(0.98);
    animation-timing-function: ease-out;
  }
  33% {
    transform: scale(0.94);
    animation-timing-function: ease-in;
  }
  45% {
    transform: scale(1);
    animation-timing-function: ease-out;
  }
}


.flex-container{
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
}

.box{
    color: black;
    margin: auto;
    width: 50%;
    text-align: center;
    padding: 200px 0;
}

.msg{
    font-size: 30px;
    background-color:cornflowerblue;
    padding: 25px;
    border-radius: 50px;
}

</style>
<template>
<div>
    <div class="box">
        <h1 class="msg">404 erreur: page web pas trouvé</h1>
        <br><br><br><br>
        <router-link to="/" class="msg">Va à la page d'accueil</router-link>
    </div>
</div>
</template>

<script>
export default {
    mounted(){
      document.body.style.backgroundColor = "lightblue";
    }
}
</script>

<style scoped>

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
    padding: 30px;
    border-radius: 50px;
}

</style>
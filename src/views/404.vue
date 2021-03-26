<template>
<div>
    <div class="box">
        <h1 class="msg">404 erreur: page web pas trouvé</h1>
        <router-link to="/">Va à la page d'accueil</router-link>
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
    color: cornflowerblue;
    margin: auto;
    width: 50%;
    text-align: center;
    padding: 200px 0;
}

.msg{
    padding: 50px 0;
    border: rgb(10, 182, 212) solid 5px;
    border-radius: 50px;
}

</style>
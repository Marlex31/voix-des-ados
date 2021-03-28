<template>
<div>
    <div class="box">
        <h1 class="msg">Aïe ! Cette page est introuvable.</h1>
        <br><br><br><br>
        <router-link to="/" class="msg">Va à la page d'accueil</router-link>
    </div>
</div>
</template>

<script>
export default {
    mounted(){
        // console.log(this.$router.currentRoute._value.name);
        // console.log(this.$router.getRoutes());

    //     document.title = "Page non trouvée"
        document.body.style.backgroundColor = "lightblue";
    // },
    // beforeUnmount(){
    //     document.title = "La voix des ados"
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
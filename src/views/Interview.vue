<template>
<div>
    <h1 class="title">Flash Interview avec Kylian Mbappé</h1>
    <h2 class="title">Gașca Răzvan</h2>

    <h4 class="title">
        Entrevue réalisé par <i>Gașca Răzvan</i> pour la revue <i>La Voix Des Ados</i> après le match PSG 4-1 Barcelona :
    </h4>
    <div class="flex-column" style="display:inline-block; margin-left:50%; transform: translateX(-50%);">
        <div class="flex-row">
            <div class="square yellow"></div>
            Interviewer
        </div>
        <div class="flex-row">
            <div class="square green"></div>
            Kylian Mbappé
        </div>
    </div>

    <p class="content">
         Bon soir, Kylian !
    </p>
    <p class="content">
        Bon soir !
    </p>
    <p class="content">
        Kylian, tu as marqué trois buts ce soir et tu étais l'homme le plus important pour ton équipe! Quelle est ton opinion sur le match de ce soir ?
    </p>
    <p class="content">
        C'était un match parfait réalisé par nous et je suis très heureux d'avoir réussi à aider mon équipe ce soir !
    </p>
    <p class="content">
        Selon vous, quelles sont vos chances de vous qualifier en les prochaines phases ?
    </p>
    <p class="content">
        Nos chances sont très élevées, mais nous avons encore un match dans lequel nous devons garder notre concentration pour nous qualifier!

    </p>
    <p class="content">
        Kylian, après ce match, tu t'es inscrit au combat pour le meilleur joueur du monde, comment penses-tu que cela va influencer ta carrière ?
    </p>
    <p class="content">
        Il est trop tôt pour croire que je suis l'un des meilleurs, je suis encore jeune, mais avec beaucoup de travail je pourrai être là où je veux être.
    </p>
    <p class="content">
        De nombreux enfants vous considèrent comme leur modèle, que leur transmettrez-vous ?
    </p>
    <p class="content">
        Je suis heureux que les enfants me considèrent comme un modèle et je veux leur apprendre à toujours travailler pour leurs rêves et à ne pas se décourager.
    </p>
    <p class="content">
        Merci beaucoup pour l'interview Kylian, bonne soir et bonne chance !
    </p>
    <p class="content">
        Merci beacoup ! Bonne soir !
    </p>

    <img src="@/assets/misc/footballer.jpg" style="display:block; margin:auto; border-radius:15px;" alt="">

</div>
</template>


<script>
export default {
    mounted(){
        document.body.style.backgroundColor = "#bf9f46";
    },

}
</script>


<style lang="scss" scoped>

.flex-row{
    align-items: center;
    // margin: auto;
}

.square{
    width:25px;
    height:25px;
    margin: 10px;
    border: 1px solid black;
}
.square.green{background-color: #003b6d;}
.square.yellow{background-color: #d33132;}

.content{
    text-indent: 0;
    margin: 10px auto;
    color: white;
    border: 1px solid black;
}

.content:nth-child(even){
    background-color: #003b6d;
}
.content:nth-child(odd){
    background-color: #d33132;
}

</style>
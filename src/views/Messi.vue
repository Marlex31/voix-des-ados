<template>
<div>
    <h1 class="title" style="width: 25%;">Lionel Messi</h1>
    <h2 class="title" style="width: 20%;">Baciu Dario</h2>

    <div class="content">
        <h3>Présentation générale</h3>
        <p>
            Lionel Andrés Messi est un footballeur argentin qui joue actuellement pour le FC Barcelone dans la Primera División. Messi est considéré comme le meilleur joueur de sa génération et l'un des meilleurs de l'histoire du football, étant nommé joueur de l'année jusqu'à l'âge de 21 ans. Il a été nommé "le plus jeune joueur de l'année" par la FIFPro et le World Soccer Magazine pendant trois années consécutives entre 2003 et 2005. Son style de jeu a établi des comparaisons entre lui et la légende du football Diego Maradona, Maradona lui-même déclarant Messi son successeur.
        </p>
    </div>
    <img src="@\assets\misc\messi-1.jpg" style="width:50%;" alt="">
    <div class="content">
        <h3>Premières années</h3>
        <p>
            Messi a commencé à jouer au football dès son plus jeune âge, son potentiel étant très vite remarqué par Barcelone. En 2000, Messi a déménagé avec sa famille en Europe, laissant Newell's Old Boys. Il a fait ses débuts en Liga lors de la saison 2004-2005, étant le plus jeune joueur à jouer et à marquer un but dans le championnat espagnol. Barcelone a remporté le titre lors de la première saison de Messi. La saison au cours de laquelle il est sorti en surface a été 2006-2007: il est devenu partant, a réussi un triplé à El Clásico et a terminé avec 14 buts en 26 matches de championnat. La saison la plus réussie a été 2008-2009, messi a marqué 38 buts avant de jouer un rôle principal en remportant les trophées obtenus par les Catalans: Ligue des Champions, Championnat et Coupe d'Espagne.
        </p>
        <p>
            Messi a été le meilleur buteur du Championnat du monde junior 2005, marquant deux buts en finale. Peu de temps après, il est devenu membre à part entière du premier représentant. En 2006, il est devenu le plus jeune joueur à disputer la Coupe du monde et a remporté la médaille d'argent à la Copa America l'année suivante. Aux Jeux olympiques de Pékin, il a remporté le premier trophée avec l'équipe nationale, la médaille d'or avec l'équipe olympique de football d'Argentine.
        </p>
    </div>

    <div class="content">
        <h3>Réalisations et carrière</h3>
        <p>
            En 2009, 2010 et 2011, il a reçu le Golden Balloon Award du meilleur footballeur de l'année égalant la performance de Michel Platini, le seul joueur de l'histoire à avoir remporté jusqu'à présent 3 ballons d'or consécutifs. En 2012, il a surmonté cette barrière, étant le seul joueur de l'histoire à remporter la patrouille consécutive du ballon d'or. Et en 2015, il a remporté le 5ème ballon d'or de sa carrière.  En juillet 2016, Lionel Messi a annoncé publiquement qu'il se retirerait de l'équipe nationale seulement 29 ans, après avoir manqué les bris d'égalité dans la finale de Copa America, perdant ainsi la troisième finale consécutive avec son pays en 3 ans. Heureusement, il change d'avis un mois plus tard et commence à s'entraîner avec l'Argentine pour la Coupe du monde 2018. En 2019, Messi a remporté un 6e ballon d'or, étant le joueur avec le plus de balles d'or, 6 le nombre. Au fil du temps, Messi a attiré des surnoms tels que: Messidona, Messia, Messigician, La Pulga, Goat (le plus grand de tous les temps = le meilleur de tous les temps).
        </p>
    </div>
    <img src="@\assets\misc\messi-2.jpg" style="width:50%;" alt="">

</div>
</template>


<script>
export default {
    mounted(){
        document.body.style.backgroundColor = "#004d98";
    },

}
</script>


<style lang="scss" scoped>

img{
    display: block;
    margin: auto;
    border-radius: 15px;
    border: 1px solid black;
}

.content{
    background-color: #a50044;
    color: #edbb00;
}

.title{
    background-color: #a50044;
    color: #edbb00;
    border-radius: 15px;
}

h3{
    text-indent: 0;
}

</style>
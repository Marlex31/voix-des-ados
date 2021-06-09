<template>
<div>

    <h2 class="title">La pollution: LE GRAND PROBLÈME DU SIÈCLE</h2>
    <h2 class="title">Dărăban Denisa</h2>

    <div class="content">
        <p>
            Récemment, la ville de Paris a été classée comme ayant le plus haut niveau de pollution particulaire de toutes les capitales européennes. L'étude a conduit à la mise en œuvre d'un changement radical
        </p>
        <p>
            Les Français sont dans une situation très honteuse due au très haut niveau de pollution. Selon les informations publiées par le Times de Londres, le niveau de pollution privée est le plus élevé de la capitale française, par rapport à toutes les autres capitales européennes
        </p>
        <p>
            Selon la nouvelle politique annoncée par la mairie, près de trois millions de voitures ne seront plus autorisées à circuler dans la capitale, en semaine, du lundi au vendredi. Cette décision n'est qu'une étape dans un programme plus large de réduction de la pollution à Paris.
        </p>
        <p>
            Anne Hidalgo, la maire de la capitale française, a introduit une réglementation noille qui interdira les voitures et camionnettes diesel fabriquées avant le 1er janvier 2006 dans la ville entre 8h00 et 20h00 en semaine.
        </p>
        <p>
            Si vous ressentez le besoin d'ignorer la nouvelle réglementation, vous serez condamné à une amende prévisible.
        </p>
    </div>

    <div class="flex-row">
        <img src="@\assets\misc\pollution-1.jpg" alt="">
        <img src="@\assets\misc\pollution-2.png" alt="">
    </div>

</div>
</template>


<script>
export default {
    mounted(){
        document.body.style.backgroundColor = "#ffd6ba";
    },

}
</script>


<style scoped>

.content{
    color: #555b6e;
}

img{
    display: block;
    margin: auto;
    border: 1px solid black;
    border-radius: 15px;
}
</style>
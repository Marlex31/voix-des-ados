<template>
<div>
    <h2 class="title">La France pendant les deux guerres mondiales</h2>
    <h3 class="title">Palfi Dragoș</h3>

    <div class="content">
        <p>
            Par le jeu des alliances, la France est entrée en guerre, début août 1914, contre l'Allemagne, aux côtés du Royaume-Uni et de l'Empire russe. La Première Guerre mondiale, qui a fait 1,4 million de victimes parmi les Français et qui a provoqué d'importantes destructions dans le nord-est du pays, s'est terminée par une trêve le 11 novembre 1918 avec la victoire de la Triple Entente. Outre la restitution de l'Alsace et de la Lorraine, la France a reçu une partie des réparations de guerre dues au titre du traité de Versailles et a obtenu des garanties de sécurité, qui ont pris fin en 1940, lorsque l'Allemagne a envahi la Belgique, après avoir reconstruit son armée et remilitarisé la rive gauche du Rhin.
        </p>
    </div>
    <img src="https://upload.wikimedia.org/wikipedia/commons/f/fe/Map_Europe_alliances_1914-fr.svg" alt="">
    <div class="content">
        <p>
            Après plusieurs années de reconstruction laborieuse, marquée par un effort pour attirer l'immigration et augmenter la productivité, afin de pallier la pénurie de main-d'œuvre dans les mines, l'acier et l'automobile, la France a eu du mal à retrouver sa force économique d'avant-guerre, de sorte que, après 1924, elle enregistre une forte croissance, mais de courte durée, étant cependant fortement frappée, avec les autres grandes puissances, par la grande crise économique de 1929-1930. Bien que tardive, cette crise a été durable et profonde, les difficultés économiques étant amplifiées par une crise politique majeure, malgré les espoirs suscités par l'arrivée au pouvoir, en 1936, du Front populaire. Enfin, lorsque la France a déclaré la guerre à l'Allemagne nazie le 3 septembre 1939, elle venait de sortir de la pire crise que la Troisième République n’ait jamais connue.
        </p>
    </div>
    <div class="content">
        <p>
            Après huit mois sans combats (la "étrange guerre"), la Wehrmacht envahit le nord-est de la France le 10 mai 1940, et le maréchal Philippe Pétain demanda un armistice le 22 juin. Ce dernier a exigé et obtenu les pleins pouvoirs le 10 juillet, liquidant ainsi la Troisième République et jetant les bases du régime de Vichy, qui menait une politique conservatrice, traditionaliste et antisémite, allemande malgré les actions de résistance à l'intérieur et à l'extérieur du pays. Le débarquement des Alliés le 6 juin 1944 en Normandie annonce la fin de l'occupation nazie et le début de la libération de l'Europe. Au total, le conflit a tué moins de soldats qu'auparavant, mais des pertes civiles - au moins 330000 victimes civiles, dont 75000 juifs sur le sol français - ont été tuées dans l'Holocauste - et des blessures psychologiques et politiques (causées par la catastrophe de 1940, le collaborationnisme et ensuite les règlements de comptes dans les purges) ont été guéris après de très longues périodes.
        </p>
    </div>
    <img src="https://upload.wikimedia.org/wikipedia/commons/f/fe/France_map_Lambert-93_with_regions_and_departments-occupation-fr.svg"
    width="50%;">

</div>
</template>


<script>
export default {
    mounted(){
        document.body.style.backgroundColor = "#A8DADC";
    },

}
</script>


<style lang="scss" scoped>

.content{
    background-color: #E63946;
    color: #F1FAEE;
    border: 2px solid #457B9D;
}

img{
    display: block;
    margin: auto;
}

</style>
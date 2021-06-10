<template>
<div>
    <h2 class="title">Histoire d'Internet</h2>
    <h3 class="title">Mizgan Vlad</h3>

    <div class="content">
        <h4 class="title">Les débuts d'Internet</h4>
        <p>
            Le point de départ du développement d'Internet a été la rivalité entre les deux grandes puissances du XXe siècle : les États-Unis et l'Union soviétique. En <abbr title="mille neuf cent cinquante-sept">1957</abbr>, l'URSS a lancé dans l'espace le premier satellite artificiel de la Terre appelé <u>Spoutnik</u>. Cela a suscité de vives inquiétudes aux États-Unis, alors le président Eisenhower est en train de créer une agence spéciale sous le Pentagone : l'Advanced Research Projects Agency. Cette agence du Département de la Défense (DOD) est dirigée par des scientifiques, a une petite bureaucratie et la mission: «Le maintien de la supériorité technologique de l'armée américaine et des nouveaux arrivants parraine les recherches plus récentes et révolutionnaires et la technologie scientifiquement militaire de celles-ci.
        </p>
    </div>

    <img src="https://upload.wikimedia.org/wikipedia/commons/9/99/InternetPenetrationWorldMap.svg">
    <i style="display:block; text-align:center;">Internautes en 2015 en pourcentage de la population des unités</i>

    <div class="content">
        <h4 class="title">La première utilisation d'Internet</h4>
        <p>
            En <abbr title="mille neuf cent cinquante-neuf">1959</abbr>,  John McCarthy, professeur à l'Université de Stanford, dont le nom sera associé à l'intelligence artificielle, trouve la solution pour connecter plusieurs terminaux à un seul ordinateur central : le temps partagé.
        </p>
        <p>
            Comme pour le courrier classique, chaque paquet contient des informations sur le destinataire afin qu'il puisse être correctement acheminé sur le réseau. À destination, toutes les informations sont rassemblées. Bien que cette méthode se soit heurtée à la résistance des spécialistes, en <abbr title="mille neuf cent soixante-neuf">1969</abbr> le réseau «ARPANET» entre 4 nœuds a commencé à fonctionner (4 universités américaines).
        </p>
        <p>
            La première connexion ARPANET a été établie en 1969, entre l'Université de Californie à Los Angeles et le Stanford Resarci Institute, et s'est déroulée comme suit : ceux qui se trouvaient à une extrémité du réseau ont goûté un «L» (de «login») puis, à travers téléphone, à la confirmation demandée de l'opération du transfert des données de ceux de l'autre extrémité de la connexion. Le dialogue était le suivant :
        </p>
    </div>

    <div class="content" style="text-align:left; text-indent:0;">
        <terminal source="Voyez-vous L ?"></terminal>
        <terminal source="Oui, voyons L !"></terminal>
        <p>Ensuite, ils ont tapé un O et ont demandé à nouveau :</p>
        <terminal source="Voyez-vous le O ?"></terminal>
        <terminal source="Oui, on voit le O."></terminal>
        <p>Ensuite, ils ont tapé un G et la connexion a été interrompue. </p>
    </div>

    <div class="content">
        <p>
            En tant que programme du Département américain de la Défense, ARPANET s'est développé étonnamment rapide, avec de plus en plus d'ordinateurs qui s'y connectent. En <abbr title="mille neuf cent soixante-dix-neuf">1979</abbr>, l'ARPA a décidé de scinder le réseau en deux, un pour le monde commercial et universitaire et un militaire. Les deux réseaux pouvaient encore communiquer, construisant pratiquement un inter-réseau (Internet) initialement appelé DARPA Internet et établi plus tard sous le nom d'Internet. De nombreux chercheurs universitaires et militaires ont concentré leurs efforts sur le développement de programmes de communication en réseau. Ainsi, en <abbr title="mille neuf cent quatre-vingts">1980</abbr>, une série de programmes de communication (basés sur des protocoles bien définis), toujours utilisés aujourd'hui, étaient déjà achevés. En <abbr title="mille neuf cent quatre-vingt-trois">1983</abbr> TCP / IP est devenu le seul protocole Internet officiel et, par conséquent, de plus en plus d'ordinateurs dans le monde étaient connectés à ARPANET. La croissance du nombre d'ordinateurs connectés à Internet est devenue exponentielle, de sorte qu'en <abbr title="mille neuf cent quatre-vingt-dix">1990</abbr>, Internet comprenait 3 000 réseaux et 300 000 ) (ordinateurs. En <abbr title="mille neuf cent quatre-vingt-douze">1992</abbr>, le 1 000 000 ordinateur était déjà connecté. Ensuite, la taille d'Internet a doublé environ chaque année.
        </p>
    </div>
    <img src="https://upload.wikimedia.org/wikipedia/commons/0/0c/Internet_Hosts_Count_log.svg">

</div>
</template>

<script>
import terminal from '../components/terminal.vue'
export default {
    components: { terminal },
    mounted(){
        document.body.style.backgroundColor = "#D3BCCC";
    },

}
</script>


<style lang="scss" scoped>
// https://coolors.co/e8d7f1-d3bccc-a167a5-4a306d-0e273c

@import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');

img{
    display: block;
    margin: auto;
}

.content{
    font-size: 110%;
    background-color: #4A306D;
    color: white;
}
.title{
    font-family: 'Press Start 2P';
}
h4.title{
    text-decoration: underline;
}

</style>
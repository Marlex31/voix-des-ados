<template>
<div>

    <h1 class="title">Gymnastique </h1>
    <h2 class="title">Petrișor Roxana</h2>

    <ul class="content" style="width:90%; text-indent:0;">
        <li>
            Émilie Le Pennec (née le 31 décembre 1987) est une gymnaste artistique française à la retraite. Le Pennec a été championne olympique 2004 aux barres asymétriques et a été la première gymnaste française à remporter une médaille olympique en gymnastique artistique féminine. Le Pennec was born in La Garenne-Colombes, Hauts-de-Seine.
        </li>
        <li>
            À ses premiers championnats nationaux seniors en 2003, elle a terminé cinquième, mais a remporté une médaille d'argent dans sa spécialité, les barres asymétriques. Elle a représenté la France aux Championnats d'Europe Juniors 2002, où elle a remporté une médaille de bronze dans l'épreuve par équipe. Aux Championnats du monde de gymnastique de 2003, Le Pennec faisait partie de la 10e place.
        </li>
        <li>
            Aux Jeux Olympiques d'Athènes en 2004, Le Pennec s'est classé sixième avec l'équipe de France et 14e dans la finale du concours multiple. Cependant, elle a brillé dans la finale de l'épreuve aux barres asymétriques, où sa routine difficile l'a aidée à remporter une médaille d'or sur un terrain difficile avec de nombreux champions olympiques et mondiaux, dont Svetlana Khorkina et la championne du monde 2002 Courtney Kupets. Sa médaille était la toute première pour une gymnaste française.
        </li>
        <li>
            Le Pennec a raté les Championnats d'Europe 2006 pour se concentrer sur
            le travail scolaire. Plus tard, récupérant d'une blessure au tendon d'Achille et
            agissant sur les conseils de ses médecins, elle a été absente des Championnats du monde 2006.
        </li>
        <li>
            Lors des Jeux Olympiques d'été de 2008, elle a travaillé comme
            consultante pour la télévision française Canal +.Après avoir pris sa retraite
            de la gymnastique, Le Pennec a étudié pour devenir physiothérapeute.
            Elle pratique à Paris.
        </li>
    </ul>

    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/%C3%89milie_Le_Pennec%2C_2005_%28portrait%29.jpg/330px-%C3%89milie_Le_Pennec%2C_2005_%28portrait%29.jpg" alt="">

    <sources :links="links"></sources>

</div>
</template>


<script>
import sources from '../components/sources.vue';
export default {
  components: { sources },
    mounted(){
        document.body.style.backgroundColor = "#ffc8dd";
    },
    data(){
        return{
            links:{
                "https://en.wikipedia.org/wiki/Émilie_Le_Pennec": "https://en.wikipedia.org/wiki/%C3%89milie_Le_Pennec"
            }
        }
    }

}
</script>


<style lang="scss" scoped>

img{
    display: block;
    margin: auto;
    border: 5px solid #ffafcc;
    border-radius: 10px;
}

li{
    list-style-type: disc;
    padding: 15px;
    color: black;
}

</style>
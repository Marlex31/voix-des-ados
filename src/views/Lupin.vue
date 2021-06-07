<template>
<div>
    <h1 class="title">Arsène Lupin</h1>
    <h2 class="title">Bălălău Alexandru</h2>

    <div class="content flex-row">
        <img src="@/assets/misc/lupin.png" alt="Arsène Lupin">
        <div style="width:50%;"></div>
        <p>
            Arsène Lupin est un personnage littéraire fictif, créé par l'écrivain français Maurice Leblanc dans le récit Arrestation d'Arsène Lupin, publié dans le magazine Je sais tout en juillet 1905. Ce récit a ensuite été repris dans le volume Arsène Lupin gentleman cambrioleur. Le personnage est apparu dans une série de livres de police de Maurice Leblanc, ainsi que dans plusieurs livres non canoniques et dans de nombreux films, scènes de théâtre et bandes dessinées.
        </p>
    </div>
    <div class="content">
        <h3 class="title">La Description</h3>
        <p>
            Contemporain de Sir Arthur Conan Doyle, Maurice Leblanc (1864–1941) est le créateur du personnage du gentleman cambrioleur Arsène Lupin, qui dans les pays francophones jouit d'une aussi longue et grande popularité que Sherlock Holmes dans les pays anglophones.

        </p>
        <p>
            Il y a vingt volumes dans la série Arsène Lupin écrite par Leblanc lui-même, plus cinq suites autorisées écrites par l'équipe de romanciers policiers qui ont signé Boileau-Narcejac, ainsi que divers pastiches.
        </p>
        <p>
            Arsène Lupin est un descendant littéraire du personnage Rocambole de Pierre Alexis Ponson du Terrail. Comme lui, il est souvent une force déterminée, agissant du mauvais côté de la loi. Ceux que Lupin bat, toujours avec son style gaulois caractéristique, sont des méchants plus grands que lui. Lupin ressemble à l'archétype du voleur A. J. Raffles par E. W. Hornung qui est apparu pour la première fois dans Amateur Cracksman en 1899, mais on peut dire que les deux créatures anticipent des figures ultérieures telles que le Saint.
        </p>
    </div>

    <div class="content">
        <h3 class="title">La première apparition </h3>
        <p>
            Le personnage de Lupin est apparu pour la première fois dans une série d'histoires publiées dans le magazine Je sais Tout, commençant par no. 6, le 15 juillet 1905. Son nom d'origine était Arsène Lopin, jusqu'à ce qu'un politicien local du même nom protestât, incitant l'auteur à changer le nom du personnage.
        </p>
    </div>
    <img src="@/assets/misc/lupin-2.jpg" alt="">

    <div class="content">
        Le personnage d'Arsène Lupin aurait pu s'inspirer de l'anarchiste français Marius Jacob, dont le procès a atteint son titre en mars 1905, mais Leblanc lit aussi Les 21 jours d'un neurasthènes d'Octave (1901). Ils se sont demandé où était apparu un gentleman. Arthur Lebeau, et a vu la comédie Scrupule (1902) de Mirbeau, dont le personnage principal est un voleur.Le dernier livre officiel, "Les Milliards d'Arsène Lupin", a été publié sans le Chapitre IX "Le Coffre-fort (IX. Les coffres-forts)", puis le livre a été publié à la demande du fils de Maurice Leblanc. Cependant, en 2002, grâce aux efforts des fans de Lupin et du traducteur coréen Sung Gwi-Su, la partie manquante a été restaurée et la collection complète d'Arsène Lupin a été publiée pour la première fois en Corée par Kkachi Publishing.
    </div>

</div>
</template>

<script>
export default {
    mounted(){
        document.body.style.backgroundColor = "#14746F";
    },

}
</script>

<style lang="scss" scoped>
// https://coolors.co/99e2b4-88d4ab-78c6a3-67b99a-56ab91-469d89-358f80-248277-14746f-036666

.content{
    background-color: #78C6A3;
    border: 1px solid black;
}

img{
  display:block;
  margin: auto;
}

.title{
    color: white;
    text-decoration: underline;
}

</style>
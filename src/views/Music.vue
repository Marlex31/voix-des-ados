<template>
<div class="main">

    <h1 class="title" style="margin: 0 auto;">L'évolution de la musique :</h1>
    <h3 class="title">Depuis le début jusqu'à maintenant</h3>
    <h2 class="title">Vălean Cristian</h2>

    <div class="content">
        <p>
            Depuis le début de l'histoire, la musique existe partout dans le monde, à partir de l'Antiquité. Aujourd'hui, il s'est tellement développé qu'il existe plus d'une centaine de styles et de genres musicaux. <i>Mais par où tout a-t-il commencé ?</i>
        </p>
        <p>
            La musique est un sujet fascinant pour la théorie de l'évolution, c'est une caractéristique très appréciée de toutes les cultures. Les plus anciens instruments de musique connus datent d'il y a 40 000 ans. Par la suite, les activités et les traditions musicales ont progressivement évolué à travers la modernité.
        </p>
    </div>

    <div class="content">
        <p>
            Musique préhistorique, également connue sous le nom de musique primitive. Le seul „instrument” utilisé ici était la voix humaine qui commençait par le chant, le bourdonnement et le sifflement. Le suivi est la musique de la période biblique. Cette musique est une musique religieuse qui a d'abord été utilisée par „King David”. De nombreux instruments ont été utilisés pour ce type de musique, notamment la <i>harpe</i>, le <i>kithara</i> ou la <i>lyre</i>.
        </p>
        <img src="@\assets\misc\prehistoric.jpg" alt="">
    </div>
    <div class="content">
        <p>
            Vient ensuite la célèbre musique classique, qui fait référence à la période musicale de 1750 à 1820. Le terme de musique classique n'est apparu qu'au XIXe siècle, lorsque les gens essayaient de définir la période entre des artistes comme <i>Johann Sebastian Bach</i> et <i>Ludwig van Beethoven</i>. Il a également été qualifié d’âge d’or.
        </p>
    </div>

    <div class="content">
        <p>
            Au cours du 20e siècle, il y a eu une forte augmentation de la variété de musique à laquelle les gens avaient accès. Cette période a également amené les vinyles et les CD qui étaient énormes car les gens pouvaient enregistrer des chansons au lieu de simplement se produire en direct. Et à la fin des années 90, la musique numérique a été mise sur le marché. L'album de Michael Jackson „Thriller” est sorti en 1987 et est devenu l'album le plus vendu de tous les temps. Parmi les autres grands artistes de cette période figurent <i>Mariah Carey, Beatles, Pink Floyd, Whitney Houston, Céline Dion, Nirvana.</i>
        </p>
        <p>
            Dans les années 2000, les chansons sont devenues disponibles numériquement et il est devenu plus facile pour la musique de se propager d'un pays ou d'une région à l'autre. Certaines formes de musique populaire sont devenues mondiales, tandis que d'autres ont un large attrait dans la culture de leur origine. Grâce au mélange de genres musicaux, de nouvelles formes de musique populaire sont créées pour refléter les idéaux d'une culture mondiale. Les grands artistes de cette période incluent <i>Adele, Eminem, Britney Spears, Beyoncé, Linkin Park.</i>
        </p>
    </div>

    <img src="@\assets\misc\vynil.jpg" alt="">

    <sources :links="links"></sources>

</div>
</template>


<script>
import sources from '../components/sources.vue';

export default {
  components: { sources },
    mounted(){
        document.body.style.backgroundColor = "#c44536";
    },
    data(){
        return{
            links: {
                "https://en.wikipedia.org/wiki/History_of_music": "https://en.wikipedia.org/wiki/History_of_music",
                "https://www.cmuse.org/history-of-music/": "https://www.cmuse.org/history-of-music/",
                "https://www.futurelearn.com/info/courses/music-moves/0/steps/12666 ": "https://www.futurelearn.com/info/courses/music-moves/0/steps/12666 ",
            }
        }
    }

}
</script>


<style lang="scss" scoped>

img{
    display: block;
    margin: auto;
}

.main{
    border: 2.5px;
    border-color: #772e25;
    border-style: dashed;
}

.content{
    color: #edddd4;
    background-color: #197278;
    border: 1px solid #283d3b;
    border-radius: 15px;
}

.title{
    color: #edddd4;
}

</style>
<template>
<div>
    <h1 class="title">Obscurités diacriques</h1>
    <h2 class="title">Merilă Alexandru</h2>
    <h1 class="title" style="margin-top: 2.5%;">Le Ç Cédille</h1>

    <div class="content">
        Ç - appelé <i>c cédille</i> en français, est un graphème d'origine espagnol
        (et pourtant disparu de la langue contemporaine) utilisé parmi les
        alphabets catalan, français, frioulan, monégasque, occitan, portugais etc. comme
        variante diacritée de la lettre « C ».
        <br>
        Le role de ce signe diacritique est de changer le son <b>/s/</b>, là où un simple ‹ c ›
        aurait représenté le son <b>/k/</b> (principalement avant ‹ a ›, ‹ o ›, ‹ u › ou à
        la fin d'un mot).
    </div>

    <div class="flex-container" style="flex-direction: row; margin-bottom: 50px;">
        <div class="sounds">
            ç<span style="color: #2c3e50;">a</span> [sa]
            <br>
            ç<span style="color: #2c3e50;">a</span> [so]
            <br>
            ç<span style="color: #2c3e50;">a</span> [su]
        </div>

        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 40" width="150px" >
            <path d="M18.719 6.781L17.28 8.22 24.063 15H4v2h20.063l-6.782 6.781 1.438 1.438 8.5-8.5.687-.719-.687-.719z"/>
            <text x="0" y="35" style="font-size: 8px;">Sans « ç »</text>
        </svg>

        <div class="sounds">
            c<span style="color: #2c3e50;">a</span> [ka]
            <br>
            c<span style="color: #2c3e50;">a</span> [ko]
            <br>
            c<span style="color: #2c3e50;">a</span> [ku]
        </div>
    </div>

    <div class="flex-container content" style="flex-direction: row; margin-bottom: 50px;">
        <div>
            <p style="text-indent: 5%; padding-right:25px;">
                Geoffroy Tory (1480-1533) est un imprimeur-libraire,  l'un des introducteurs des
                caractères romains en France, qui a envisagé l'introduction de signes diacritiques
                propres à la transcription de français, nottament la cédille, les apostrophes
                ainsi que l'accent grave et aigu.
            </p>
            <br>
            <p style="text-indent: 5%; padding-right:25px;">
                <abbr title="Au quel est contenu l’Art et Science de la deue et vraye Proportion des Lettres Attiques, qu’on dit autrement Lettres Antiques, et vulgairement Lettres Romaines proportionnees selon le Corps & Visage humain">
                Champ fleury
                </abbr>
                est l'une de ses plus connues œuvres, dans qu'il presente la propre utilisation de
                Français, en parlant de l'elegance de l'alphabet et de la grammaire, parmi autre sujets.
                L'image dans la droite montre un fragment d'un volume dans lequelle Tory s'appuie
                sur <i>L’Homme de Vitruve</i> dans ses dessins de lettres.
            </p>
            <br>
        </div>
        <img src="@/assets/linguistique/A-letter.png" style="height:200px;"
                alt="Geoffroy Tory lettre A">
    </div>

    <video style="display: block; margin: auto; margin-bottom:50px;"
        height="400" autoplay muted controls loop>
        <source src="@/assets/linguistique/Formation.mp4" type="video/mp4">
        Ce format de vidéo n'est pas supporté par votre navigateur.
    </video>

    <p>C'est grace à elle que la maconnrie peut-être tenu pour une activité professionelle.</p>
    <ImgComparisonSlider>
        <!-- eslint-disable -->
        <img
        slot="before"
        style="width: 50%; margin:auto; display:block;"
        src="@/assets/linguistique/macon.png"
        />
        <img
        slot="after"
        style="width: 50%; margin:auto; display:block;"
        src="@/assets/linguistique/ma-con.png"
        />
        <!-- eslint-enable -->
  </ImgComparisonSlider>

    <sources :links="sources_1"></sources>

    <h1 class="title" style="margin: 2.5% 0">Le Macron</h1>

    <div class="content">
         <p style="text-indent: 5%;">
            Le macron ‹ ◌̄ › est un diacritique de plusieurs alphabets : latin, grec et cyrillique,
            placé plus souvent sur une voyelle. Dans philologie il indique que la voyelle qu'ils affecte
            a une prononciation long, par à opposition a une
            <abbr title="Du latin brevis, « court »)">brève</abbr>
            (‹ ◌̆ ›), qui note une voyelle courte.
        </p>
        <p style="text-indent: 5%;">
            En français, il n'est pas utilisé à part les transcriptions de termes étrangers et
            d'être un pis-aller dans les cas d'incertitude en choisir le propre accent. La
            linguiste <i>Nina Catach</i> a proposé en 1989 un usage du macron dans la presse :
        </p>
    </div>

    <div class="content">
        <p>
        « Aujourd’hui je pose la question : avons-nous besoin de deux accents, l’aigu et le grave ?
        Notre presse imprimée, toujours à l’avant-garde, a résolu le problème (autre problème séculaire)
        des capitales non accentuées, et de l’aspect disgracieux des accents de guingois en travers des
        titres, par une procédure, sans bavures : un seul accent, horizontal, qu’on appelle couramment
        l’accent plat :
        </p>
    <blockquote class="quote">
        <pre>
        DEUX BUTS ENCAISSĒS
        UN OUVRIER TUĒ
        UN PIĒTON RENVERSĒ PAR SON FRĒRE. »
        </pre>
    </blockquote>
    </div>


    <video style="display: block; margin: auto; margin-bottom:50px;"
    height="400" autoplay muted controls loop>
        <source src="@/assets/linguistique/Formation-2.mp4" type="video/mp4">
        Ce format de vidéo n'est pas supporté par votre navigateur.
    </video>

    <div>
        <p style="text-align:center; font-size: 22px;">En peuvent conclure que le macron est pour ceux qui ont
            un esprit independent, impartiel.</p>
        <br>
        <img src="@/assets/linguistique/macron.png" style="display:block; width:400px; margin:auto;"
        alt="Caricature de President Macron">
    </div>

    <sources :links="sources_2"></sources>

</div>
</template>

<script>
import { ImgComparisonSlider } from '@img-comparison-slider/vue';
import sources from '../components/sources.vue'

export default {
    components:{
        sources,
        ImgComparisonSlider
    },
    mounted(){
        document.body.style.backgroundColor = "rgb(250, 200, 0)";
    },
    data(){
        return{
            sources_1: {
                "Cédille - TV5 serie « Un point c'est tout »": "https://www.tv5mondeplus.com/player/106797582_74079A",
                "Ç Cédille": "https://fr.wikipedia.org/wiki/C%C3%A9dille",
                "Geoffroy Tory": "https://fr.wikipedia.org/wiki/Geoffroy_Tory",
                "Palatalisation": "https://fr.wikipedia.org/wiki/Palatalisation",
                "Bibliothèques de Bourges": "https://www.youtube.com/watch?v=EAjwzNTrwXM",
                "Cédille": "https://fr.wikipedia.org/wiki/C%C3%A9dille",
                "Loi de Bartsch": "https://fr.wikipedia.org/wiki/Loi_de_Bartsch",
                },
            sources_2:{
                "Macron - TV5 serie « Un point c'est tout »": "https://www.tv5mondeplus.com/player/106797580_74079A",
                "Macron": "https://fr.wikipedia.org/wiki/Macron_(diacritique)",
                "Brève": "https://fr.wikipedia.org/wiki/Br%C3%A8ve"
            }
        }
    }
}
</script>

<style scoped>

pre{
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    line-height: 90%;
}

.quote{
    border-left: 4px solid;
    margin: 15px;
}

.sounds{
    font-size: 400%;
    text-align: center;
    background: rgb(255, 166, 0);
    margin: auto;
    width: 20%;
    padding: 1%;
    border-radius: 15px;
    color: white;
}

.content{
    margin: 30px;
    padding: 20px;
    font-size: 24px;
    background-color: rgb(255, 166, 0);
    border-radius: 15px;
    line-height: 120%;
}
.content::first-letter{
    font-size: 300%;
    font-family: "Source Sans Pro";
    float: left;
    margin: 0.1em 0.1em 0.1em 0;
    line-height: 0.65;
    background: #303030;
    color: #FDF9F2;
    padding: 0.3rem;
}

#end{
    opacity: 0;
}

.flex-container{
    display: flex;
    flex-direction: column;
    align-items: center;
}

.letter{
    font-size: 125px;
    font-family: 'Times New Roman', Times, serif;
}

</style>
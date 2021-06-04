<template>
<div>
    <h1 class="title" style="color: #e87a5b;">Obscurités diacriques</h1>
    <h2 class="title"
    style="position: absolute; color: #e87a5b; right:0; top:0; font-family: 'Dancing Script'; padding-right:15px;"
    >Merilă Alexandru</h2>
    <h2 class="title" style="color: #e87a5b;">La Ç Cédille</h2>

    <div class="content">
        <p>
            <span style="font-weight:bold;">Ç</span> - appelé <i>c cédille</i> en français, est un graphème d'origine espagnole
            (et pourtant disparu de la langue contemporaine) utilisé parmi les alphabets
            catalan, français, frioulan, monégasque, occitan, portugais etc. comme variante
            diacritée de la lettre « C ».
            <br>
            Le rôle de ce signe diacritique est de changer le son <b>/s/</b>,
            là où un simple ‹ c › aurait représenté le son <b>/k/</b> (principalement avant
            ‹ a ›, ‹ o ›, ‹ u › ou à la fin d'un mot).
        </p>
    </div>

    <div class="flex-container" style="flex-direction: row; margin-bottom: 50px;">
        <div class="sounds">
            ç<span class="phonology">a</span> [sa]
            <br>
            ç<span class="phonology">a</span> [so]
            <br>
            ç<span class="phonology">a</span> [su]
        </div>

        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 40" width="150px" >
            <path d="M18.719 6.781L17.28 8.22 24.063 15H4v2h20.063l-6.782 6.781 1.438 1.438 8.5-8.5.687-.719-.687-.719z"/>
            <text x="0" y="35" style="font-size: 8px;">Sans « ç »</text>
        </svg>

        <div class="sounds">
            c<span class="phonology">a</span> [ka]
            <br>
            c<span class="phonology">a</span> [ko]
            <br>
            c<span class="phonology">a</span> [ku]
        </div>
    </div>

    <div class="flex-container content" style="flex-direction: row; margin-bottom: 50px;">
        <div>
            <p>
                <u>Geoffroy Tory</u> (1480-1533) était un imprimeur-libraire,  l'un des introducteurs des
                caractères romains en France, qui a envisagé l'introduction de signes diacritiques
                propres à la transcription de français, notamment la cédille, les apostrophes
                ainsi que l'accent grave et aigu.
            </p>
            <p>
                <abbr title="Au quel est contenu l’Art et Science de la deue et vraye Proportion des Lettres Attiques, qu’on dit autrement Lettres Antiques, et vulgairement Lettres Romaines proportionnees selon le Corps & Visage humain.">Champ Fleury</abbr>
                est l'une de ses œuvres les plus connues, dans laquelle il évoque l'utilisation correcte du
                français, en parlant de l'élégance de l'alphabet et de la grammaire, parmi autres sujets.
            </p>
            <br>
        </div>
        <div class="flex-container" style="background-color:#e77254ee; border-radius:25px; padding: 15px 0;">
            <img src="@/assets/linguistique/A-letter.png" style="height:200px;"
            alt="Geoffroy Tory lettre A">
            Tory s'appuie sur <i>L’Homme de Vitruve</i> dans ses dessins de lettres.
        </div>
    </div>

    <video height="400" autoplay muted controls loop>
        <source src="@/assets/linguistique/Formation.mp4" type="video/mp4">
        Ce format de vidéo n'est pas supporté par votre navigateur.
    </video>

    <div class="content">
        <p>
            C'est grâce à la cédille que la maçonnerie peut être tenue pour une
            activité professionnelle :
        </p>
    </div>

    <video height="400" autoplay muted controls loop>
        <source src="@/assets/linguistique/connerie.mp4" type="video/mp4">
        Ce format de vidéo n'est pas supporté par votre navigateur.
    </video>

    <sources style="color: black" :links="sources_1"></sources>


    <h1 class="title" style="color: #e87a5b;">Le Macron</h1>

    <div class="content">
         <p>
            Le macron <span style="font-family:'Avenir'">‹ ◌̄ ›</span> est un diacritique de plusieurs alphabets : latin, grec et cyrillique,
            placé plus souvent sur une voyelle. En philologie il indique que la voyelle qu'il affecte
            a une prononciation longue, par opposition à une
            <abbr title="Du latin « brevis », court)">brève</abbr>
            (<span style="font-family:'Avenir'">‹ ◌̆ ›</span>), qui note une voyelle courte.
        </p>
        <p>
            En français, il n'est pas utilisé à part les transcriptions de termes étrangers et
            d'être un pis-aller dans les cas d'incertitude en choisir le propre accent. La
            linguiste <i>Nina Catach</i> a proposé en 1989 un usage du macron dans la presse :
        </p>

    <blockquote class="quote">
        Aujourd’hui je pose la question : avons-nous besoin de deux accents, l’aigu et le grave ?
        Notre presse imprimée, toujours à l’avant-garde, a résolu le problème (autre problème séculaire)
        des capitales non accentuées, et de l’aspect disgracieux des accents <abbr title="ancien français guinguer, sautiller; de giguer, saute">de guingois</abbr> en travers des
        titres, par une procédure, sans bavures : un seul accent, horizontal, qu’on appelle couramment
        l’accent plat :
        <pre>
    DEUX BUTS ENCAISSĒS
    UN OUVRIER TUĒ
    UN PIĒTON RENVERSĒ PAR SON FRĒRE.
        </pre>
    </blockquote>
    </div>


    <video height="400" autoplay muted controls loop>
        <source src="@/assets/linguistique/Formation-2.mp4" type="video/mp4">
        Ce format de vidéo n'est pas supporté par votre navigateur.
    </video>

    <div class="content" style="width:75%; margin:auto;">
        <p>
            On peut conclure que le macron est pour ceux qui ont un esprit
            indépendent, impartiel.
        </p>
    </div>
    <br>
    <img src="@/assets/linguistique/macron.png" style="display:block; width:400px; margin:auto;"
    alt="Caricature du President Macron">

    <sources style="color: black" :links="sources_2"></sources>

</div>
</template>

<script>
import sources from '../components/sources.vue'

export default {
    components:{
        sources
    },
    mounted(){
        document.body.style.backgroundColor = "#f9eec6";
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


<style lang="scss" scoped>

 @import url('https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap');
 @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@600&display=swap');

$primary-fg: #e77254ee;

video{
    display: block;
    margin: auto;
    padding: 30px 0;
}

p, pre, .quote{
    text-align: justify;
    margin-left: 8%;
    line-height: 1.58em;
    font-family: "Roboto Mono", monospace;
    padding: 0 30px;
}

.phonology{
    color: white
}

.title{
    color: #3D5A80; // enough cotrast?
}

pre{
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    line-height: 90%;
}

.quote{
    border-left: 4px solid;
    border-color: #6497f0;
    padding-left: 30px;
    padding-top: 10px;
}

.sounds{
    font-size: 300%;
    text-align: center;
    background-color: $primary-fg;
    margin: auto;
    margin: 15px auto;
    width: 20%;
    padding: 1%;
    border-radius: 15px;
}

.content{
    background-image:
    linear-gradient(90deg, transparent 79px, #abced4 79px, #abced4 81px, transparent 81px),
    linear-gradient(rgb(243, 186, 186) .1em, transparent .1em);
    background-size: 100% 1.5em;
    padding: 10px 0;
}

.flex-container{
    display: flex;
    flex-direction: column;
    align-items: center;
}

.letter{
    font-size: 200%;
    font-family: 'Times New Roman', Times, serif;
}

</style>
<template>
    <div>
        <h1 class="title">Obscurités diacriques</h1>
        <h2 class="title">Merilă Alexandru</h2>

        <h1 class="title" style="margin-top: 2.5%;">La cédille</h1>

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
                    <abbr title="Au quel est contenu l’Art et Science de la deue et vraye Proportion
                    des Lettres Attiques, qu’on dit autrement Lettres Antiques, et vulgairement Lettres
                    Romaines proportionnees selon le Corps & Visage humain">
                        Champ fleury
                    </abbr>
                    est l'une de ses plus connues œuvres, dans qu'il presente la propre utilisation de
                    Français, en parlant de l'elegance de l'alphabet et de la grammaire, parmi autre sujets.
                    L'image dans la droite montre un fragment d'un volume dans lequelle Tory s'appuie
                    sur <i>L’Homme de Vitruve</i> dans ses dessins de lettres.
                </p>
                <br>
            </div>
            <img src="@/assets/A-letter.png" style="height:200px;"
                 alt="Geoffroy Tory lettre A">
        </div>

        <video style="display: block; margin: auto; margin-bottom:50px;"
            height="400" autoplay muted controls loop>
            <source src="@/assets/Formation.mp4" type="video/mp4">
            Ce format de vidéo n'est pas supporté par votre navigateur.
        </video>

        <sources :links="sources_1"></sources>

    </div>
</template>

<script>
import sources from '../components/sources.vue'

export default {
    components:{
        sources
    },
    mounted(){
        document.body.style.backgroundColor = "rgb(250, 200, 0)";
    },
    data(){
        return{
            sources_1: {
                "Cédille - TV5 serie « Un point c'est tout »": "https://www.tv5mondeplus.com/player/106797582_74079A",
                "Cédille": "https://fr.wikipedia.org/wiki/C%C3%A9dille",
                "Geoffroy Tory": "https://fr.wikipedia.org/wiki/Geoffroy_Tory",
                "Palatalisation": "https://fr.wikipedia.org/wiki/Palatalisation",
                "Loi de Bartsch": "https://fr.wikipedia.org/wiki/Loi_de_Bartsch",
                "Bibliothèques de Bourges": "https://www.youtube.com/watch?v=EAjwzNTrwXM",
                }
        }
    }
}
</script>

<style scoped>

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
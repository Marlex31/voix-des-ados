<template>
<div>

    <h1 class="title">Tenues emblématiques de célébrités</h1>
    <h2 class="title">Constantin Andra</h2>

    <div class="flex-row">
        <div class="content">
            <p>
                Cette robe de soirée noire en satin italien a été portée par Audrey Hepburn lors de l'ouverture du film de comédie romantique de 1961 Breakfast at Tiffany's.
            </p>
            <p>
                Initialement, la robe a été conçue par Givenchy, une amie proche de Hepburn, mais elle a été modifiée par la créatrice de costumes Edith Head afin qu'elle ne montre pas autant de jambe (elle comportait à l'origine une fente aux cuisses sur un côté), ce qui était considéré inapproprié à l'époque. Dans le film, la robe est portée avec un collier de perles de Roger Scemama et assortie avec de longs gants de soirée noirs.
            </p>
            <p>
                La tenue a été décrit comme ultra-féminine et parisienne et est citée comme l'une des plus emblématiques du 20e siècle et de l'histoire du cinéma.
            </p>
        </div>

        <div class="flex-column">
            <ImgComparisonSlider class="compare">
            <!-- eslint-disable -->
            <img
                slot="before"
                src="@/assets/modelling/audrey-1.jpg"
            />
            <img
                slot="after"
                src="@/assets/modelling/audrey-2.jpg"
            />
            <!-- eslint-enable -->
            </ImgComparisonSlider>
            <p>La robe noire d'Audrey Hepburn (comme Holly Golightly) par Givenchy, 1961</p>
        </div>
        </div>

    <div class="flex-row">
        <div class="content">
            <p>
                Marilyn Monroe portait une robe blanche dans le film de 1955, The Seven Year Itch. La robe a été créée par le créateur de costumes William Travilla et a été portée dans l'une des scènes les plus connues du film. Monroe, prise par surprise par la brise ascendante d’un canal, a transformé ce qui aurait pu être un accident vestimentaire en une scène mémorable, par sa présence d'esprit et sa nature ludique. Le film est devenu un succès. La robe est considérée comme une icône de l'histoire du cinéma et cette image a été décrite comme l'une des images emblématiques du 20e siècle.
            </p>
        </div>

        <div class="flex-column">
            <ImgComparisonSlider class="compare">
            <!-- eslint-disable -->
            <img
                slot="before"
                src="@/assets/modelling/monroe-1.jpg"
            />
            <img
                slot="after"
                src="@/assets/modelling/monroe-2.jpg"
            />
            <!-- eslint-enable -->
            </ImgComparisonSlider>
            <p>La robe blanche de Marilyn Monroe par William Travilla, 1955</p>
        </div>
    </div>

    <div class="flex-row">
        <div class="content">
            <p>
                La robe de vengeance a été portée par Diana, princesse de Galles, lors du dîner de collecte de fonds organisé par le magazine Vanity Fair pour la Serpentine Gallery à Kensington Gardens. La robe a été interprétée comme ayant été portée pour se venger lorsque le mari de Diana, Charles, prince de Galles, a admis à la télévision son affaire avec Camilla Parker-Bowles.
            </p>
            <p>
                La robe, une robe de soirée en soie noire à épaules dénudées, a été conçue par Christina Stambolian qui a comparé le choix du noir de Diana au cygne noir Odile dans le ballet de Tchaïkovski-Le lac des cygnes, déclarant que Diana a choisi de ne pas jouer la scène comme Odette, innocente en blanc, elle l'a joué comme Odile. Elle était clairement en colère.
            </p>
        </div>
        <div class="flex-column">
            <img src="@/assets/modelling/diana.jpg">
            <p>La robe de vengeance de la princesse Diana par Christina Stambolian, 1994</p>
        </div>
    </div>


    <div>
        <h2 class="title">Coco Channel</h2>
        <div class="flex-column">
            <ImgComparisonSlider class="compare">
            <!-- eslint-disable -->
            <img
                slot="before"
                src="@/assets/modelling/coco-1.png"
            />
            <img
                slot="after"
                src="@/assets/modelling/coco-2.jpg"
            />
            <!-- eslint-enable -->
            </ImgComparisonSlider>
            <p>La petite robe noire et fausses perles</p>
        </div>

    </div>


    <sources :links="links"></sources>
</div>


</template>


<script>
import { ImgComparisonSlider } from '@img-comparison-slider/vue';
import sources from '../components/sources.vue';

export default {
  components: {
    ImgComparisonSlider,
    sources
  },
  mounted(){
        document.body.style.backgroundColor = "#F07167";
    },
    data(){
        return{
            links: {"Imagés colorisées avec DeepAI": "https://deepai.org/machine-learning-model/colorizer"}
        }
    },
};
</script>


<style lang="scss" scoped>

.flex-row{
    display: flex;
    flex-direction: row;
    align-items: center;
}
.flex-column{
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    color: #FED9B7;
    font-style: italic;
    font-size: medium;
}

.content{
    color: #FDFCDC;
    font-size: 26px;
    margin: 50px 90px;
    padding: 25px;
    width: 50%;
    text-indent: 5%;
    background-color: #00AFB9;
    border-radius: 15px;
    border: 2.5px solid #0081A7;
}

.compare{
    --handle-size: 30px;
    --handle-opacity: 0.9;
    --handle-opacity-active: 0.5;
    --divider-width: 2px;
    --divider-color: #c0c0c08c;
}

</style>
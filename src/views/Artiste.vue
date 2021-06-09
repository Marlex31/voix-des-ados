<template>
<div>

    <h1 class="title">Alizée </h1>
    <h2 class="title">Nistoroiu Elena</h2>

    <ul class="content" style="width:90%; text-indent:0;">
        <li>
            Alizée Jacotey, simplement dite Alizée, est une chanteuse française, née le 21 août 1984 à Ajaccio, en Corse-du-Sud.
        </li>
        <li>
            Après sa participation à l'émission Graines de star, Alizée est repérée par la chanteuse Mylène Farmer, qui lui écrit deux albums avec Laurent Boutonnat (Gourmandises et Mes courants électriques). Son premier single, Moi... Lolita, est l'un des tubes des années 2000 en France, mais aussi en Europe et en Asie. Entre 2000 et 2004, Alizée vend six millions de disques.
        </li>
        <li>
            Le 25 mars 2003 à l’Eurobest à Cannes, Alizée rencontre le chanteur Jérémy Chatelain, alors en tournée promotionnelle du titre Paris Latino avec la troupe de Star Academy 2. Ils se marient à Las Vegas le 6 novembre 2003. Le 28 avril 2005, Alizée met au monde leur premier enfant : une fille prénommée Annily. Ils se séparent en 2011.
        </li>
        <li>
            Depuis fin 2013, Alizée est en couple avec le danseur Grégoire Lyonnet, son ancien partenaire de Danse avec les stars 4. Le 18 juin 2016, ils se marient à la chapelle Notre-Dame-de-la-Miséricorde à Villanova en Corse. Elle annonce sur Instagram être enceinte fin mai 2019 pour une naissance à l'automne. Le 24 novembre 2019, elle donne naissance à une fille prénommée Maggy.
        </li>
    </ul>

    <div class="flex-row">
        <img src="https://upload.wikimedia.org/wikipedia/commons/e/e0/French_singer_Aliz%C3%A9e_at_Les_Enfoires_2013_-_DSC5744.jpg" style="width:20%;">
        <img src="https://www.europafm.ro/wp-content/uploads/2019/07/alizee.jpg" style="width:40%;">
        <img src="https://upload.wikimedia.org/wikipedia/commons/0/03/Aliz%C3%A9e_Jacotey_-_Chanteuse_Francaise_-_Paris_-_3_December_2007_-_DSC_1665bis.jpg" style="width:20%;">
    </div>

</div>
</template>


<script>
export default {
    mounted(){
        document.body.style.backgroundColor = "#ffc8dd";
    },

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
    list-style-type: "❥";
    padding: 15px;
    color: black;
}

</style>
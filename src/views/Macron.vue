<template>
<div>
    <h1 class="title">Emmanuel Macron</h1>
    <h2 class="title">Abrudan Denis</h2>

    <img src="@/assets/macron/macron-1.png" alt="">

    <div class="content">
        <p>
            Emmanuel Macron, né le 21 décembre 1977 à Amiens, est le fils d'un couple de médecins. Son père est neurologue, sa mère pédiatre, et tous deux sont professeurs au CHU d'Amiens. Aîné de la fratrie, il a un frère et une soeur, il passe une grande partie de son enfance chez sa grand-mère adorée, directrice de collège élevée par des parents illettrés. Il suit sa scolarité chez les Jésuites de la Providence à Amiens.
        </p>
        <p>
            Elève brillant – il est lauréat du Concours général de français à 16 ans – il se passionne également pour la musique et décroche le troisième Prix de piano du Conservatoire d'Amiens. En terminale, il arrive au lycée Henri-IV à Paris.
        </p>
        <p>
            Diplômé de Sciences Po Paris, il entame ensuite un cursus universitaire à Nanterre. En 1999, il est assistant du philosophe Paul Ricoeur et participe à la rédaction de l'un de ses derniers ouvrages, La mémoire, l'histoire, l'oubli publié aux éditions du Seuil en 2000. Après une maîtrise de philosophie sur Machiavel, il rédige son mémoire de DEA sur l'Intérêt général, lecture et principes de la philosophie du droit de Hegel.
        </p>
    </div>

    <div class="flex-row">
        <img src="@/assets/macron/macron-6.jpg" style="width:50%;" alt="">
        <div style="width:10%;"></div>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Signature_EM.svg/1024px-Signature_EM.svg.png" style="width:30%;" alt="Signature">
    </div>

    <div class="content">
        <p>
            En 2002, il se dirige vers la haute fonction publique et intègre l'ENA – promotion Léopold Sédar Senghor – d'où il sort diplômé en 2004. Il débute sa carrière à l'Inspection des Finances, d'abord inspecteur adjoint en avril 2004, il devient inspecteur des Finances en octobre 2005. En juin 2007, il est chargé de mission auprès du chef de service de l'Inspection générale des finances. En 2008, changement de cap, la banque Rothschild l'engage à l’âge de 30 ans. Son ascension au sein de la banque d'affaires est fulgurante, il en devient associé-gérant en décembre 2010.
        </p>
        <p>
            En mai 2012, il accepte la proposition de François Hollande, rencontré en 2007 lors d'un dîner chez Jacques Attali, de rejoindre l'Elysée en tant que secrétaire général adjoint de la présidence. Le 26 août 2014, il est nommé Ministre de l'Economie, de l'Industrie et du Numérique dans le deuxième gouvernement de Manuel Valls. Il est le plus jeune ministre de l'Économie . En tant que ministre de l'Économie, Macron était à l'avant-garde de la promotion de réformes favorables aux entreprises.
        </p>
    </div>

    <div class="content">
        <p>
            Le 30 août 2016, Emmanuel Macron annonce sa démission du gouvernement. Quelques semaines plus tard, le 16 novembre, il annonce officiellement sa candidature à l'élection présidentielle 2017. Le 23 avril 2017, lors du premier tour de l'élection présidentielle, il arrive en tête des suffrages avec 24% des voix. Le 7 mai 2017, il remporte l'élection présidentielle avec plus de 66% des suffrages, et devient le plus jeune Président de la République française.
        </p>
    </div>

    <sources :links="links"></sources>

</div>
</template>


<script>
import sources from '../components/sources.vue';

export default {
  components: { sources },
    mounted(){
        document.body.style.backgroundColor = "#f15b67";
    },
    data(){
        return{
            links: {
                "https://www.gala.fr/stars_et_gotha/emmanuel_macron": "https://www.gala.fr/stars_et_gotha/emmanuel_macron",
                "https://ro.wikipedia.org/wiki/Emmanuel_Macron": "https://ro.wikipedia.org/wiki/Emmanuel_Macron"
            }
        }
    }

}
</script>


<style lang="scss" scoped>

.content, .title{
    color: white;
}

.content{
    background-color: #002395;
}

img{
    display: block;
    margin: auto;
    border-radius: 15px;
}

</style>
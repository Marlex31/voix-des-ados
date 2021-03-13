

<template>
<div>
    <h1 id="header" class="title">L'internet</h1>
    <p class="content">
        Internet est le réseau informatique mondial accessible au public. Il
        <a href="#" class="has-tooltip">s'agit<span class="tooltip tooltip-top">înseamnă că</span></a>
        d'un réseau de réseaux, à commutation de paquets, sans centre névralgique, composé de millions de réseaux
        aussi bien publics que privés, universitaires, commerciaux et gouvernementaux, eux-mêmes regroupés en
        réseaux autonomes ; il en existe plus de 91 000 en 2019. L'information est transmise via Internet grâce à
        un ensemble standardisé de protocoles de transfert de données, qui permet des applications variées comme
        le courrier électronique, le World Wide Web, la messagerie instantanée, le partage de fichiers en pair-à-pair,
        le streaming, le podcasting, la téléconférence.
        Dans les années 1990, l'apparition du Web contribue à rendre Internet accessible au grand public. Puis,
        depuis les années 2010, un nombre croissant de types d'objets divers sont connectés à Internet, formant
        l'Internet des objets. Un internaute est une personne qui utilise un accès à Internet. Cet accès peut être
        obtenu grâce à un fournisseur d'accès via divers moyens de communication électronique : soit filaire
        (réseau téléphonique commuté à bas débit, ADSL, fibre optique jusqu'au domicile), soit sans fil (WiMAX,
        par satellite, 3G+, 4G, ou 5G).
    </p>
    <div style="height: 1000px"></div>
</div>
</template>

<script>

window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("header").style.fontSize = "50px";
  } else {
    document.getElementById("header").style.fontSize = "90px";
  }
}

export default {
    name: "net_hist",
    }
</script>

<style scoped>
body{
    background-color: lightgray;
}

.title{
    font-family: serif;
    text-align: center;
    font-size: 90px;
    transition: 0.5s;
}

.content{
    font-family: sans-serif;
    font-size: 25px;
    text-indent: 50px;
    text-align: left;
    padding: 0 20px 0 70px;
}

a{
    color: rgb(124, 199, 124);
    text-decoration: none;
}

a:hover{
    text-decoration-line: underline;
    text-decoration-color: black;
}

/* =Tooltip Style -------------------- */

/* Tooltip Wrapper */
.has-tooltip {
  position: relative;
}
.has-tooltip .tooltip {
  opacity: 0;
  visibility: hidden;
  transition: visibility 0s ease 0.5s, opacity .3s ease-in;
}
.has-tooltip:hover .tooltip {
  opacity: 1;
  visibility: visible;
}

/* Tooltip Body */
.tooltip {
  background-color: #222;
  bottom: 130%;
  color: #fff;
  font-size: 16px;
  text-indent: 0px;
  left: 50%;
  margin-left: -56px;
  padding: 6px;
  position: absolute;
  text-align: center;
  width: 120px;
  z-index: 4;
  border-radius: 3px;
  text-decoration: none;
  text-shadow: none;
}

/* Tooltip Caret */
.tooltip:after {
  border-top: 5px solid rgb(85, 85, 85);
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  bottom: -5px;
  content: " ";
  font-size: 0px;
  left: 50%;
  line-height: 0%;
  margin-left: -4px;
  position: absolute;
  width: 0px;
  z-index: 1;
}
</style>
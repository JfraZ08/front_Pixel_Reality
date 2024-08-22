<template>
    <section id="photogrammetrie">
        <div class="fond_photogrammetrie">
            <div class="sous_imagerieia">
                <h1>La photogrammétrie est l'art de transporter les objets du monde réel au monde virtuel</h1>
            </div>
        </div>
        <div class="description_photogrammetrie">
            <div class="photo-photogrammmetrie">
             <img src="../../public/images/drone.jpeg" alt="drone">
            </div>
           <div class="photogrammetrie-texte">
            <p>La photogrammétrie consiste à photographier un objet, un monument, un site naturel (etc) sous un maximum d’angles possibles et à utiliser les photographies obtenues pour en recréer une visualisation en 3D.</p>
            <p>Que vous ayez pour projet de modéliser le site industriel de votre entreprise, un véhicule de sport dont vous voulez faire la promotion, un objet à intégrer dans un projet de QR Code en réalité augmentée, nous avons une solution pour vous.
            </p>
            <p>Nous travaillons de deux manières : avec un drone pour la prise de vue à grande échelle, et un appareil photo haute résolution pour les plus petits objets.
            </p>
            <p>Grâce à notre savoir-faire, nos logiciels performants et notre matériel dernier cri, nous vous garantissons un résultat de qualité et un tarif concurrentiel.
            </p>
            <p>
                Contactez-nous dès à présent pour étudier votre demande et obtenir notre meilleur tarif.
            </p>
            <div class="sous-boutton">
                <button><RouterLink to="/contact">contactez moi</RouterLink></button>
            </div>
           </div>
        </div>
        <div class="drone">
            <p>Nos réalisations sont faites à partir de ce drone :</p>
            
        </div>
        <div id="realisations">
            <h2><span>N</span>os réalisations</h2>
        </div>
    </section>
</template>

<script>
import Drones from "@/components/Drones.vue";

export default {
  components: {
    Drones
  }
};
</script>
<style>
.fond_photogrammetrie {
    background-image: url(../../public/images/3D.jpeg);
    background-size: cover;
    background-repeat: no-repeat;
    width: 100%;
    height: 600px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.sous_photogrammetrie {
    width: 570px;
    height: 100px;
    text-align: center;
}

.sous_photogrammetrie h1, .sous_photogrammetrie h2 {
    color: white;
}

.description_photogrammetrie {
    width: 100%;
    height: 650px;
    display: flex;
    justify-content: space-around;
}

.description_photogrammetrie .particuliers {
    width: 530px;
    height: 600px;
    margin-right: 10px;
}

.description_photogrammetrie .professionnels {
    width: 530px;
    height: 600px;
    margin-left: 10px;
}

.carre {
    widows: 100%;
    max-width: 530px;
    height: 530px;
}

.professionnels h2, .particuliers h2 {
    text-align: center;
    margin-top: 10px;
}
.professionnels span, .particuliers span {
    background-color: #FFD400;
    padding-left: 10px;
}
.photo-photogrammmetrie {
    margin-top: 20px;
}
.photo-photogrammmetrie img {
    width: 520px;
    height: 470px;
}

.photogrammetrie-texte {
    width: 100%;
    max-width: 500px;
}

.photogrammetrie-texte p {
    line-height: 20px;
    margin-top: 20px;
}

.photogrammetrie-texte .sous-boutton {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100px;
}

.sous-boutton button {
    background-color: #0099FF;
    border: none;
    text-transform: uppercase;
    font-size: 20px;
}

#realisations h2 {
    text-align: center;
}

#realisations h2 span {
    background-color: #0099FF;
    padding-left: 20px;
}

#realisations {
    height: 800px;
}


.drone {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100px;
}


</style>
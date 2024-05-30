<template>
    <section id="imagerieia">
        <div class="fond_imagerieia">
            <div class="sous_imagerieia">
                <h1>"L'IA pour la génération d'images est une fenêtre ouverte sur de nouvelles dimensions de créativité"</h1>
                <h2>ChatGPT</h2>
            </div>
        </div>
        <div class="description_imagerieia">
            <div class="illustration_example">
                <div class="pictures">
                    <img src="../../public/images/paysage.jpeg" alt="">
                </div>
                <div class="description_sous">
                    <p>Vous avez besoin d'illustration pour un roman graaphique ?</p>
                    <p>Vous souhaitez donner corps aux personnages de votre campagne de jeu de rôle ?</p>
                    <p>Votre catalogue nécessite des mises en scènes et vousn ne trouvez par satisfactions dans les banques d'images ?</p>
                    <p class="saut">L'intelligence artificielle permet désormais de contourner les limites de la création avec une vitesse inégalée et un coût économique</p>
                    <p class="saut">Faites l'essai !</p>
                    <div class="button">
                        <button><RouterLink to="/contact">contactez moi</RouterLink></button>
                    </div>
                </div>
            </div>
        </div>
        <div class="description_imagerieia">
            <div class="second_illustration">
                <div class="description_ia_second">
                    <p>L'intelligence artificielle ne sert pas qu'à générer des images à partir de rien. Vous pouvez tout à fait utiliser des images existantes et même des photos pour servir d'inspiration au logiciel</p>
                    <p>Vous voulez être transporté dans un monde de manga, changer un élément de votre photo sans passer des heures à la retoucher ?</p>
                    <p>Utilisons ensemble l'intelligence artificielle pour exprimer pleinement votre vision !</p>
                </div>
                <div class="pictures">
                    <img src="../../public/images/Max.jpg" alt="Maxime sans retouche ia">
                    <img src="../../public/images/max_ia.png" alt="maxime avec retouches ia">
                </div>
            </div>
        </div>
    </section>
</template>
<style>
.fond_imagerieia {
    background-image: url(../../public/images/paysage.jpeg);
    background-size: cover;
    background-repeat: no-repeat;
    width: 100%;
    height: 600px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.sous_imagerieia {
    width: 570px;
    height: 100px;
    text-align: center;
}

.sous_imagerieia h1, .sous_imagerieia h2 {
    color: white;
}

.description_imagerieia {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: space-around;
}


.carre {
    width: 100%;
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

.professionnels img, .particuliers img {
    width: 100%;
    max-width: 530px;
    height: auto;
}

.illustration_example {
    width: 100%;
    max-width: 1500px;
    height: 600px;
    display: flex;
    justify-content: center;
    align-items: center;

}

.illustration_example .pictures img {
    width: 760px;
    height: auto;
}

.illustration_example .pictures {
    width: 900px;
    height: 500px;
    margin-top: 30px;
}

.second_illustration .pictures img {
    width: 410px;
    height: auto;
    margin-left: 10px;
}
.second_illustration {
    width: 100%;
    max-width: 1500px;
    height: 700px;
    display: flex;
    justify-content: space-around;
}
.second_illustration .pictures {
    display: flex;
    justify-content: space-around;
    height: 600px;
    padding-bottom: 20px;
}
.illustration_example .description_sous {
    margin-left: 20px;
}

.illustration_example .description_sous .button {
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: center;
}

.description_sous .button button {
    background-color: #00CC00;
    border: none;
    text-transform: uppercase;
    font-size: 20px;
}

.saut {
    margin-top: 20px;
}

.description_ia_second {
    width: 100%;
    max-width: 700px;
}

.description_ia_second p {
    width: 100%;
    max-width: 500px;
}

</style>
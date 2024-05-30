<template>
    <section id="entreprise">
        <div class="fond_photographie">
            <div class="sous_photographie">
                <h1>"La photographie est une brève complicité entre la prévoyance et le hasard"</h1>
                <h2>John Stuart Mill</h2>
            </div>
        </div>
        <div class="description_entreprise">
            <div class="description-texte">
                <h2><span>Q</span>ui suis-je ?</h2>
                <p>Je suis Maxime Bally, un touche-à-tout passionné par l’image et les nouvelles technologies.
 Après une première période de ma vie partagée entre une aventure individuelle en agriculture et une carrière dans le commerce des produits de terroir, j’ai eu l’envie de faire bénéficier à d’autres de mon expérience et de mon approche esthétique.</p>
 
 <p>Ma plus grande force est ma curiosité et l’envie permanente d’avancer et de ne pas laisser la course du temps me laisser à la traîne.</p>
 
 <p>La technologie évolue, notre rapport à l’image aussi, et surtout ses usages.
 Que ce soit pour marquer un moment fort de votre vie,</p>
            </div>
            <div class="description-image">
                <img src="../../public/images/Max.jpg" alt="">
            </div>

        </div>
        <div class="second_description_enterprise">
            <div class="description_second_text">
                <h2><span>M</span>a méthode et mon matériel</h2>
                <p>Ma méthode de travail est centrée sur vous et vos besoins. Après un premier contact par mail pour me détailler vos besoins et vos attentes, je ovus propose une fourchette de prix. Nous l'adopterons au cours d'un entretien en face à face qui permettra d'affiner, d'envisager ce qui a pu être oublié, et d'optimiser la prestation pour m'adapter à vos contraintes et vous proposer le tarif le plus concurrentiel possible.</p>
                <p>Pour m'accompagner dans la création de votre univers visuel, je me suis doté du matéirle suivant :</p>
                Nikon D31000 + divers objectifs spécialisés dans le portrait, le paysage et la photo de rue. Un ordinateur haut de gamme pour le traitement des images et la génération par intelligence artificielle et un drone DJU Mavic 3
            </div>
        </div>
    </section>
</template>
<style>
.description_entreprise {
    width: 100%;
    height: 500px;
    display: flex;
    justify-content: center;
    align-items: end;
    margin-bottom: 20px;
}

.carre {
    widows: 100%;
    max-width: 530px;
    height: 360px;
}

.carre img{
    widows: 100%;
    max-width: 530px;
    height: auto;
}

.professionnels .carre img{
    widows: 100%;
    max-width: 500px;
    height: auto;
}

.professionnels h2, .particuliers h2 {
    text-align: center;
}

.description-image img{
    width: 300px;
    height: auto;
}

.description-texte {
    width: 400px;
}

.description-texte p {
    line-height: 20px;
    margin-top: 20px;
}
.second_description_enterprise {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 600px;
}

.description_second_text {
    width: 100%;
    max-width: 1150px;
    margin-bottom: 20px;

}

.description_second_text h2, .description_second_text p {
    margin-bottom: 20px;
}
</style>
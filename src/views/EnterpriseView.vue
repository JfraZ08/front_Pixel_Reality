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
                <h2>Qui suis-je ?</h2>
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
</style>
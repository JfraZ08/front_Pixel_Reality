<template>
    <section id="imagerieia">
        <div class="fond_imagerieia">
            <div class="sous_imagerieia">
                <h1>"L'IA pour la génération d'images est une fenêtre ouverte sur de nouvelles dimensions de créativité"</h1>
                <h2>ChatGPT</h2>
            </div>
        </div>
        <div class="description_imagerieia">
            <div class="particuliers">
                <div class="carre"></div>
                <h2><span>P</span>articuliers</h2>
            </div>
            <div class="professionnels">
                <div class="carre"></div>
                <h2><span>P</span>rofessionnels</h2>
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
    height: 800px;
    display: flex;
    justify-content: center;
    align-items: end;
}

.description_imagerieia .particuliers {
    width: 530px;
    height: 600px;
    margin-right: 10px;
}

.description_imagerieia .professionnels {
    width: 530px;
    height: 600px;
    margin-left: 10px;
}

.carre {
    background-color: blue;
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
</style>
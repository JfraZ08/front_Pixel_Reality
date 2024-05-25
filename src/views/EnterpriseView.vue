<template>
    <section id="entreprise">
        <div class="fond_photographie">
            <div class="sous_photographie">
                <h1>"La photographie est une brève complicité entre la prévoyance et le hasard"</h1>
                <h2>John Stuart Mill</h2>
            </div>
        </div>
        <div class="description_entreprise">
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
.description_entreprise {
    width: 100%;
    height: 800px;
    display: flex;
    justify-content: center;
    align-items: end;
}

.description_entreprise .particuliers {
    width: 530px;
    height: 600px;
    margin-right: 10px;
}

.description_entreprise .professionnels {
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
}
</style>
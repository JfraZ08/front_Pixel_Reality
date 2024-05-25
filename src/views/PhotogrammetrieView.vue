<template>
    <section id="photogrammetrie">
        <div class="fond_photogrammetrie">
            <div class="sous_imagerieia">
                <h1>La photogrammétrie est l'art de transporter les objets du monde réel au monde virtuel</h1>
            </div>
        </div>
        <div class="description_photogrammetrie">
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
    height: 800px;
    display: flex;
    justify-content: center;
    align-items: end;
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
<template>
    <section id="qrcode">
        <div class="fond_qrcode">
            <div class="sous_qrcode">
                <h1>Donnez une nouvelle dimensions à votre communication avec les QR Codes en réalité augmentée.</h1>
            </div>
        </div>
        <div class="description_qrcode">
            <div class="sous_qrcode">
                <h2>A quoi sert un QR Code en réalité augmentée ?</h2>
                <p>Avec la technologie des QR Codes, il est possible d'interagir avec vos prospects et clients pour les rediriger sur votre contenu. Mais saviez-vous qu'il est possible d'utiliserun QR Code pour afficher un objet,sur l'écran du téléphone qui le scanne ?</p>
                <p>Grâce à cete innovation, vous pouvez augmenter drastiquement l'interactivité de vos suports web et print sans difficulté.</p>
                <p>Par exemple, vous pouvez ajouter à votre carte de visite un QR Code qui affichera un modèle 3D de votre produit phare, ou encore faire appara^tre le conenu d'un carton sans qu'il soit nécessaire l'ouvrir</p>
                <p>Les possibilités n'ont de limite que veille de votre imagination </p>
                <p>N'attendez-plus et contactez-moi pour une démonstration </p>
                <div class="button">
                    <button><RouterLink to="/contact">contactez moi</RouterLink></button>
                </div>
            </div>
        </div>
    </section>
</template>
<style>
.fond_qrcode {
    background-image: url(../../public/images/qrcode.jpeg);
    background-size: cover;
    background-repeat: no-repeat;
    width: 100%;
    height: 600px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.sous_qrcode {
    width: 570px;
    height: 100px;
    text-align: center;
}

.sous_qrcode h1 {
    color: white;
}

.description_qrcode {
    width: 100%;
    height: 600px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.description_qrcode .sous_qrcode {
    width: 100%;
    max-width: 600px;
    height: 400px;
    text-align: justify;
}

.description_qrcode .sous_qrcode h2 {
    margin-bottom: 20px;
}

.description_qrcode .sous_qrcode p {
    margin-top: 20px;
}

.description_qrcode .sous_qrcode .button {
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.sous_qrcode .button button {
    background-color: #CC0000;
    border: none;
    text-transform: uppercase;
    font-size: 20px;
}
</style>
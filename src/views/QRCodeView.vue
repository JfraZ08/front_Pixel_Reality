<template>
    <section id="qrcode">
        <div class="fond_qrcode">
            <div class="sous_qrcode">
                <h1>Donnez une nouvelle dimensions à votre communication avec les QR Codes en réalité augmentée.</h1>
            </div>
        </div>
        <div class="description_qrcode">
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
    height: 800px;
    display: flex;
    justify-content: center;
    align-items: end;
}

.description_qrcode .particuliers {
    width: 530px;
    height: 600px;
    margin-right: 10px;
}

.description_qrcode .professionnels {
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
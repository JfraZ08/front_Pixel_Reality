<template>
    <section id="photographie_page">
        <div class="fond_photographie">
            <div class="sous_photographie">
                <h1>"La photographie est une brève complicité entre la prévoyance et le hasard"</h1>
                <h2>John Stuart Mill</h2>
            </div>
        </div>
        <section class="service_sous">
            <div>
                <div class="particuliers_photo">
                    <div class="picture_nopro">
                        <img src="" alt="">
                    </div>
                    <div class="contexte">
                        <h3><span>P</span>articuliers</h3>
                        <p>Vous avez un projet de mariage, de baptême ou tout autre évènement dont vous voudriez garder un souvenir inoubliable ?
                            Je vous propose une prestation complète depuis les préparatifs jusqu’aux moments forts de votre journée pour vous offrir un shooting sur-mesure.</p>
                        <p>Contactez-nous pour que vous nous détailliez vos besoins et que je vous présente ma méthode de travail, et pour établir 
                            ensemble une organisation qui vous permettra de vous concentrer sur l’essentiel le jour J : VOUS.</p>
                            <div class="_button">
                                <button>Me contacter</button>
                            </div>
                    </div>
                </div>
                <div class="pro_photographie">
                    <div class="picture_pro">
                        <img src="" alt="">
                    </div>
                    <div class="contexte">
                        <h3><span>P</span>rofessionnels</h3>
                        <p>Vous venez de créer votre entreprise et vous souhaitez disposer de belles photos pour créer votre site internet, vos supports de communication ou vos publications sur les réseaux sociaux ?</p>
                        <p>Vous avez envie d’un photo-reportage sur votre métier pour mettre en valeur votre savoir-faire ?</p>
                        <p>Je peux vous aider à montrer le meilleur de votre activité au travers de photos soignées et de qualité.</p>
                        <div class="_button">
                                <button>Me contacter</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section id="portfolio">
            <h2><span>P</span>ortfolio</h2>
        </section>
    </section>
</template>


<style>
#photographie_page {
    width: 100%;
    height: auto;
}
.fond_photographie {
    background-image: url(../../public/images/photo.jpeg);
    background-size: cover;
    background-repeat: no-repeat;
    width: 100%;
    height: 600px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.sous_photographie {
    width: 570px;
    height: 100px;
    text-align: center;
}
.sous_photographie h1 {
    color: white;
}

.sous_photographie h2 {
    color: white;
}
.sous_photographie p {
    color: white;
}

.service_sous {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
} 

.particuliers_photo, .pro_photographie {
    width: 100%;
    max-width: 1100px;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    margin-bottom: 20px;
    margin-top: 20px;
}

.picture_nopro, .picture_pro {
    width: 300px;
    height: 300px;
    background: blue;
    margin-right: 20px;
}

.contexte {
    width: 100%;
    max-width: 650px;
}

.contexte h3 {
    text-align: center;
    padding-bottom: 10px;
    font-size: 27px;
}
._button {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100px;
}

.contexte button {
    background-color: #FFD400;
    border: none;
    width: 180px;
    height: 30px;
    text-transform: uppercase;
    font-size: 18px;
}

.contexte span {
    background-color: #FFD400;
    padding-left: 10px;
}

#portfolio span{
    background-color: #FFD400;
    padding-left: 10px;
}
#portfolio h2 {
    text-align: center;
}
#portfolio {
    height: 600px;
}
</style>
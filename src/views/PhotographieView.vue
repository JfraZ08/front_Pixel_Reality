<template>
    <section id="photographie_page">
        <div class="fond_photographie">
            <div class="sous_photographie">
                <h1>"La photographie est une brève complicité entre la prévoyance et le hasard"</h1>
                <h2>John Stuart Mill</h2>
            </div>
        </div>
        <section class="service_sous">
            <div class="description_photographie">
                <p></p>
                <div class="particuliers_photo">
                    <div class="picture_nopro">
                        <img src="../../public/images/605.jpg" alt="particuliers">
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
                        <img src="../../public/images/2148813340.jpg" alt="professionnels">
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
            <ArticleList/>
        </section>
    </section>
</template>
<script>
import ArticleList from './ArticlesList.vue';  // Ensure the path is correct
import '@/assets/styles/photographie.css'
export default {
  components: {
    ArticleList
  }
}
</script>

<style>

</style>
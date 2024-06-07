<template>
  <div id="app">
    <header>
      <nav>
        <div class="menu-toggle" @click="toggleMenu">
          Menu
        </div>
        <ul :class="{'nav-links': true, 'open': isMenuOpen}">
          <!-- <li class="imgheader">
            <RouterLink to="/"><img src="../../public/images/Logo_PR.png" alt="Logo"></RouterLink>
          </li> -->
          <li class="homeheader"><RouterLink to="/">Accueil</RouterLink></li>
          <li class="enterpriseheader"><RouterLink to="/entreprise">L'entreprise</RouterLink></li>
          <li class="photographieheader"><RouterLink to="/photographie">Photographie</RouterLink></li>
          <li class="imagerieiaheader"><RouterLink to="/imagerieia">Imagerie IA</RouterLink></li>
          <li class="photogrammetrieheader"><RouterLink to="/photogrammetrie">Photogrammétrie</RouterLink></li>
          <li class="qrcodeheader"><RouterLink to="/qrcode">QR Codes</RouterLink></li>
          <li class="contactheader"><RouterLink to="/contact">Contact</RouterLink></li>
        </ul>
      </nav>
    </header>
    <RouterView />
    <footer>
      <p>Mentions Légales</p>
      <!-- <p><RouterLink to="/drone">Drone</RouterLink></p> -->
    </footer>
  </div>
</template>

<script>
import { ref } from 'vue';
import { RouterLink, RouterView } from 'vue-router';

export default {
  components: {
    RouterLink,
    RouterView
  },
  setup() {
    const isMenuOpen = ref(false);

    const toggleMenu = () => {
      isMenuOpen.value = !isMenuOpen.value;
    };

    return {
      isMenuOpen,
      toggleMenu
    };
  }
};
</script>

<style>

@font-face {
  font-family: 'Century Gothic';
  src: url('../src/assets/fonts/centurygothic.ttf'),
       url('../src/assets/fonts/centurygothic_bold.ttf');
}
body {
  font-family: 'Century Gothic', sans-serif;
}

h1, h2, h3 {
  font-family: 'Century Gothic', sans-serif;
  font-weight: bold;
}
header {
    display: flex;
    justify-content: center;
    margin: 0;
    width: 100%;
    height: auto;
}

nav {
    width: 100%;
    max-width: 1000px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
}

.menu-toggle {
    display: none;
    cursor: pointer;
    font-size: 18px;
    font-weight: bold;
}

.nav-links {
    display: flex;
    justify-content: space-around;
    margin: 0;
    padding: 0;
    width: 100%;
}

li {
    list-style-type: none;
    width: 145px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    font-weight: bold;
}

header a {
    text-decoration: none;
    color: black;
}

.imgheader img {
    width: 80px;
    height: 100px;
}

.enterpriseheader a {
    color: white;
}

.enterpriseheader {
    background-color: black;
}

.photographieheader {
    background-color: #FFD400;
}

.imagerieiaheader {
    background-color: #00CC00;
}

.photogrammetrieheader {
    background-color: #0099FF;
}

.qrcodeheader {
    background-color: #CC0000;
}

footer {
  background-color: black;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
}

footer p {
  color: white;
}

/* Responsive Styles */
@media (max-width: 768px) {
    .menu-toggle {
        display: block;
    }

    .nav-links {
        position: absolute;
        top: 100%;
        left: 0;
        width: 100%;
        flex-direction: column;
        background-color: white;
        display: none;
    }

    .nav-links.open {
        display: flex;
    }

    li {
        width: 100%;
        height: auto;
    }
}
</style>

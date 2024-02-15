<script setup>
import { RouterLink } from "vue-router";
import { onMounted, onUnmounted } from "vue";

// Fonction pour remonter en haut de la page
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth", // Scroll fluide vers le haut
  });
};

// Effet de déplacement de la photo en scroll
onMounted(() => {
  const header = document.querySelector("header");
  const photo = document.querySelector(".return-top-photo");

  const handleScroll = () => {
    const scrollPos = window.scrollY;
    const headerHeight = header.offsetHeight;

    // Déplacer la photo en fonction du scroll
    photo.style.transform = `translateY(${scrollPos}px)`;

    // Afficher ou masquer la photo en fonction de sa position dans le header
    if (scrollPos > headerHeight) {
      photo.style.opacity = "1";
    } else {
      photo.style.opacity = "0";
    }
  };

  window.addEventListener("scroll", handleScroll);

  // Nettoyer l'écouteur d'événements lors de la destruction du composant
  onUnmounted(() => {
    window.removeEventListener("scroll", handleScroll);
  });
});
</script>




<template>
  <header>
    <img @click="scrollToTop" src="../assets/images/ArrowToTop.png" alt="Image Retour en Haut" class="return-top-photo" />

    <nav>
      <div class="container">
        <ul>
          <li><RouterLink to="/">Accueil</RouterLink></li>
          <li><RouterLink :to="{ name: 'Error404' }">Projets</RouterLink></li>
          <li><RouterLink :to="{ name: 'Error404' }">Contact</RouterLink></li>
        </ul>
      </div>
    </nav>
  </header>
  <div class="logo-container">
    <img src="../assets/images/Mon_Logo.bmp" alt="Mon logo" class="logo" />
  </div>
</template>




<style scoped>
/* Style pour la photo de retour en haut */
.return-top-photo {
  position: absolute;
  left: 20px;
  top: 20px;
  width: 70px;
  height: 70px;
  border-radius: 25%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
  cursor: pointer;
  opacity: 0; 
}

/* Styles pour le conteneur du logo */
.logo-container {
  display: flex;
  align-items:flex-start;
  justify-content:center;
  margin-top: 30px; 
}

/* Styles pour le logo */
.logo {
  width: 150px; 
  height: auto; 
}

header nav ul li:hover a {
  text-decoration: underline; 
  font-weight: bold; 
  
}

header {
  position: relative;
  background: rgba(0, 0, 0, 0);
  color: black;
  padding-top: 4rem;
  padding-bottom: 4rem;
  margin: 1rem 1rem 0;
  border-radius: 0.5rem;
  text-align: center;
  font-family:'Barlow', sans-serif;
}

header nav ul {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0;
  max-width: 80%;
  margin: 0 auto;
  list-style: none;
}
header nav ul li {
  flex: 1;
  text-align: center;
  font-weight: bold;
  transition: transform 0.5s ease-in-out, color 0.5s ease-in-out;
}
header nav ul li:hover {
  transform: scale(1.1);
  color: rgba(255, 255, 255, 0.8);
}
header nav ul li a {
  color: black;
  text-decoration: none;
  border-radius: 0.25rem;
  font-size: 1rem;
}
header nav ul li:not(:last-child) {
  margin-right: 1rem;
}
</style>
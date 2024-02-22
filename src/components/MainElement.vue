<template>
  <div id="MyProjects">
    <h2>Mes projets</h2>
    <div class="projects-container">
      <!-- Utilisation de v-for pour afficher les projets -->
      <Project v-for="(project, index) in projects" :key="index" :project="project" class="project" />
    </div>
  </div>
</template>




<script setup>
import Project from "../components/Project.vue";

const projects = [
  {
    title: "Projet de CV en HTML5 et CSS3",
    description: "Mon premier projet était un CV, après avoir aquis les bases du HTML et du CSS, le projet était principalement pour montrer l'acquisition de ses compétences, soit le fonctionnement d'un projet en HTML5 ainsi que CSS3 pour la mise en forme",
    img: "/src/assets/images/CV_Full.png",
    technologies: "HTML et CSS",
    githubLink: "https://github.com/Necron10000/Devoir-CV",
    createdAt: "23 Octobre 2023",
    additionalPhotos: [
      "/src/assets/images/Cv_Header.png",
      "/src/assets/images/Cv_ActionLogoFooter.png",
      "/src/assets/images/Cv_LogoFooter.png"
    ],
  },
  {
    title: "Projet création d'un cahier des charges",
    description: "Mon second projet étais la création d'un cahier des charges, la consigne était la suivante création d'un fichier PDF avec une analyse concurrentielle, estimation des coûts et création de maquette.",
    img: "/src/assets/images/Cahier_Des_Charges_1.png",
    technologies: "gloomaps, figma",
    githubLink:"https://github.com/Necron10000/CahierDesCharge",
    createdAt: "10 Novembre 2023",
    additionalPhotos: [
      "/src/assets/images/Cahier_Des_Charges_2.png",
      "/src/assets/images/Cahier_Des_Charges_3.png"
    ],
  },
  {
    title: "Projet espace commentaire dynamique en HTML, CSS et JavaScript",
    description: "Mon troisieme projet avait pour but de dynamiser un espace commentaire à l'aide de JavaScript, la consigne était de pouvoir afficher un commentaire qui s'ajouterai de manière immediate, donc dynamiquement, il s'agissait de ma première utilisation du JavaScript.",
    img: "/src/assets/images/Dynamique_1.png",
    technologies: "HTML , CSS et JavaScript",
    githubLink: "https://github.com/Necron10000/DynamiserUnEspaceDeCommentaires_DocumentsDevoir",
    createdAt: "18 Janvier 2024",
    additionalPhotos: [
      "/src/assets/images/Dynamique_2.png",
      "/src/assets/images/Dynamique_3.png",
      "/src/assets/images/Dynamique_4.png"
    ],
  },
  // Futur projet !  
  {
    title: "Futur projet...",
    description: "Description du nouveau projet avenir ...",
    img: "/src/assets/images/Projet.jpg",
    technologies: "Technologie futur !",
    createdAt: "Prochainement !",
  },
];
</script>




<style scoped>

/* Style pour le container des projets */
#MyProjects h2 {
  font-size: xx-large;
  text-align: center; 
  margin-top: 400px; 
  margin-bottom: 60px; 
  font-family:'Barlow', sans-serif;
}

.projects-container {
  display: flex;
  flex-wrap:wrap; 
  gap: 30px; 
  max-width: 800px; 
  margin: 0 auto; 
  margin-bottom: 200px;
  align-items: center;
  justify-content: center;
  font-family:'Barlow', sans-serif;
}


/* Style pour chaque projet individuel */
.project {
  max-width: 100%;
  max-height: 200px; 
  width: 50px;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  justify-content: center;
}
</style>
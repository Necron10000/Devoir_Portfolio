<template>
    <div class="project">
        <h3>{{ project.title }}</h3>
        <p>{{ project.description }}</p>
        <button type="button" @click="openModal"><img :src="project.img" class="project-image" alt="Image du projet" /></button>
        <!-- Ajoute ici d'autres détails du projet si nécessaire -->
    </div>

    <Modal :isOpen="isOpen" @close="closeModal">
        <h2>{{ project.title }}</h2>
        <p>Technologies utilisées: {{ project.technologies }}</p>
        <p>Lien vers le repository : <a :href="project.githubLink" target="_blank">Voir le code ! </a></p>
        <p>Date de création: {{ project.createdAt }}</p>
        <div v-if="project.additionalPhotos && project.additionalPhotos.length > 0">
            <p>Photos supplémentaires :</p>
            <div v-for="(photo, index) in project.additionalPhotos" :key="index">
                <img :src="photo" class="additional-photo" alt="Photo du projet"/>
            </div>
        </div>
    </Modal>
</template>




<script setup>
import { ref } from "vue";
import Modal from "./Modal.vue";
defineProps(["project"]);
const isOpen = ref(false);

const openModal = () => {
    isOpen.value = true;
};

const closeModal = () => {
    isOpen.value = false;
};
</script>




<style scoped>
.project img {
    
    max-width: 100%;
}

.project-image {
  max-width: 100%;       /* La largeur maximale de l'image est égale à la largeur de son conteneur */
  height: auto;          /* Ajuste automatiquement la hauteur de l'image pour conserver les proportions */
  display: block;        /* Assurez-vous que l'image est affichée en tant que bloc pour appliquer les styles */
  margin: 0 auto;        /* Centrez l'image horizontalement */
}
.additional-photo {
    max-width: 100%;     /* La largeur maximale de l'image est égale à la largeur de son conteneur */
    max-height: 100%;    /* La hauteur maximale de l'image est égale à la largeur de son conteneur */
    height: auto;        /* Ajuste automatiquement la hauteur de l'image pour conserver les proportions */
    display: block;      /* Assurez-vous que l'image est affichée en tant que bloc pour appliquer les styles */
    margin-top: 10px;    /* Ajoute un espace entre chaque image supplémentaire */
}

.project:hover {
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.4);
    cursor: pointer;
}

.project {
    transition: box-shadow 0.3s ease;
}


</style>
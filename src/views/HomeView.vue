<script setup>
import MainElement from '../components/MainElement.vue'
import MyContact from '../components/MyContact.vue'
import { ref } from 'vue';

const showModal = ref(false);

const toggleModal = (value) => {
    showModal.value = value;
};
</script>




<template>
    <main>
        <div id="WelcomeItem">
        <h1>Bienvenue sur mon Portfolio !</h1>
        <p>
        Bonjour à tous ! Je m'appelle Barriere Michel et je suis apprenti développeur web en formation. Passionné par le monde du développement, je suis constamment en quête de
        nouvelles connaissances et de défis excitants dans ce domaine en évolution permanente!
        </p>
    </div>

    <router-link to="#section1" class="nav-link" >Aller à la section Projets</router-link>
    <router-link to="#section2" class="nav-link">Aller à la section Me Contacter !</router-link>

    <div id="section1" class="main-element-container">
        <MainElement :showModal="showModal" :toggleModal="toggleModal" />
        </div>
        <div id="section2">
        <MyContact /> 
    </div>
    </main>
</template>




<style scoped>
#WelcomeItem {
    position: absolute; 
    top: 350px; 
    left: 20px;
    right: 20px;
    text-align: center;
    font-size: medium;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: black;
    padding: 20px;
    box-sizing: border-box;
    z-index: 1; 
    max-width: 700px;
    margin-left: auto;
    margin-right: auto;
    font-family:'Barlow', sans-serif;
}

.nav-link {
    display: block;
    box-sizing: border-box;
    width:200px;
    padding: 10px 20px;
    margin: 10px;
    text-decoration: none;
    color: #ffffff;
    background-color: #3498db;
    border: 2px solid #2980b9;
    border-radius: 10px;
    font-family: 'Barlow', sans-serif;
    font-size: 10px;
    transition: background-color 0.5s ease;
    text-align: center;
}

.nav-link:hover {
    background-color: #2980b9;
    border-color: rgb(255, 255, 0);
}

#WelcomeItem h1,
#WelcomeItem p {
    display: block;
    margin-bottom: 10px;
}

/* Ajoutez un style pour la classe main-element-container */
.main-element-container {
    margin-top: 300px; 
}


#MyProjects {
    font-size: small; 
    margin: 20px 50px; 
}
</style>
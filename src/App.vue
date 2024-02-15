<script setup>
import { RouterLink, RouterView } from "vue-router";
import Header from "./components/Header.vue";
import MainElement from "./components/MainElement.vue";
import Footer from "./components/Footer.vue";
</script>




<template>
  <Header />
  <RouterView>
    <!-- Utilisation de slot pour MainElement -->
    <template v-slot:main-element>
      <MainElement />
    </template>
  </RouterView>
  <Footer />
</template>
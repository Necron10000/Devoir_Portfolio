<template>
  <footer>
    <a href="https://github.com/Necron10000" target="_blank"><img src="../assets/images/github.png" alt="logo-github" /></a>
    <a href="https://www.linkedin.com/in/michel-barriere-abaa322a3/" target="_blank"><img src="../assets/images/linkedin.png" alt="linkedin" /></a>
    <a href="https://twitter.com/BarriereMi66111" target="_blank"><img src="../assets/images/twitter.png" alt="twitter" /></a>
    <p>&copy; 2024 - Mon Portfolio</p>
    <p>Dernière mise à jour : <time datetime="2024-02-22"> 22 Février 2024</time></p>
  </footer>
</template>




<style scoped>
footer {
  background: rgba(0, 0, 0, 0);
  color: black;
  padding-top: 2rem;
  padding-bottom: 2rem;
  margin: 0 1rem 1rem;
  border-radius: 0.5rem;
  text-align: center;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  font-size: 1rem;
  font-family:'Barlow', sans-serif;
}

footer a {
  margin: 0 10px;
  display: inline-block;
  border: 2px solid transparent;
  border-radius: 35%;
  overflow: hidden;
  transition: transform 0.3s ease-in-out, border-color 0.3s ease-in-out;
}

footer a img {
  width: 36px;
}

footer a:hover {
  transform: scale(1.2);
  border-color: rgb(255, 255, 0);
}

footer p {
  color: white;
}
</style>
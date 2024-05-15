<script setup>
import ButtonComponent from '@/components/ButtonComponent.vue'
import { useRouter } from 'vue-router'

const router = useRouter()
</script>

<template>
  <main class="container grid">
    <video autoplay muted loop playsinline poster="../assets/images/recipe-app-print.webp">
      <source src="../assets/videos/recipe-desktop.webm" type="video/webm" />
    </video>
    <div class="features flex">
      <i class="bx bxl-vuejs"></i>
      <i class="bx bxl-html5"></i>
      <i class="bx bxl-css3"></i>
      <i class="bx bxl-javascript"></i>
      <i class="bx bxl-github"></i>
    </div>
    <article class="grid">
      <div class="introduction">
        <h3>Apresentação</h3>
        <p>
          O "The Recipe App" é um buscador de receitas que utiliza uma
          <a href="https://www.themealdb.com/api.php" target="_blank">API pública</a> como fonte de
          dados. Desenvolvi este projeto para colocar em prática meus aprendizados em Vue.js e
          consumo de API. O foco principal foi na funcionalidade, e o design foi montado manualmente
          para encaixar cada elemento no seu lugar. O aplicativo permite buscar receitas pelo nome,
          visualizar receitas aleatórias e pesquisar por categoria. O projeto é totalmente
          responsivo.
        </p>
        <a href="https://the-recipe-app.vercel.app/" target="_blank"
          ><ButtonComponent>Visitar Site</ButtonComponent></a
        >
      </div>
      <div class="myParticipation">
        <h3>Meu trabalho no projeto</h3>
        <p>
          Fui responsável por todo o desenvolvimento front-end e pela integração com a API
          TheMealDB.
        </p>
      </div>
      <div class="myLearning">
        <h3>O que aprendi</h3>
        <p>
          Durante este projeto, pude experimentar a facilidade de utilizar o Vue.js. Aprendi a
          consumir APIs e a criar rotas dinâmicas para oferecer uma experiência interativa aos
          usuários.
        </p>
        <ButtonComponent class="goBackButton" @click="router.back()"
          >Outros Projetos</ButtonComponent
        >
      </div>
    </article>
  </main>
</template>

<style scoped>
main {
  padding-top: 5rem;
}

.grid {
  grid-template-rows: repeat(auto-fit);
  row-gap: 2rem;
}

video {
  margin-top: 2rem;
}

.features {
  justify-content: space-evenly;
  align-items: center;
  margin-block: 1rem;
}

i {
  font-size: var(--step-3);
  color: hsl(var(--clr-secundary));
}

article h3 {
  margin-bottom: 0.8em;
}

button {
  margin-top: 3rem;
  font-size: var(--step-2);
}

.goBackButton {
  margin-bottom: 5rem;
}
</style>

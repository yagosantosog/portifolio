<script setup>
import ButtonComponent from '@/components/ButtonComponent.vue'
import { useRouter } from 'vue-router'

const router = useRouter()
</script>

<template>
  <main class="container grid">
    <video autoplay muted loop playsinline poster="../assets/images/golden-seren-midia-print.webp">
      <source src="../assets/videos/golden-desktop.webm" type="video/webm" />
      />
    </video>
    <div class="features flex">
      <i class="bx bxl-react"></i>
      <i class="bx bxl-html5"></i>
      <i class="bx bxl-css3"></i>
      <i class="bx bxl-javascript"></i>
      <i class="bx bxl-github"></i>
    </div>
    <article class="grid">
      <div class="introduction">
        <h3>Apresentação</h3>
        <p>
          A Golden Seren Mídia é uma agência de marketing digital que buscava uma nova landing page
          para destacar seu trabalho. Este projeto foi desenvolvido com total responsividade e teve
          como inspiração um site já existente.
        </p>
        <a href="https://goldenserenmidia.com/" target="_blank"
          ><ButtonComponent>Visitar Site</ButtonComponent></a
        >
      </div>
      <div class="myParticipation">
        <h3>Meu trabalho no projeto</h3>
        <p>Desenvolvi todas as partes desta landing page.</p>
      </div>
      <div class="myLearning">
        <h3>O que aprendi</h3>
        <p>
          Durante este projeto, adquiri conhecimento sobre como implementar um acordeão de perguntas
          e respostas.
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

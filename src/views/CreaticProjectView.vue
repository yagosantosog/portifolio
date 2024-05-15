<script setup>
import ButtonComponent from '@/components/ButtonComponent.vue'
import { useRouter } from 'vue-router'

const router = useRouter()
</script>

<template>
  <main class="container grid">
    <video autoplay muted loop playsinline poster="../assets/images/creatic-print.webp">
      <source class="lazy" src="../assets/videos/creatic-desktop.webm" type="video/webm" />
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
          A Creatic Creative Agency é uma agência digital fictícia. Este projeto foi desenvolvido
          com base em um
          <a
            href="https://www.figma.com/design/2zTkNRJWT0dpNqIHNxBtfd/Free-Creative-Agency-Landing-Page-Design-(Community)?node-id=3-6&t=89jIWeHMhqnHPDi3-0"
            target="_blank"
            >design</a
          >
          gratuito que encontrei no Figma. Meu objetivo principal foi aplicar meus conhecimentos em
          React e reproduzir fielmente o design original, garantindo também que o projeto seja
          totalmente responsivo.
        </p>
        <a href="https://creatic-agency.vercel.app/" target="_blank"
          ><ButtonComponent>Visitar Site</ButtonComponent></a
        >
      </div>
      <div class="myParticipation">
        <h3>Meu trabalho no projeto</h3>
        <p>
          Eu desenvolvi todo o projeto do zero, focando no front-end. Utilizei React JS, CSS e
          integrei duas APIs: Swiper JS e Email JS.
        </p>
      </div>
      <div class="myLearning">
        <h3>O que aprendi</h3>
        <p>
          Este foi meu primeiro projeto com React e também com frameworks em geral. Aprendi como os
          componentes reutilizáveis são úteis para evitar a repetição de código com a mesma
          estrutura, simplificando a vida do programador. Além disso, adquiri conhecimentos sobre o
          Open Graph Protocol, técnicas para melhorar o desempenho do site com extensões adequadas
          para mídias e utilizei o react-router-dom, entre outras habilidades.
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
  color: hsl(var(--clr-light-green));
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

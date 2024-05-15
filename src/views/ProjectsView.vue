<script setup>
import { register } from 'swiper/element/bundle'
register()

import ProjectShow from '@/components/ProjectShow.vue'
import creaticPrint from '@/assets/images/creatic-print.webp'
import recipeAppPrint from '@/assets/images/recipe-app-print.webp'
import lemesAdvocaciaPrint from '@/assets/images/lemes-advocacia-print.webp'
import goldenSerenMidiaPrint from '@/assets/images/golden-seren-midia-print.webp'
</script>

<template>
  <swiper-container
    slides-per-view="auto"
    pagination-clickable="true"
    direction="vertical"
    mousewheel-enabled="true"
    keyboard-enabled="true"
  >
    <swiper-slide id="one" lazy="true"
      ><ProjectShow
        :image="creaticPrint"
        img-placeholder="hvcFC4JkDbaUWCmIr2v8u9Y"
        number="01"
        title="Creatic Creative Agency"
        description="Este foi meu primeiro projeto utilizando React.js. Trata-se de uma landing page para uma agência digital fictícia."
        context="Estudo"
        year="2024"
        class="creatic"
        button-path="creatic-agency"
    /></swiper-slide>
    <swiper-slide id="two" lazy="true">
      <ProjectShow
        :image="recipeAppPrint"
        img-placeholder="LQgSC4CGmImAdyd4X2SjyQo"
        number="02"
        title="The Recipe APP"
        description="Trata-se de um projeto de busca por receitas com a possibilidade de aprender através de vídeos."
        context="Estudo"
        year="2024"
        class="recipe-app"
        button-path="recipe-app"
      />
    </swiper-slide>
    <swiper-slide id="three" lazy="true"
      ><ProjectShow
        :image="goldenSerenMidiaPrint"
        img-placeholder="x/YBC4BeAoVUpzuFbTC6B6Q"
        number="03"
        title="Golden Seren Midia"
        description="Uma Landing page para uma agência de marketing digital."
        context="Freelance"
        year="2024"
        class="golden-seren-midia"
        button-path="golden-seren-midia"
    /></swiper-slide>
    <swiper-slide id="four" lazy="true"
      ><ProjectShow
        :image="lemesAdvocaciaPrint"
        img-placeholder="UhgSA4J4iIh9ePeIxq95+5g"
        number="04"
        title="Lemes Advocacia"
        description="Esse projeto é uma landing page para um escritório de advocacia."
        context="Freelance"
        year="2024"
        class="lemes-advocacia"
        button-path="lemes-advocacia"
    /></swiper-slide>
  </swiper-container>
</template>

<style scoped>
swiper-container {
  --swiper-pagination-color: hsl(var(--clr-secundary));
  --swiper-pagination-right: auto;
  --swiper-pagination-left: 0.5rem;
  --swiper-pagination-bottom: auto;
  --swiper-pagination-top: auto;
  --swiper-pagination-fraction-color: inherit;
  --swiper-pagination-progressbar-bg-color: rgba(0, 0, 0, 0.25);
  --swiper-pagination-progressbar-size: 4px;
  --swiper-pagination-bullet-size: 0.5rem;
  --swiper-pagination-bullet-width: 0.5rem;
  --swiper-pagination-bullet-height: 0.5rem;
  --swiper-pagination-bullet-inactive-color: hsl(var(--clr-secundary));
  --swiper-pagination-bullet-inactive-opacity: 0.25;
  --swiper-pagination-bullet-opacity: 1;
  --swiper-pagination-bullet-horizontal-gap: 0;
  --swiper-pagination-bullet-vertical-gap: 0.7rem;

  height: 100dvh;
}

.dynamic-colors {
  --swiper-pagination-bullet-inactive-color: hsl(var(--clr-main));
  --swiper-pagination-color: hsl(var(--clr-main));
}

swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  width: 100%;
  box-shadow: 0 0 0.5rem hsl(var(--clr-pure-black) / 0.2);
}

#one,
#three {
  background-color: hsl(var(--clr-main));
}

#two,
#four {
  background-color: hsl(var(--clr-pure-white));
}

@media (min-width: 60rem) {
  swiper-container {
    --swiper-pagination-bullet-size: 1rem;
    --swiper-pagination-bullet-width: 1rem;
    --swiper-pagination-bullet-height: 1rem;
  }
}
</style>

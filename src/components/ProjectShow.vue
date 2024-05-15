<script setup>
import ButtonComponent from './ButtonComponent.vue'

defineProps({
  image: String,
  imgPlaceholder: String,
  number: String,
  title: String,
  description: String,
  context: String,
  year: String,
  buttonPath: String
})
</script>

<template>
  <div class="flex">
    <div class="project-thumb">
      <UnLazyImage class="img" :thumbhash="imgPlaceholder" :src="image" auto-sizes />
    </div>
    <div class="project-info">
      <div class="project-info__headline">
        <span>{{ number }}.</span>
        <h2>{{ title }}</h2>
        <p>{{ description }}</p>
      </div>
      <div class="project-info__context">
        <div class="project-info__context-context">
          <h3>Contexto</h3>
          <p>{{ context }}</p>
        </div>
        <div class="project-info__context-context">
          <h3>Ano</h3>
          <p>{{ year }}</p>
        </div>
      </div>
      <RouterLink :to="{ name: buttonPath }"
        ><ButtonComponent>Ver Mais</ButtonComponent></RouterLink
      >
    </div>
  </div>
</template>

<style scoped>
.flex {
  flex-direction: column;
  align-items: center;
  gap: 2rem;
}

.project-thumb {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.project-thumb img {
  width: 30rem;
  max-width: 100%;
  box-shadow: -0.2rem 0.2rem 0.5rem hsl(var(--clr-pure-black) / 0.5);
}

span {
  font-size: var(--step-5);
}

.project-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.project-info__context {
  display: flex;
  gap: 5rem;
}

p {
  max-width: 50ch;
}

.creatic span {
  color: hsl(var(--clr-light-gray));
}

.creatic h2,
.creatic h3 {
  color: hsl(var(--clr-secundary));
}

.creatic p {
  color: hsl(var(--clr-pure-white));
}

.recipe-app span {
  color: hsl(var(--clr-pure-black) / 0.5);
}

.recipe-app h2,
.recipe-app h3 {
  color: hsl(var(--clr-secundary));
}

.recipe-app p {
  color: hsl(var(--clr-pure-black));
}

.lemes-advocacia span {
  color: hsl(var(--clr-pure-black) / 0.5);
}

.lemes-advocacia h2,
.lemes-advocacia h3 {
  color: hsl(var(--clr-secundary));
}

.lemes-advocacia p {
  color: hsl(var(--clr-pure-black));
}

.golden-seren-midia span {
  color: hsl(var(--clr-light-gray));
}

.golden-seren-midia h2,
.golden-seren-midia h3 {
  color: hsl(var(--clr-secundary));
}

.golden-seren-midia p {
  color: hsl(var(--clr-pure-white));
}

@media (min-width: 60rem) {
  .flex {
    flex-direction: row;
    padding-top: 5rem;
  }

  .project-thumb {
    justify-content: flex-start;
  }
}
</style>

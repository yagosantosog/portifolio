<script setup>
import profileImage from '@/assets/images/profile-image.webp'
</script>

<template>
  <main class="flex container">
    <div class="about-me">
      <h2>Sobre mim.</h2>
      <p>
        Sou um desenvolvedor web front-end freelancer com uma paixão pela criação de interfaces e
        desenvolvimento de aplicações interativas. Cursei técnico em informática no Instituto
        Federal de Carmo de Minas, onde meu interesse pela programação foi aprimorado e consolidado.
      </p>
      <p>
        Estou buscando uma posição em tempo integral como desenvolvedor front-end, ansioso para me
        integrar a uma equipe e transformar ideias em projetos reais.
      </p>
      <p>Atualmente, tenho experiência com React.js, Vue.js, HTML, CSS e JS.</p>
    </div>
    <div class="profile">
      <div class="profile-image">
        <UnLazyImage
          class="img"
          thumbhash="3vcVFQLIh393VmdneHmHdwl1hWBY"
          :src="profileImage"
          auto-sizes
        />
      </div>
      <div class="flex social-links">
        <a href="https://github.com/yagosantosog" target="_blank"><i class="bx bxl-github"></i></a>
        <a href="https://www.linkedin.com/in/yago-santos-de-oliveira-b79a01266/" target="_blank"
          ><i class="bx bxl-linkedin-square"></i
        ></a>
        <a
          href="https://api.whatsapp.com/send?phone=5535984768855&text=Ol%C3%A1,%20vim%20pelo%20seu%20portif%C3%B3lio."
          target="_blank"
          ><i class="bx bxl-whatsapp"></i
        ></a>
        <a href="https://www.instagram.com/yagosantosog/" target="_blank"
          ><i class="bx bxl-instagram"></i
        ></a>
      </div>
    </div>
  </main>
</template>

<style scoped>
main {
  padding-top: 5rem;
  flex-direction: column-reverse;
  min-height: 100dvh;
}

.profile {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.img {
  aspect-ratio: 1 / 1;
  object-fit: cover;
  border-radius: 50%;
  width: 18rem;
  max-width: 100%;
  margin-inline: auto;
  animation: morph 8s ease-in-out infinite;
  border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
  transition: all 1s ease-in-out;
}

.social-links {
  font-size: var(--step-3);
  padding-block: 1em;
  gap: 2em;
  justify-content: center;
}

.about-me {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: justify;
}

a {
  text-decoration: none;
  color: hsl(var(--clr-secundary));
}

h2,
p {
  margin-bottom: 0.8em;
}

@keyframes morph {
  0% {
    border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
  }

  50% {
    border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%;
  }

  100% {
    border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
  }
}

@media (min-width: 60rem) {
  main {
    flex-direction: row;
    padding-top: 7rem;
  }

  i {
    --color: hsl(var(--clr-secundary));
    --border: 2px;
    --offset: 1rem;
    --gap: 0px;

    border-radius: 50%;
    cursor: pointer;
    padding: calc(var(--border) + var(--gap));
    border: var(--offset) solid #0000;
    --_m: radial-gradient(
      50% 50%,
      #000 calc(100% - var(--offset)),
      #0000 calc(100% - var(--border))
    );
    -webkit-mask: var(--_m);
    mask: var(--_m);
    --_g: #0000 calc(99% - var(--border)), var(--color) calc(100% - var(--border)) 99%, #0000;
    --_s: var(--offset);
    --_r: 100% 100% at;
    background:
      radial-gradient(var(--_r) 0 0, var(--_g)) calc(100% + var(--_s)) calc(100% + var(--_s)),
      radial-gradient(var(--_r) 100% 0, var(--_g)) calc(0% - var(--_s)) calc(100% + var(--_s)),
      radial-gradient(var(--_r) 0 100%, var(--_g)) calc(100% + var(--_s)) calc(0% - var(--_s)),
      radial-gradient(var(--_r) 100% 100%, var(--_g)) calc(0% - var(--_s)) calc(0% - var(--_s));
    background-size: 50% 50%;
    background-repeat: no-repeat;
    transition: 0.4s;
  }

  i:hover {
    --_s: 0px;
  }
}
</style>

<script setup>
import { useRouter } from 'vue-router'
import BackgroundAnimation from '../components/BackgroundAnimation.vue'
import { onUnmounted, onMounted } from 'vue'

const router = useRouter()

const vSwipeUp = {
  mounted(el, binding) {
    let startY = 0

    el.addEventListener('touchstart', (e) => {
      startY = e.touches[0].clientY
    })

    el.addEventListener('touchend', (e) => {
      const endY = e.changedTouches[0].clientY
      if (startY > endY + 120) {
        if (typeof binding.value === 'function') {
          binding.value()
        }
      }
    })
  }
}

const handleWheel = (event) => {
  if (event.deltaY > 0) {
    router.push('/projetos')
  }
}

const handleTouch = () => router.push('/projetos')

onMounted(() => window.addEventListener('wheel', handleWheel))

onUnmounted(() => window.removeEventListener('wheel', handleWheel))
</script>

<template>
  <main v-swipe-up="handleTouch" class="grid">
    <BackgroundAnimation />
    <div class="container-profile">
      <h1>YAGO SANTOS</h1>
      <p>Desenvolvedor Web Front-end. Construindo experiências web impactantes.</p>
    </div>
    <div class="scroll-down">
      <p>Explore meus projetos</p>
      <div @click="router.push('/projetos')" class="scroll-down__btn">
        <svg
          viewBox="191.3848 17.668 104.3627 349.0045"
          width="60%"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g>
            <g
              id="Maquettes"
              stroke="none"
              stroke-width="1"
              fill="none"
              fill-rule="evenodd"
              transform="matrix(10.436274, 0, 0, 10.742642, 191.384845, 259.246342)"
              style=""
            >
              <g id="Home" transform="translate(-715.000000, -844.000000)" fill="#FFFFFF">
                <g id="See-my-work" transform="translate(685.000000, 735.000000)">
                  <g id="Arrow" transform="translate(30.000000, 61.000000)">
                    <path
                      d="M 5 58 C 5 53.423 0 48 0 48 L 3.125 48 L 7.083 47.996 L 10 48 C 10 48 5 53 5 58 Z"
                      id="Triangle"
                      style="fill: rgb(33, 134, 222)"
                    />
                  </g>
                </g>
              </g>
            </g>
            <rect
              x="235.771"
              y="17.668"
              width="18.12"
              height="243.464"
              style="fill: rgb(33, 134, 222); fill-rule: evenodd"
            />
          </g>
        </svg>
      </div>
    </div>
  </main>
</template>

<style scoped>
main {
  background: radial-gradient(
    ellipse at bottom,
    hsl(var(--clr-main) / 0.4) 0%,
    hsl(var(--clr-pure-black)) 100%
  );
  overflow: hidden;
  text-align: center;
  grid-template-rows: repeat(3, 1fr);
  align-items: center;
  min-height: 100dvh;
  background-color: hsl(var(--clr-pure-black));
  color: hsl(var(--clr-pure-white));
}

.container-profile {
  backdrop-filter: blur(1.5rem);
  -webkit-backdrop-filter: blur(1.5rem);
  grid-row: 2;
  align-self: center;
  justify-self: center;
  padding: 1.5em;
  width: 80%;
  max-width: 35rem;
}

.scroll-down {
  grid-row: 3;
  margin-bottom: 2rem;
  backdrop-filter: blur(1.5rem);
  -webkit-backdrop-filter: blur(1.5rem);
}

.scroll-down p {
  margin-inline: auto;
}

.scroll-down__btn {
  position: relative;
  aspect-ratio: 0.6 / 1;
  width: 1rem;
  border: 3px solid hsl(var(--clr-secundary));
  margin-inline: auto;
  margin-top: 1rem;
}

.scroll-down__btn:hover > svg {
  top: 120%;
}

svg {
  position: absolute;
  transform: translate(-50%, -50%);
  top: 100%;
  left: 50%;
  transition: all 0.4s;
}

@media (min-width: 70rem) {
  .container-profile {
    padding: 2em;
  }
}

@media (min-width: 60rem) {
  main {
    min-height: 100svh;
  }
}
</style>

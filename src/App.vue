<script setup>
import { ref, watch } from 'vue'
import emailjs from '@emailjs/browser'
import { RouterView, RouterLink, useRoute } from 'vue-router'
import { toast } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'

const isMenuOpen = ref(false)
const isModalOpen = ref(false)
const isOutHome = ref(false)
const route = useRoute()
const form = ref('')
const email = ref('')

window.addEventListener('resize', () => {
  let body = document.body
  body.classList.add('no-transitions')
  setTimeout(() => {
    body.classList.remove('no-transitions')
  }, 300)
})

const closeMenu = () => {
  if (window.innerWidth >= 960) {
    return
  } else {
    isMenuOpen.value = !isMenuOpen.value
  }
}

const clearModal = () => {
  let inputs = document.querySelectorAll('.input')
  let textarea = document.querySelector('textarea')
  textarea.value = ''
  inputs.forEach((e) => (e.value = ''))
}

const notifySucess = () => {
  toast.success('Mensagem enviada com sucesso!')
}

const notifyError = (error) => {
  toast.error(`Erro ao enviar mensagem! ${error}`)
}

const sendEmail = (email) => {
  if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    closeModal()
    toast.error(`Digite um email válido`)
  } else {
    emailjs
      .sendForm('service_j57n7v5', 'template_fjx8r4v', form.value, {
        publicKey: 'roK9eoewI1YQK80Mm'
      })
      .then(
        () => {
          clearModal()
          closeModal()
          notifySucess()
        },
        (error) => {
          notifyError(error.text)
        }
      )
  }
}

const openModal = () => {
  let modal = document.querySelector('#modal')
  modal.showModal()
  isModalOpen.value = true
}

const closeModal = () => {
  let modal = document.querySelector('#modal')
  modal.close()
  isModalOpen.value = false
}

watch(route, () => {
  return setTimeout(
    () => (route.name === 'home' ? (isOutHome.value = false) : (isOutHome.value = true)),
    800
  )
})
</script>

<template>
  <div class="menu" :class="{ 'out-home-styles': isOutHome }">
    <div id="nav-toggle" @click="isMenuOpen = !isMenuOpen" :class="{ active: isMenuOpen }">
      <span></span>
    </div>

    <nav :class="['flex', { 'nav-active': isMenuOpen }]">
      <ul @click="closeMenu" class="flex">
        <li>
          <RouterLink :to="{ name: 'home' }" class="link text-light" active-class="link-active"
            >Página Inicial</RouterLink
          >
        </li>
        <li>
          <RouterLink :to="{ name: 'projetos' }" class="link text-light" active-class="link-active"
            >Projetos</RouterLink
          >
        </li>
        <li>
          <RouterLink :to="{ name: 'sobre' }" class="link text-light" active-class="link-active"
            >Sobre mim</RouterLink
          >
        </li>
      </ul>
      <button class="openModal" @click="openModal">
        <i class="bx bxs-chat text-light"></i>
      </button>
    </nav>
  </div>
  <dialog id="modal">
    <button @click="closeModal" class="closeModal text-dark"><i class="bx bx-x"></i></button>
    <form ref="form" @submit.prevent="sendEmail(email)">
      <input class="input" placeholder="Seu Nome" type="text" name="user_name" required />
      <input
        v-model="email"
        class="input"
        placeholder="Seu Email"
        type="email"
        name="user_email"
        required
      />
      <textarea placeholder="Sua Mensagem" name="message" required></textarea>
      <input type="submit" value="Enviar" />
    </form>
  </dialog>
  <div v-if="isMenuOpen" id="nav-opacity"></div>
  <RouterView v-slot="{ Component }">
    <transition name="slide-fade" mode="out-in">
      <component :is="Component" :key="route.path"></component>
    </transition>
  </RouterView>
</template>

<style scoped>
.menu {
  position: fixed;
  z-index: 99;
  top: 0;
  left: 0;
  width: 100%;
}

#nav-toggle {
  max-width: fit-content;
  margin-top: 2rem;
  margin-left: 2rem;
  position: relative;
  z-index: 999;
}

#nav-toggle span {
  position: relative;
}

#nav-toggle span::before,
#nav-toggle span::after {
  content: '';
  position: absolute;
}

#nav-toggle span,
#nav-toggle span::before,
#nav-toggle span::after {
  display: block;
  border-radius: 10rem;
  width: clamp(1.8rem, 5vw, 2.5rem);
  height: 0.15rem;
  background-color: hsl(var(--clr-secundary));
  transition:
    transform 0.4s,
    background 0.2s;
}

#nav-toggle span::before {
  transform: translateY(-0.5rem);
}

#nav-toggle span::after {
  transform: translateY(0.5rem);
}

#nav-toggle.active span {
  background-color: transparent;
}

#nav-toggle.active span::before {
  transform: translateY(0) rotate(45deg);
}

#nav-toggle.active span::after {
  transform: translateY(0) rotate(-45deg);
}

nav {
  flex-direction: column;
  font-size: var(--step-5);
  justify-content: center;
  gap: 4rem;
  padding: 2rem;
  position: absolute;
  top: 0;
  left: 0;
  width: 60%;
  height: 100dvh;
  background-color: hsl(var(--clr-main) / 0.6);
  transform: scale(0, 1);
  transform-origin: left;
  transition: transform 0.4s;
}

ul {
  opacity: 0;
  transition: opacity 0.15s;
  flex-direction: column;
  gap: 1em;
}

nav.nav-active {
  transform: scale(1, 1);
}

nav.nav-active ul {
  opacity: 1;
  transition: opacity 0.4s;
  transition-delay: 0.2s;
}

#nav-opacity {
  position: absolute;
  z-index: 9;
  top: 0;
  left: 0;
  width: 100%;
  height: 100dvh;
  background-color: hsl(var(--clr-pure-black) / 0.2);
}

.link-active {
  color: hsl(var(--clr-secundary));
}

#modal {
  width: 70%;
  font-size: var(--step-3);
  translate: -50% -50%;
  top: 50%;
  left: 50%;
  padding: 2em;
  max-width: 60ch;
  border: none;
  background-color: hsl(var(--clr-pure-white));
  border-radius: 0.2em;
  box-shadow: 0.5rem 0.5rem 0.2rem hsl(var(--clr-main) / 0.5);
  min-height: 40dvh;
}

#modal[open] {
  -webkit-animation: show 0.4s ease normal;
  animation: show 0.4s ease normal;
}

#modal input:not(:last-child),
#modal textarea {
  width: 100%;
  display: block;
  padding: 0.2em;
  border: none;
  border-bottom: 1px solid hsl(var(--clr-pure-black));
  background-color: transparent;
  margin-block: 1.5em;
  resize: none;
}

#modal input:focus,
#modal textarea:focus {
  outline: none;
}

#modal input::placeholder,
#modal textarea::placeholder {
  color: hsl(var(--clr-pure-black) / 0.5);
}

#modal input:last-child {
  padding: 0.2em 0.5em;
  background-color: transparent;
  border: 1px solid hsl(var(--clr-pure-black));
  box-shadow: 0.2rem 0.2rem 0.2rem hsl(var(--clr-pure-black) / 0.2);
  border-radius: 0.2em;
  color: hsl(var(--clr-pure-black));
  font-weight: bold;
  cursor: pointer;
  transition: transform 0.4s;
}

#modal input:last-child:hover {
  transform: translateY(-5px);
}

#modal::backdrop {
  backdrop-filter: blur(0.2rem);
}

button {
  background-color: transparent;
  border: none;
  padding: 0.5rem;
  cursor: pointer;
}

.openModal {
  opacity: 0;
  transition: opacity 0.15s;
  padding: 0;
  max-width: fit-content;
}

nav.nav-active .openModal {
  opacity: 1;
  transition: opacity 0.4s;
  transition-delay: 0.2s;
}

.closeModal {
  position: absolute;
  top: 0;
  right: 0;
  font-size: var(--step-5);
}

@media (min-width: 60rem) {
  .menu {
    height: 5rem;
  }

  #nav-toggle {
    display: none;
  }

  nav {
    all: unset;
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    justify-content: center;
    font-size: var(--step-1);
    align-items: center;
    padding: 1.5em;
  }

  .out-home-styles {
    box-shadow: 0 0.2rem 0.2rem hsl(var(--clr-pure-black) / 0.2);
    background-color: hsl(var(--clr-main));
  }

  nav ul {
    opacity: 1;
    grid-column: 2;
    flex-direction: row;
    justify-content: space-between;
    gap: 5em;
  }

  .openModal {
    opacity: 1;
    grid-column: 3;
    justify-self: end;
  }

  .link {
    position: relative;
    text-decoration: none;
  }

  .link::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    background-color: hsl(var(--clr-secundary));
    bottom: 0;
    left: 0;
    transform-origin: right;
    transform: scaleX(0);
    transition: transform 0.4s ease-in-out;
  }

  .link:hover:not(.link-active):before {
    transform-origin: left;
    transform: scaleX(1);
  }

  .link-active.link::before {
    transform-origin: left;
    transform: scaleX(1);
  }
}

@-webkit-keyframes show {
  from {
    transform: scale(0);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}

@keyframes show {
  from {
    transform: scale(0);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}
</style>

<template>
  <button><slot></slot></button>
</template>

<style scoped>
button {
  font-size: var(--step-3);
  max-width: fit-content;
  padding: 0.2em 0.5em;
  background-color: hsl(var(--clr-secundary));
  border: none;
  border-radius: 0.2em;
  color: hsl(var(--clr-main));
  font-weight: bold;
  box-shadow: 0.3em 0.3em 0.3em hsl(var(--clr-pure-black) / 0.2);
  transition: transform 0.4s;
}

button:hover {
  transform: translateY(-5px);
  cursor: pointer;
}
</style>

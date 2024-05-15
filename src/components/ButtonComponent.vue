<template>
  <button><slot></slot></button>
</template>

<style scoped>
button {
  position: relative;
  font-size: var(--step-3);
  max-width: fit-content;
  padding: 0.2em 0.5em;
  background-color: hsl(var(--clr-secundary));

  border: none;
  border-radius: 0.2em;
  color: hsl(var(--clr-pure-white));
  font-weight: bold;
  transition: transform 0.4s;
  cursor: pointer;
}

button:hover {
  color: hsl(var(--clr-secundary));
  background: transparent;
  box-shadow: none;
}

button:before,
button:after {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  height: 2px;
  width: 0;
  background: hsl(var(--clr-secundary));
  box-shadow:
    -1px -1px 5px 0px #fff,
    7px 7px 20px 0px #0003,
    4px 4px 5px 0px #0002;
  transition: 400ms ease all;
}
button:after {
  right: inherit;
  top: inherit;
  left: 0;
  bottom: 0;
}
button:hover:before,
button:hover:after {
  width: 100%;
  transition: 800ms ease all;
}
</style>

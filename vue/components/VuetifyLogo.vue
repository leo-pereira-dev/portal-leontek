<template>
  <img class="vuetify-logo" alt="Vuetify Logo" src="/logo.png" />
</template>

<style>
.vuetify-logo {
  height: 180px;
  width: 180px;
  transform: rotateY(750deg);
  animation: turn 5.5s ease-out forwards 2s;
}

@keyframes turn {
  100% {
    transform: rotateY(0deg);
  }
}
</style>

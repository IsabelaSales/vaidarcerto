<template>
  <v-app id="app">
    <nav>
      <router-link to="/">Inicio</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    <v-main> <router-view/> </v-main>

  </v-app>
</template>

<style scoped>

</style>

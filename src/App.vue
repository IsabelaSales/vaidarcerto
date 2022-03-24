<template>
  <v-app id="app">
  <menuView/>
    <v-main> <router-view/> </v-main>
  </v-app>
</template>
<script>
import menuView from '../src/components/menuView'
export default {
    name: 'app',
    components: {menuView
    }
}
</script>
<style scoped>

</style>

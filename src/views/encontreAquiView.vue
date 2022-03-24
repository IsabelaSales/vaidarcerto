<template>
  <v-container>
    <h2 class="font-weight-black text-center" > Encontre os Melhores Ovos da Páscoa Artesanais Mais Proximo de Você</h2>
  </v-container>
</template>
<script>
export default {
  name: 'encontreAquiView',
  data(){
    return{
      localizacaoVendedores: []
    }
  },
  created () {
    fetch('https://it3-hbn-default-rtdb.firebaseio.com/ovosPascoa.json')
    .then(resposta => resposta.json())
    .then(json => {
      this.localizacaoVendedores = json
    })
  }
}
</script>
<style scoped>

</style>

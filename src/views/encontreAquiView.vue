
    
<template>
  <v-container>
    <h2 class="font-weight-black text-center">
      ENCONTRE UM PONTO DE VENDA MAIS PRÓXIMO DE VOCÊ
    </h2>
    <v-card v-for="item of localizacaoVendedores" :key="item.id" :loading="loading" class="mx-auto my-12" max-width="374">
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-img 
      height="250"
      src="item.imagem"
    ></v-img>

    <v-card-title>{{item.nome}}</v-card-title>

    <v-card-text>
      <v-row
        align="center"
        class="mx-0"
      >
        <v-rating
          :value="4.5"
          color="amber"
          dense
          half-increments
          readonly
          size="14"
        ></v-rating>

        <div class="grey--text ms-4">
          4.5 (413)
        </div>
      </v-row>

      <div class="my-4 text-subtitle-1">
        R$ {{item.preco}}
      </div>

      <div class="font-weight-black text-center">{{item.local.nome}}</div>

      <div class="font-weight text-center">Endereço: {{item.local.endereco}}</div>
      <div class="font-weight text-center">Cep: {{item.local.cep}}</div>

  
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-card-title>Tonight's availability</v-card-title>

    <v-card-text>
      <v-chip-group
        v-model="selection"
        active-class="deep-purple accent-4 white--text"
        column
      >
        <v-chip>5:30PM</v-chip>

        <v-chip>7:30PM</v-chip>

        <v-chip>8:00PM</v-chip>

        <v-chip>9:00PM</v-chip>
      </v-chip-group>
    </v-card-text>

    <v-card-actions>
      <v-btn
        color="deep-purple lighten-2"
        text
        @click="reserve"
      >
        Reserve
      </v-btn>
    </v-card-actions>
  </v-card>
  </v-container>
</template>
<script>
export default {
  name: "encontreAquiView",
  data() {
    return {
      localizacaoVendedores: [],
    };
  },
  created() {
    fetch("https://it3-hbn-default-rtdb.firebaseio.com/ovosPascoa.json")
      .then((resposta) => resposta.json())
      .then((json) => {
        this.localizacaoVendedores = json;
      });
  },
};
</script>
<style scoped>
</style>

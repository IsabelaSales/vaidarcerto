
    
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
      :src="item.imagem"
    ></v-img>

    <v-card-title>{{item.nome}}</v-card-title>
    <h4 class="text-center">{{item.sabor}}</h4>

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

        <h4 class="my-4 text-subtitle-1 font-weight-black text-center">R$ {{item.preco}}</h4>
      <h3 class="font-weight-black text-center">{{item.local.nome}}</h3>
      <h5 class="font-weight text-center">Endereço: {{item.local.endereco}},  Cep: {{item.local.cep}}.</h5>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-card-title>Disponibilidade</v-card-title>

    <v-card-text>
      <v-chip-group
        v-model="selection"
        active-class=" orange accent-4 white--text"
        column
      >
        <v-chip>26/03/2022</v-chip>

        <v-chip>30/03/2022</v-chip>

        <v-chip>10/04/2022</v-chip>

        <v-chip>28/04/2022</v-chip>
      </v-chip-group>
    </v-card-text>

    <v-card-actions>
      <v-btn
        color="pink lighten-2"
        text
        @click="reserve"
      >
        AGENDAR
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

<template>
  <div>
    <v-container class="texto">
      <h1 class="font-weight-black text-center">Cadastre Seu Ponto De Venda</h1>
    </v-container>
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-text-field
        v-model="name"
        :counter="10"
        :rules="nameRules"
        label="Name"
        required
      ></v-text-field>

      <v-text-field
        v-model="email"
        :rules="emailRules"
        label="E-mail"
        required
      ></v-text-field>

      <v-text-field
        v-model="endereço"
        :rules="endereçoRules"
        label="Endereço Completo"
        required
      ></v-text-field>

      <v-text-field
        v-model="Contato"
        :rules="contatoRules"
        label="Contato"
        required
      ></v-text-field>

      <v-text-field
        v-model="sabor1"
        :rules="sabor1Rules"
        label="Sabor"
        required
      ></v-text-field>

      <v-text-field
        v-model="sabor2"
        :rules="sabor1Rules"
        label="Sabor"
        required
      ></v-text-field>

      <v-text-field
        v-model="sabor3"
        :rules="sabor1Rules"
        label="Sabor"
        required
      ></v-text-field>

      <v-text-field
        v-model="sabor4"
        :rules="sabor1Rules"
        label="Sabor"
        required
      ></v-text-field>

      <v-text-field
        v-model="sabor5"
        :rules="sabor1Rules"
        label="Sabor"
        required
      ></v-text-field>

      <v-btn color="warning" @click="resetValidation"> Concluido</v-btn>
    </v-form>
  </div>
</template>
<script>
export default {
  name: "cadastreSeView",
};
</script>
<style scoped>
</style>
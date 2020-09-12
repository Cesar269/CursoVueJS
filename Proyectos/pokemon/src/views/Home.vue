
<template>
  <div>
    <br>
    <v-layout row wrap >
      <v-flex xs12 sm6 md4 lg3 my-3>
        <v-card class="mx-auto" max-width="400">
          <v-card-subtitle class="pb-0 display-1">aaaaa</v-card-subtitle>

          <v-card-text class="text--primary">
            <div>poder: 180+</div>

            <div>Habilidades: - da,dad,ladald,</div>
          </v-card-text>

          <v-card-actions>
            <v-btn color="purple loghten-1" text>Guardar en la pokelist</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
      
      
    </v-layout>
  </div>
</template>


<script>
// @ is an alias to /src
import axios from "axios"
export default {
  name: "Home",
  data() {
    return {
      datos:[]
    }
  },
  methods: {
    async getData(){
      for(let i=1;i<=20;i++){
        try {
          let nombre = await axios.get(`https://pokeapi.co/api/v2/pokemon/${i}/`);
          this.datos.push(nombre.data.name)
        } catch (error) {
          console.log(error);
        }
      }
    }
  },
  created() {
   this.getData();
   console.log(this.datos);
  },

};
</script>


<template>
  <div>
    <br />
    <v-container grid-list-lg>
      <!-- Cartas de cada pokemon inicio -->
      <v-layout col wrap>
        <v-flex xs12 sm12 md6 lg4 xl4 v-for="(item,index) in pokemones" :key="index">
          <v-card class="mx-auto" max-width="400">
            <v-img
             
              :src="item.imagen"
            >
            </v-img>
            <v-card-subtitle class="pb-0 display-1">
              <b>{{item.nombre}}</b>
            </v-card-subtitle>
            <v-card-subtitle class="pb-0">Peso: {{item.peso}}gr.</v-card-subtitle>

            <v-card-text class="text--primary">
              <v-list>
                <v-list-group prepend-icon="adjust">
                  <template v-slot:activator>
                    <v-list-item-title>Caracterisiticas</v-list-item-title>
                  </template>

                  <v-list-group no-action sub-group>
                    <template v-slot:activator>
                      <v-list-item-content>
                        <v-list-item-title>Habilidades</v-list-item-title>
                      </v-list-item-content>
                    </template>

                    <v-list-item v-for="(ability, index) in item.habilidades" :key="index">
                      <v-list-item-title>{{index+1}} - {{ability}}</v-list-item-title>
                    </v-list-item>
                  </v-list-group>
                  <v-list-group no-action sub-group>
                    <template v-slot:activator>
                      <v-list-item-content>
                        <v-list-item-title>Tipos</v-list-item-title>
                      </v-list-item-content>
                    </template>

                    <v-list-item v-for="(type, index) in item.tipos" :key="index">
                      <v-list-item-title>{{index+1}} - {{type}}</v-list-item-title>
                    </v-list-item>
                  </v-list-group>
                </v-list-group>
              </v-list>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
      <!-- Fin de carta del pokemon -->
    </v-container>
  </div>
</template>



               


<script>
// @ is an alias to /src
import axios from "axios";
export default {
  name: "Home",
  data() {
    return {
      pokemones: [],
      imagenes: [],
      name: "https://cdn.vuetifyjs.com/images/cards/docks.jpg"
    };
  },
  methods: {
    async getData() {
      try {
        let block = await axios.get(
          "https://pokeapi.co/api/v2/pokemon?limit=20&offset=0"
        );
        for (let i = 0; i < block.data.results.length; i++) {
          let url = block.data.results[i].url;
          this.pokemones.push(await this.dataPokemon(url));
        }
      } catch (error) {
        console.log(error);
      }
    },
    async dataPokemon(url) {
      try {
        let pokemon = await axios.get(url);
        let abilities = [];
        for (let i = 0; i < pokemon.data.abilities.length; i++) {
          abilities.push(pokemon.data.abilities[i].ability.name);
        }
        let types = [];
        for (let i = 0; i < pokemon.data.types.length; i++) {
          types.push(pokemon.data.types[i].type.name);
        }

        return {
          nombre: pokemon.data.name,
          habilidades: abilities,
          peso: pokemon.data.weight,
          tipos: types,
          imagen: pokemon.data.sprites.front_shiny
        };
      } catch (error) {
        console.log(error);
      }
    },
    async prueba() {},
  },
  created() {
    this.getData();
  },
};
</script>

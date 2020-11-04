<template>
  <div>
    <v-container>
      <div id="botones">
        <button @click="almacenar(getPokemon)">Almacenar</button>
        <img
          class="pokemon"
          :src="getPokemon.sprites.front_default"
          v-if="getPokemon"
        />
        <span v-else
          >No ha seleccinado ningún pokemon para mostrar la información
          aquí</span
        >
      </div>
      <div class="caracteristicas" v-if="getPokemon">
        <p id="nombre">
          {{ getPokemon.name }} 
        </p>
       
        <p>
          No: {{ getPokemon.order}} 
        </p>
        <p>
          Experiencia base: {{ getPokemon.base_experience}} 
        </p>
        <p>
          Altura: {{ getPokemon.height}} cm.
        </p>
        <p>
          id: {{ getPokemon.id}} 
        </p>
        <p>
           Peso: {{ getPokemon.order}} g
        </p>


        <v-list color="rgba(55, 160, 197, 0.979)" dark tile rounded>
           <v-list-group
          color="white"
          >
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>Habilidades</v-list-item-title>
              </v-list-item-content>
            </template>

            <v-list-item v-for="(item, index) in (getPokemon.abilities.length)" :key="index">               
              <v-list-item-content>
                <v-list-item-title v-text="getPokemon.abilities[index].ability.name"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-group>
        </v-list>
        <br>
         <v-list color="rgba(55, 160, 197, 0.979)" dark tile rounded>
           <v-list-group
          color="white"
          >
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>Formas</v-list-item-title>
              </v-list-item-content>
            </template>

            <v-list-item v-for="(item, index) in (getPokemon.forms.length)" :key="index">               
              <v-list-item-content>
                <v-list-item-title v-text="getPokemon.forms[index].name"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-group>
        </v-list>
        <br>
         <v-list color="rgba(55, 160, 197, 0.979)" dark tile rounded>
           <v-list-group
          color="white"
          >
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>game indices</v-list-item-title>
              </v-list-item-content>
            </template>

            <v-list-item v-for="(item, index) in (getPokemon.game_indices.length)" :key="index">               
              <v-list-item-content>
                <v-list-item-title v-text="getPokemon.game_indices[index].version.name"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-group>
        </v-list>
        <br>
          <v-list color="rgba(55, 160, 197, 0.979)" dark tile rounded>
           <v-list-group
          color="white"
          >
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>Movimientos</v-list-item-title>
              </v-list-item-content>
            </template>

            <v-list-item v-for="(item, index) in (getPokemon.moves.length)" :key="index">               
              <v-list-item-content>
                <v-list-item-title v-text="getPokemon.moves[index].move.name"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-group>
        </v-list>




      </div>
    </v-container>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import {mapActions} from 'vuex'
export default {
  name: "infoPokemon",
  computed: {
    ...mapGetters("pokemon", ["getPokemon"]),
  },
  methods:{
    ...mapActions('cajita',['guardarCajita']),
    almacenar(info){
      if(info){
        this.guardarCajita(info);
      }
    },
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@1,500&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Itim&display=swap");
#botones {
  display: flex;
  font-family: "Montserrat", sans-serif;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}
#botones button {
  width: 24vw;
  background-color: rgb(71, 88, 90);
  margin: 0.5vw;
  padding: 0.5vh;
  border-radius: 50px;
  color: white;
  border-color: white;
  border-style: solid;
}
.pokemon {
  width: 15vw;
  display: flex;
  border-radius: 30%;
  border: solid rgb(248, 248, 248);
}
#nombre {
  font-family: "Itim", cursive;
  font-size: 2vh;
}
.datos{
    color: white;
}
.caracteristicas{
    color: white;
    text-align: center;
    font-family: "Itim", cursive;

}
.caracteristicas p{
    margin: 0px 0px 5px 0px;
}
</style>


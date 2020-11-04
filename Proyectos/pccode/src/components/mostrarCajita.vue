<template>
    <div>
        <v-container>
        <h4>¡Hola!, hasta ahora tienes {{getLength}} pokemons guardados: </h4>
        <br>
        <ul v-for="(item,index) in getCajitas" :key=(index) class="cajita">
            <li>{{item.name}}</li>
        </ul>

        </v-container>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
import {mapGetters} from 'vuex';
export default {
    name:"mostrarCajita",
    methods:{
        ...mapActions('cajita',['getCajita'])
    },
    created() {
        this.getCajita();
    },
    computed:{
        ...mapGetters('cajita',['getLength','getCajitas']),
    }
    

}
</script>

<style>
.cajita{
  margin: 1vh 0px 20px 3vw;
}
.cajita li{
  list-style: none;
  background-color: rgb(32, 59, 133);
  color: white;
  text-align: center;
  text-decoration: wavy;
  display: inline-block;
  width: 60vw;
  border-radius: 50px;
  font-size: 2.3vh;
  box-shadow: 5px 5px 5px gray;
      font-family: 'Playfair Display', serif;
      transition: 0.5s;



}
.cajita li:hover{
  background-color: rgba(48, 65, 121, 0.74);
  cursor: pointer;
}

</style>
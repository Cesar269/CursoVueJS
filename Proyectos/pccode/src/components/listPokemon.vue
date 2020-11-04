<template>
  <div>

    <ul v-for="(item, index) in pokemon" :key="index" class="lista">
      <li @click="getInfo(item.url)"><b>{{ item.name }}</b></li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { mapActions } from "vuex";

export default {
  computed: {
      ...mapGetters('pokemones',['pokemon'])
  },

  methods: {
    ...mapActions("pokemones", ["getPokemones"]),
    ...mapActions("pokemon", ["getInfo"]),
  },
  created() {
    this.getPokemones();
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display&family=Roboto&display=swap');

.lista{
  margin: 1vh 0px 20px 3vw;
}
.lista li{
  list-style: none;
  background-color: rgb(83, 41, 107);
  color: white;
  text-align: center;
  text-decoration: wavy;
  display: inline-block;
  width: 60vw;
  border-radius: 50px;
  font-size: 2.3vh;
  box-shadow: 5px 5px 5px rgb(161, 154, 154);
      font-family: 'Playfair Display', serif;
      transition: 0.5s;



}
.lista li:hover{
  background-color: rgba(96, 50, 122, 0.89);
  cursor: pointer;
}

</style>
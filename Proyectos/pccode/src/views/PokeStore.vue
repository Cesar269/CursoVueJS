<template>
  <div class="store">
    <listPokemon id="list" />
    <infoPokemon id="info" />
  </div>
</template>

<script>
import listPokemon from "@/components/listPokemon.vue";
import infoPokemon from "@/components/infoPokemon.vue";
export default {
  name: "PokeStore",
  components: {
    listPokemon,
    infoPokemon,
  },
};
</script>

<style>
/* .store{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}  */
#list {
  display: inline-block;
}
#info {
  height: 99vh;
  width: 25vw;
  top: 0px;
  right: 0px;




position: fixed;
  background-color: rgba(95, 139, 197, 0.979);
  border-style: none none double outset;
  border-color: rgb(103, 112, 112);
  overflow-x: hidden;
  overflow-y: scroll;
}
</style>
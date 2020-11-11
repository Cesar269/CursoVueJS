<template>
  <div class="home">
   <Apartados class="apartado"/>
   <Contenido class="contenido"/>
  </div>
</template>

<script>
import Apartados from '../components/Apartados.vue'
import Contenido from '../components/Contenido.vue'
import {db} from '../main'
export default {
  name: 'Home',
  components: {
   Apartados,Contenido,
  }
}
</script>

<style>
.apartado{
  background-color: rgb(51, 228, 66);
  float: left;
  width: 225px;
  height: 100vh;
  border-right: solid gray;
  padding: 18px;
  position: sticky;
}
.contenido{
  background-color: rgb(173, 208, 238);
  height: 100vh;
  position: fixed;
  left: 225px;
  right: 0px;
  padding: 25px;

}
</style>
<template>
  <div>
    <ul class="list-group">
      <li v-for="(item,i) of ordenamiento" :key="item.id" @click="aumentar(i)" class="list-group-item d-flex justify-content-between align-items-center">
        {{i+1}} - {{item.nombre}}
        <span class="badge badge-primary badge-pill">{{item.cantidad}}</span>
      </li>
    </ul>
    <button class="btn btn-danger btn-block " @click="reiniciar()">Reiniciar</button>
  </div>
</template>
<script>
import { mapState,mapMutations } from "vuex";
export default {
  name: "Lista",
  computed: {
    ...mapState(["frutas"]),
    ordenamiento(){
        return this.frutas.sort((a,b)=>b.cantidad - a.cantidad)
    }
  },
  methods: {
      ...mapMutations(['aumentar','reiniciar'])
  },
};
</script>
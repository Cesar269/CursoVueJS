<template>
  <div>
    <b-navbar type="dark" variant="dark">
      <b-navbar-nav>
        <b-nav-item :to="{ name: 'Home' }"
          ><b-icon icon="house"></b-icon> Inicio</b-nav-item
        >
        <b-nav-item :to="{ name: 'Store' }"
          ><b-icon icon="list"></b-icon>Store</b-nav-item
        >

        <b-nav-item :to="{ name: 'PokeStore' }">
          <b-icon icon="list"></b-icon> PokeVuex</b-nav-item
        >
        <b-nav-item :to="{ name: 'Cajita' }">
          <b-icon icon="box-seam"></b-icon> <v-badge
          color="green"
          :content="getLength"
        >
          Cajita
        </v-badge></b-nav-item
        >
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>
<script>
import {mapGetters} from 'vuex'
export default {
  name: "navbar",
  data: () => ({

  }),
  computed:{
...mapGetters('cajita',['getLength']),
  }
};
</script>
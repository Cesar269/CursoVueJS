<template>
  <div>
      <ul v-for="(item,index) in pokemones" :key="index">
          <li>{{item.name}} --  {{item.url}}</li>
      </ul>
  </div>
</template>

<script>
import {mapGetters, mapState} from 'vuex'
import {mapActions} from 'vuex'
export default {
  name: "Store",
  data() {
      return {  
      }
  },
  created(){
      this.getPokemones();

  
    
     

  },
  computed:{
      ...mapState('pokemones',['pokemones'])
  },
  methods:{
      ...mapActions('pokemones',['getPokemones'])
      
  }
};
</script>
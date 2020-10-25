<template>
  <div>
      <ul v-for="(item,index) in products" :key="index">
          <li>{{item.name}} --  {{item.url}}</li>
      </ul>
  </div>
</template>

<script>
export default {
  name: "Store",
  data() {
      return {  
      }
  },
  created(){
      this.llamar();

  
    
     

  },
  computed:{
    products(){
        return this.$store.state.pokemons;
    }
  },
  methods:{
      async llamar(){
          await this.$store.dispatch('getProducts');
      }
      
  }
};
</script>
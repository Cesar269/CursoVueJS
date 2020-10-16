<template>
  <v-app>
   <navbar></navbar>
   <v-container>
     <router-view></router-view>
   </v-container>


  </v-app>
</template>

<script>
import navbar from '@/components/navbar.vue'
export default {
  name: 'App',

  components: {
navbar,
  
  },

  data: () => ({
    //
  }),
};
</script>

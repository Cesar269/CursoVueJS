<template>
  <v-app>
   <navbar></navbar>
     <router-view></router-view>


  </v-app>
</template>

<script>
import axios from 'axios';
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

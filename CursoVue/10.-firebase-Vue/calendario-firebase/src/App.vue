<template>
  <v-app>
    <v-container>
      
   <Calendario/>
    </v-container>
  </v-app>
</template>

<script>

import Calendario from './components/Calendario';

export default {
  name: 'App',

  components: {
    Calendario,
  },

  data: () => ({
    //
  }),
};
</script>

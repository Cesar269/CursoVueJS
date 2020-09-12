<template>
  <v-app>
    <v-main>
      <v-app-bar color="deep-purple accent-4" dense dark>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>Catalogo de pokemon</v-toolbar-title>

      <v-spacer></v-spacer>


    
    </v-app-bar>
      <v-main>
         <router-view/>
      </v-main>
     
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',

  components: {
    
  },

  data: () => ({
    //
  }),
};
</script>

<template>
  <v-app>
    <v-card>
      <v-toolbar class="indigo lighten-0" App>
        <v-app-bar-nav-icon @click="drawer =! drawer"></v-app-bar-nav-icon>
        <v-toolbar-title>Title</v-toolbar-title>
        <v-spacer></v-spacer>
      <v-btn class="success">Ingreso</v-btn>
      <v-btn class="error">Salir</v-btn>
      </v-toolbar>
    </v-card>
     <v-navigation-drawer
     app
      v-model="drawer"
      absolute
      temporary
      dark
    >
    <v-layout mt-4 column align-center>
      <v-flex>
        <v-avatar>
          <img src="https://randomuser.me/api/portraits/men/85.jpg">
        </v-avatar>
      </v-flex>
      <v-flex>
        <p class="white--text mt-3 headline">Juanito Perez</p>
      </v-flex>

    </v-layout>
    <v-layout>
      <v-flex mx-3>
        <v-btn class="success my-3" block :to="{name:'Home'}">Home</v-btn>
        <v-btn class="success" block :to="{name:'tareas-crud'}">Lista de Tareas</v-btn>

      </v-flex>
    </v-layout>
    </v-navigation-drawer>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data() {
    return {
      drawer: true
    }
  },
};
</script>

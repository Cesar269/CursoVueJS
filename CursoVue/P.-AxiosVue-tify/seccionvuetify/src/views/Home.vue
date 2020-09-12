<template>
  <v-main>
    <v-container grid-list-md>
      <v-layout row wrap>
        <v-flex xs12 sm6>
          <v-card>
            <v-img src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"></v-img>
            <v-card-title>
              <h2>lorem, ipsum dolor</h2>
            </v-card-title>
            <v-card-text>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium culpa, perspiciatis numquam rerum libero itaque harum
                repudiandae sed perferendis magnam autem aliquam quia
                necessitatibus nemo deserunt. Non quos autem id!
              </p>
            </v-card-text>
            <v-card-actions>
              <v-btn color="info" text>Acción</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
        <v-flex xs12 sm6>
          <v-card>
            <v-img
              class="white--text align-end"
              src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
            >
              <v-card-title>Top 10 american</v-card-title>
            </v-img>

            <v-card-title>
              <h2>lorem, ipsum dolor</h2>
            </v-card-title>
            <v-card-text>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium culpa, perspiciatis numquam rerum libero itaque harum
                repudiandae sed perferendis magnam autem aliquam quia
                necessitatibus nemo deserunt. Non quos autem id!
              </p>
            </v-card-text>
            <v-card-actions>
              <v-btn color="info" text @click="dialog = true">Acción</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
      <!-- Principio del dialogo  -->
      <v-dialog v-model="dialog" width="500" persistent>
        <v-card >
          <v-card-title>Este es un titulo</v-card-title>
          
          <v-card-text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque enim explicabo aliquam corrupti, alias amet deserunt tempora impedit nostrum illo accusantium nobis necessitatibus, incidunt, iste sed voluptates quibusdam maxime ipsam.</v-card-text>
   <v-divider></v-divider>
   <v-card-actions>
     <v-btn text @click="dialog =! dialog">Cerrar</v-btn>
   </v-card-actions>
   
   
   
    </v-card>

      </v-dialog>
      
      
      <!-- fin del dialogo -->
    </v-container>
  </v-main>
</template>

<script>
export default {
  data() {
    return {
      dialog: false
    }
  },
};
</script>

<template>
  <div>
    <v-container grid-list-xl>
      <v-layout row wrap>
        <v-flex md6>
          <v-card class="mb-3" v-for="(item,index) in listaTareas" :key="index">
            <v-card-text>
              <v-chip class="ma-2 ml-0" color="pink" label text-color="white">
                <v-icon left>label</v-icon>
                {{item.titulo}}
              </v-chip>
              <p>{{item.descripcion}}</p>
              <v-card-actions>
                <v-btn color="warning" class="ml-0" @click="editar(index)">Editar</v-btn>
                <v-btn color="error" @click="eliminarTarea(item.id)">Eliminar</v-btn>
              </v-card-actions>
            </v-card-text>
          </v-card>
        </v-flex>
        <v-flex md6>
          <v-card class="mb-3 pa-3">
            <v-form @submit.prevent="agregarTarea">
              <v-text-field label="Titulo de la Tarea" v-model="titulo"></v-text-field>
              <v-textarea label="Descripción de la tarea" v-model="descripcion"></v-textarea>
              <v-btn block color="success" type="submit">Agregar Tarea</v-btn>
            </v-form>
          </v-card>
        </v-flex>
      </v-layout>

      <v-snackbar v-model="snackbar">
        {{ mensaje }}
        <template v-slot:action="{ attrs }">
          <v-btn dark text v-bind="attrs" @click="snackbar = false">Cerrar</v-btn>
        </template>
      </v-snackbar>
      <v-dialog v-model="dialog" width="500" persistent>
        <v-card>
          <v-container>
            <v-form @submit.prevent="guardarCambios">
              <v-text-field label="Titulo de la Tarea" v-model="nuevoTitulo"></v-text-field>
              <v-textarea label="Descripción de la tarea" v-model="nuevaDescripcion"></v-textarea>

              <v-divider></v-divider>
              <v-card-actions>
                <v-btn type="submit" text>Aceptar</v-btn>
              </v-card-actions>
            </v-form>
          </v-container>
        </v-card>
      </v-dialog>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      listaTareas: [
        {
          id: 1,
          titulo: "Titulo Tarea #1",
          descripcion:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat mollitia repudiandae dolorem minus laudantium ipsam animi odio iure quas dolores reprehenderit quae enim optio debitis, ex magnam aperiam iste officiis!",
        },
        {
          id: 2,
          titulo: "Titulo Tarea #2",
          descripcion:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat mollitia repudiandae dolorem minus laudantium ipsam animi odio iure quas dolores reprehenderit quae enim optio debitis, ex magnam aperiam iste officiis!",
        },
      ],
      titulo: "",
      descripcion: "",
      snackbar: false,
      mensaje: "",
      dialog: false,
      lugar:null,
      nuevoTitulo:'',
      nuevaDescripcion:'',
    };
  },
  methods: {
    agregarTarea() {
      if (this.titulo === "" || this.descripcion === "") {
        this.snackbar = true;
        this.mensaje = "Llena todos los campos!!";
      } else {
        this.listaTareas.push({
          id: Date.now(),
          titulo: this.titulo,
          descripcion: this.descripcion,
        });
        this.titulo = "";
        this.descripcion = "";
      }
    },
    eliminarTarea(id) {
      this.listaTareas = this.listaTareas.filter((e) => e.id != id);
    },
    editar(i){
      this.dialog = true;
      this.nuevoTitulo = this.listaTareas[i].titulo;
      this.nuevaDescripcion = this.listaTareas[i].descripcion;
      this.lugar = i;

    },
    guardarCambios(){
      this.dialog = false;
      this.listaTareas[this.lugar].titulo = this.nuevoTitulo;
      this.listaTareas[this.lugar].descripcion = this.nuevaDescripcion;
      this.nuevoTitulo = '';
      this.nuevaDescripcion = '';
      this.lugar = null;
    }
  },
};
</script>
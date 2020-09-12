<template>
  <div class="q-pa-md q-gutter-sm">
    <q-editor
    v-if="!modoEdicion"
      v-model="editor"
      :definitions="{
        save: {
          tip: 'Guardar task',
          icon: 'save',
          label: 'Guardar',
          handler: saveWork
        },
       
      }"
      :toolbar="[
        ['bold', 'italic', 'strike', 'underline'],
        ['upload', 'save']
      ]"
    />

     <q-editor
     v-else
      v-model="editor"
      :definitions="{
        save: {
          tip: 'Actualizar nota',
          icon: 'save',
          label: 'Actualizar',
          handler: updateWork
        },
       
      }"
      :toolbar="[
        ['bold', 'italic', 'strike', 'underline'],
        ['upload', 'save']
      ]"
    />

    <q-card class="row" flat bordered v-for="(item,index) in task" :key="index">
      <q-card-section :class="item.estado ? 'tachar': ''" class="col" v-html="item.texto" />
      <!-- <q-btn flat color="blue" @click="item.estado = !item.estado">Acción</q-btn> -->
      <q-btn flat color="red" @click="eliminar(index,item.id)">Eliminar</q-btn>
       <q-btn flat color="blue" @click="editar(index,item.id)">Editar</q-btn>
    </q-card>
    <div class="flex flex-center" v-if="task.length===0">
      <h6>Sin notas</h6>
    </div>
  </div>
</template>

<script>
import { db } from "boot/firebase";
export default {
  data() {
    return {
      editor: "",
      task: [],
      index:null,
      modoEdicion: false,
      id: null
    };
  },
  created() {
    this.listarTareas();
  },
  methods: {
    async updateWork(){
try {
  const resDB = await db.collection('tareas').doc(this.id).update({
    texto : this.editor
  });
  this.task[this.index].texto = this.editor;
  this.$q.notify({
          message: "Tarea actualizada",
          color: "dark",
          textColor: "white",
          icon: "cloud_done",
        });
} catch (error) {
  console.log(error)
}finally{
  this.modoEdicion = false;
this.index = null;
this.id = null;
this.editor ='';
}
    },
    editar(i,id){
this.modoEdicion = true;
this.index = i;
this.id = id;
this.editor = this.task[i].texto;

    },
    async listarTareas() {
      try {
        const resDB = await db.collection("tareas").get();
        resDB.forEach((res) => {
          console.log(res);
          const tareas = {
            id: res.id,
            texto: res.data().texto,
            estado: res.data().estado,
          };
          this.task.push(tareas);
        });
      } catch (error) {
        console.log(error);
      }
    },
    async saveWork() {
      try {
        const resDB = await db.collection("tareas").add({
          texto: this.editor,
          estado: false,
        });
        this.task.push({
          texto: this.editor,
          estado: false,
          id: resDB.id,
        });
        this.editor = '';
        this.$q.notify({
          message: "Tarea guardada",
          color: "green-4",
          textColor: "white",
          icon: "cloud_done",
        });
      } catch (error) {
        console.log(error);
      }
    },
    eliminar(i,id) {
    
        this.$q
          .dialog({
            title: "Acción peligrosa",
            message: "¿Realmente quieres eliminar la tarea?",
            cancel: true,
            persistent: true,
          })
          .onOk(async () => {
            try {
              await db.collection('tareas').doc(id).delete();
              this.task.splice(i, 1);

            } catch (error) {
              console.log(error)
            }
          });
        
      
    },
  },
};
</script>
<style>
.tachar {
  text-decoration: line-through;
}
</style>
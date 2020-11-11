<template>
    <div>
        <h2>Que pasa?</h2>
        <p>maomaomaoa</p>
        <br>
        <p>naiaianinidlldld</p>
    </div>
</template>
 <script>
 import {mapActions} from 'vuex'
 export default {
     name:'Contenido',
     created(){
         this.getTareas("Personal");

     },
     methods: {
         ...mapActions('contenido',['getTareas']),
     },
 }
 </script>
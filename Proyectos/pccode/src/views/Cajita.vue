<template>
    <div>
        <mostrarCajita/>
        
    </div>
</template>

<script>
import {db} from '../main'
import mostrarCajita from '@/components/mostrarCajita.vue'
    export default{
        name:'Cajita',
        components:{
mostrarCajita
        }
    }
</script>
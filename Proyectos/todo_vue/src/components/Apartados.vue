<template>
    <div>
        <p>Tareas</p>
        <ul v-for="(item,index) in getState" :key="index">
            <li>{{item.apartado}}</li>
        </ul>
    </div>
</template>

<script>
import { mapGetters,mapActions } from 'vuex'
import db from '../main'
export default {
    name:'Apartados',


    computed:{
        ...mapGetters('apartados',['getState']),
    },
    methods: {
        ...mapActions('apartados',['getApartados'])
    },
    created(){
        this.getApartados();
    }

}
</script>

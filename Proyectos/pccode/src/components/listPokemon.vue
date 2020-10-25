<template>
    <div>
        <ul v-for="(item,index) in pokemon" :key=(index)>
            <li>{{item.name}}</li>
        </ul>

       
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
import {mapActions} from 'vuex'

export default {
    computed:

        mapGetters({
            pokemon: 'getPokemons'
        })

    

    ,
    methods:{
        ...mapActions(['getProducts'])
    },
    created() {
      this.getProducts();  
    },
}
</script>

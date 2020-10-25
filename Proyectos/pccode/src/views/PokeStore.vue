<template>
    <div class="store">
        <listPokemon id="list"/>
        <infoPokemon id="info"/>
    </div>
</template>

<script>
import listPokemon from '@/components/listPokemon.vue'
import infoPokemon from '@/components/infoPokemon.vue'
    export default {
        name:'PokeStore',
        components: {
            listPokemon,infoPokemon
        }
    }
</script>

<style>
.store{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
#list{
    flex-basis: 50vw;
}
#info{
    flex-basis: 30vw;
    height: 90vh;
    position: relative;
    background-color: aliceblue;
    border-style: none none dotted outset;
    border-color: rgb(179, 209, 209);
}
</style>
Vue.component('hijo', {
    template:`
    <div class="py-2 bg-success">
        <h2>componente hijo  {{numero}}</h2>
        <h2>Nombre: {{nombre}}</h2>
        
        
    </div>
    
    `,
    props:['numero'],
    data() {
        return {
            nombre: "Ignacio"
        }
    },
    mounted() {
        this.$emit('nombreHijo',this.nombre)
    },
})
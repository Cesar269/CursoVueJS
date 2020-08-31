const app = new Vue({
    el: "#app",
    data:{
        titulo: "Hola Mundo con Vue",
        frutas: ['Manzana','Tuna','Platano'],
        personas: [
            {nombre:'pepito', edad:12},
            {nombre:'Albert', edad:15},
            {nombre:'Antonio', edad:34}
            
        ],
        nuevosDatos:'',
        sumaEdades: 0
    },
    methods: {
        agregarPersona(){
            this.personas.push({
                nombre:this.nuevosDatos, edad:0

            })
            this.nuevosDatos='';
        }

    },
    computed: {
        sumarEdades(){
            this.sumaEdades = 0;
            for(persona of this.personas){
                this.sumaEdades = this.sumaEdades + persona.edad;
            }
            return this.sumaEdades;
        }
    },

})

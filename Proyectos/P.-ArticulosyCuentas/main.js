const app = new Vue({
    el: '#app',
    data: {
        articulos: [

        ],
        ticket: [
        ],
        newNombre: '',
        newPrecio: 0,
        newDisp: 0,
        ingreso: 0,
    },
    methods: {
        agregarArticulo() {
            this.articulos.push({
                nombre: this.newNombre,
                precio: this.newPrecio,
                disponible: this.newDisp,
                aVender: 0,
            }
            )
            this.newNombre = '';
            this.newPrecio = 0;
            this.newDisp = 0;
                localStorage.setItem('productos', JSON.stringify(this.articulos));
        },
        pasar(index) {
            this.ticket.push({
                cantidad: this.articulos[index].aVender,
                nombre: this.articulos[index].nombre,
                precio: this.articulos[index].precio,
                importe: this.articulos[index].aVender * this.articulos[index].precio
            })
            this.articulos[index].disponible -= this.articulos[index].aVender;
            this.articulos[index].aVender = 0;
            localStorage.setItem('productos', JSON.stringify(this.articulos));
            localStorage.setItem('tickets', JSON.stringify(this.ticket));


        },
        pagar() {
            localStorage.setItem('dinero', JSON.stringify(this.ingreso+=this.totalParcial));
            this.ticket = [];
            localStorage.setItem('tickets',JSON.stringify(this.ticket));
        }

    },
    created() {
        let artDB = JSON.parse(localStorage.getItem('productos'));
        if (artDB == null) {
            this.articulos = [];

        }
        else {
            this.articulos = artDB;
        }
        let tkDB = JSON.parse(localStorage.getItem('tickets'));
        if (tkDB == null) {
            this.ticket = [];
        }
        else {
            this.ticket = tkDB;
        }
        let ingDB = JSON.parse(localStorage.getItem('dinero'));
        if(ingDB == null){
            this.ingreso = 0;
        }
        else{
            this.ingreso = ingDB;
        }        

        
       
    },
    computed: {
        totalParcial() {
            let totalP = 0;
            for (let i = 0; i < this.ticket.length; i++) {
                totalP += this.ticket[i].importe;

            }
            return totalP;
        }
    },



})
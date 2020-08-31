Vue.component('saludo',{
    template: 
    `
    <div>
    <h2>{{saludo}}</h2>
    <h3>nueva variable</h3>
    </div>
    `,
    data(){
        return{
            saludo:'saludo desde Vue'
        }
    }
})
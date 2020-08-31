Vue.component('contador', {
    template:
    `
    <div>
    <h3>{{contador}}</h3>
    <button @click="contador++">+</button>
    </div>
    `,
    data() {
        return {
            contador: 0,
        }
    },
})
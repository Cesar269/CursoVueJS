console.log('Hola Mundo!!!')
let miVarianble = 'lala'
console.log(miVarianble);
let n1=12
let n2=123
let n3=10101
let bool=true
let nulo=null
console.log(n1,n2,n3,bool,nulo);
/*Objeto */
const miObjeto={}
const miOtroObjeto={
    unNumero: 12,
    unaCadena: "una cadena",
    unaCondicion: true,
}
console.log(miObjeto);
console.log(miOtroObjeto);
console.log(miOtroObjeto.unaCadena);
//temas nuevos y para repasar
//callbacks
//Funciones como valores
//----fat arrow functions
const miFatArrowFunction= (a,b) =>a+b//tiene implicito el return
const r = miFatArrowFunction(1,2)
console.log(r);
//funciones anonimas
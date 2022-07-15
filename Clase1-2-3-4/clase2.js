// let nombre = 'pepe';
// nombre = "farid"
// //console.log(nombre)
// let edad = 25;
// let precio = '$99.90'
// const series = ['Dark','Mr Robot', 'Castlevania']
// //series = {"series1":"Dark"}
// console.log(series)
// const peliculas = [
// {
//     nombre:'ET',
//     ano:2012,
//     protagonista:['pepe','juan','carlos'] 
// },
// {
//     nombre:'ET2',
//     ano:2014,
//     protagonista:['pepe','juan','carlos'] 
// },
// {
//     nombre:'ET3',
//     ano:2016,
//     protagonista:['pepe','juan','carlos'] 
// }
// ]
// //console.log(nombre,edad,precio,series,peliculas)
// //series.push('Merli')
// //console.log(nombre,edad,precio,series,peliculas)
// edad = edad + 1;
// console.log(edad);
// // series = {"series1":"Dark"}
// //console.log(series);

// function fullName(a,b){
//     console.log(a*b)
// }

// fullName(3,10)

// let funcionAnonima = function(n){
//     n = n*4
//     return n
// } 

// let total = 2
// for (i=0;i<5;i++){
//     total = funcionAnonima(total)
//     console.log(total)
    
// }

// !function(a,b){
//     let primerValor = a
//     for(i=0;i<b;i++){
//         primerValor = primerValor + 2
//     }
//     console.log(primerValor)
// }(5,8)

// function ejemploScope(){
//     //inicia scope function
//     let i = 0
//     //  inicia scope for
//     for(j=0;j<10;j++){
//         let k = i + j 
//         i = k + 1
//       //  console.log(`scope for ${j}`, i, k)
//     }
//     // termina scope for
//     //console.log("scope function i",i )
//     console.log("scope function k",k )

//     //termina scope function 
// }

// ejemploScope()




// function modificarNombre(n){
//     let nombre = "Farid"
//     return function(){
//     nombre = `El nuevo nombre es ${nombre}${n}`
//     console.log(nombre)
//     }
// }
// let primerEjemplo = modificarNombre(1)
// primerEjemplo()
// primerEjemplo()

// let segundoEjemplo = modificarNombre(2)
// segundoEjemplo()
const fs = require('fs')

class Persona{
    constructor(nombre,edad){
        this.name = nombre
        this.age = edad
    }

    saludoFormal(){
        console.log(`Hola todos, mi nombre es ${this.name}`)
    }

    nombrarEdad(){
        console.log(`Mi edad es ${this.age}`)
    }
}

const profesor = new Persona("farid sesin", 33)
console.log(profesor)
profesor.saludoFormal()
profesor.nombrarEdad()










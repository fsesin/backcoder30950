//const express = require("express")
// import express from "express"
// const app = express()


const numAlCuadrado =(array) =>{
    array.forEach(element => element * 2);
}

// app.use('/',(req,res)=>{
//     res.json({"respuesta":numAlCuadrado([1,2,3,4])})
// })

const obtenerNumero = () => Math.floor(Math.random()*255)

class Color {
    get(){
        let colorAleatorio = `rgb(${obtenerNumero()},${obtenerNumero()},${obtenerNumero()})`
    }
}
const nuevoColor = new Color()
console.log(nuevoColor)


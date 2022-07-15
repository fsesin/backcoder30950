const http = require('http')
const express = require('express')

const mensaje = () =>{
    const hora = new Date().getHours()
    if(hora>=6 && hora <=12){
        return "Buenos dias!"
    } else if(hora>=13 && hora <=19){
        return "Buenos tardes!"
    } else {
        return "Buenas noches!"
    }

}

// const app = http.createServer((req,res)=>{
//     res.end(mensaje())
// })

const app = express()
const PORT = 8080
app.listen(8080)
console.log(`Servidor Http escuchando en el puerto ${PORT}`)

app.get('/',(req,res)=>{
    res.send('<h1 style="color:blue;">Bienvenidos al servidor express </h1>')
})
let visitas = 0
app.get('/visitas',(req,res)=>{
    res.send(`la cantidad de visitas es ${++visitas}`)
})
app.get('/fyh',(req,res)=>{
    res.send({fyh: new Date().toLocaleString()})
})
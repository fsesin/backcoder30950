const http = require('http')
const express = require('express')
// const servidor = http.createServer((peticion,respuesta)=>{
//     respuesta.end('Hola mundo')
// })
// const PORT=8080
// servidor.listen(PORT)
// console.log(`Servidor HTTP escuchando en el puerto ${PORT}`)


const app = express()
app.get('/',(req,res)=>{
    res.send('Hello World')
})
app.get('/notas',(req,res)=>{
    res.send("hola farid")
})

const PORT=8080
app.listen(PORT)
console.log(`Servidor HTTP escuchando en el puerto ${PORT}`)
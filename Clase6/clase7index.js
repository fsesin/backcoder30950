const express = require('express')
const morgan = require('morgan')
const routes = require('./clase7/routes.js')
const app = express()

//middlewares es una funcion que procesa datos antes que el servidor la reciba


app.use(morgan('dev'))
// le permite al servidor entender formato json
app.use(express.json())
//datos a traves de un formulario
app.use(express.urlencoded({extended:true}))

app.use(routes)

//empezando servidor
const PORT = 8081
const server = app.listen(PORT,()=>{
    console.log(`Servidor escuchando en el puerto ${PORT}`)
})
server.on
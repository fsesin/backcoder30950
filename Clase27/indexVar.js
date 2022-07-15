console.log(process.env)
const express = require('express')
const config = require('./config.js')
require('dotenv').config()
const app = express()


console.log(`Aplicacion en modo ${process.env.MODO}`)
app.listen(process.env.PORT,()=>{
    console.log(`Escuchando al puerto ${process.env.PORT}`)
})
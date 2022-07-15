const express = require('express')
// inicializamos socket.io
const {Server : ioServer} = require('socket.io')
// inicializamos http y creamos un servidor utilizando la configuracion de app
const app = express()
const http = require('http')
const httpServer =  http.createServer(app)
const io = new ioServer(httpServer)
//
const messages = [
    {author:"Juan", text:"!Hola Que tal?"},
    {author:"Pedro", text:"!Muy bien Y vos?"},
    {author:"Ana", text:"!Genial"}
]
//middleware
app.use(express.static(__dirname+'/public'))
const mensajes = []
//levantado servidor io
io.on('connection',(socket)=>{
    console.log('cliente conectado',socket.id)

   // socket.on('messages', dato =>{
        //mensajes.push(dato)
     //   console.log(dato)
    //socket.emit('messages',messages)
    // io.sockets.emit('mensajesServidor',mensajes)
   // })
   socket.on('newMessage',message=>{
       messages.push(message)
       io.sockets.emit('messages',messages)
   })

    // socket.emit('bienvenido cliente')

    // socket.on('gracias servidor',()=>{
    //     console.log('cliente saludando')
    // })
})

// levantando servidor
const PORT = 8080
httpServer.listen(PORT,()=>{
    console.log(`server on port ${PORT}`)
})












const express = require('express')
const {Server : ioServer} =require('socket.io')
const http = require('http')
const app = express()


const httpServer = http.createServer(app)
const io = new ioServer(httpServer)

//middleware
app.use(express.static(__dirname +'/public'))

const messages = [
    {author:"Juan", text:"Hola Que tal?"},
    {author:"Pedro", text:"Bien"},
    {author:"Ana", text:"Genial"}
]


// NUEVO SERVIDOR
io.on('connection',(socket)=>{
    console.log('nuevo cliente conectado',socket.id)
    socket.emit('messages',messages)

    socket.on("newMessage",message=>{
        messages.push(message)
        io.sockets.emit('messages',messages)
    })

})







const PORT = 8080
httpServer.listen(PORT,()=>{
    console.log(`Server on port ${PORT}`)
})

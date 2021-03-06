const socket = io()


const divMessages = document.querySelector("#messages")
const button = document.querySelector("#button")


button.addEventListener("click",(event)=>{
    const inputNombre = document.querySelector("#nombre").value
    const inputTexto = document.querySelector("#texto").value
    const message = {
        author: inputNombre,
        text: inputTexto
    }
    socket.emit("newMessage",message)
})


socket.on('messages',(messages)=>{
    divMessages.innerHTML =  messages.map(message=>{
        return(
            `<div>
            <strong>${message.author}</strong>:
            <em>${message.text}</em>
            </div>`
        )
    }).join(" ")

})


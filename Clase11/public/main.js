const socket = io();

// const input = document.querySelector("#input")
// const p = document.querySelector("#p")

// socket.on('bienvenido cliente',()=>{
//     console.log('servidor saludando')

//     socket.emit('gracias servidor')
// })
const div = document.querySelector("#messages");
socket.on("messages", (mensajes) => {
  div.innerHTML =
    mensajes
      .map((mensaje) => {
        return `<div>
            <strong>${mensaje.author}</strong>:
            <em>${mensaje.text}</em>
            </div>`;
      })
      .join(" ")
  
})
const button = document.querySelector("#button");
button.addEventListener("click", (event) => {
    const inputAuthor = document.querySelector("#username").value;
    const inputText = document.querySelector("#texto").value;
    const message = {
      author: inputAuthor,
      text: inputText,
    };
    socket.emit("newMessage", message);
    });

// socket.on('mensajesServidor',function(mensajes){
//     p.innerHTML = mensajes.map(mensaje=>`Mensaje:${mensaje}`).join('<br>')
// })

// function addMessage(e){
//     const inputAuthor = document.querySelector("#username")
//     const inputText = document.querySelector("#texto")
//     const message = {
//         author:inputAuthor,
//         text:inputText
//     }
//     socket.emit('newMessage',message)
// }

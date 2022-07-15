//console.log(process)

// process.on('exit',function(){
//     console.log('Saliendo del proceso')

// })
// process.on('beforeExit',function(){
//     console.log(suma(17,8))
// })
// function suma(a,b){
//     return a+b
// }

// console.log(suma(5,7))
// //process.exit()
// console.log(suma(12,4))

const {exec, execFile, fork} = require('child_process')
// const { stdout, stderr } = require('process')

// exec('ls -lh',(error,stdout,stderr)=>{
//     if(error){
//         console.log(error)
//     }
//     if(stderr){
//         console.log(stderr)
//     }
//     if(stdout){
//         console.log(stdout)
//     }
// })

// execFile
const respuesta = fork('./server.js')

respuesta.on('message',(message)=>{
    console.log(message)
})

function multiplicar(a,b){
    return a*b
}
console.log(multiplicar(5,7))
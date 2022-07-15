
const minimist = require('minimist')
//const argumentos = minimist(process.argv)
//console.log(argumentos.nombre)
//const options = {alias:{nombre:'name'}}
//const options = {default:{apellido:'rueda'}}
//const argumentos = minimist(process.argv,options)
//console.log(argumentos)

//DESAFIO 1
const options = {alias:{m:'modo',p:'puerto',d:'debug'},default:{m:'prod',p:'0',d:false}}
const argumentos = minimist(process.argv,options)
console.log(argumentos)
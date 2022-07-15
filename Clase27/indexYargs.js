const yargs = require('yargs')
// console.log(yargs.alias({nombre:'name'})
//                  .default({edad:33})
//                  .boolean('casado')
//                  .argv)

//DESAFIO 2
console.log(yargs.alias({m:'modo',p:'puerto',d:'debug'})
                 .default({m:'prod',p:0,d:'false'})
                 .boolean('d')
                 .argv)



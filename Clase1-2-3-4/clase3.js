// let funcion1 = function(params){
//     console.log (`estos son los parametros ${params}`)
// }
// funcion1("numeros")
// //console.log(funcion1("numeros"))

// let funcion2 = (param) => {
//     return (`estos son los parametros ${param}`)
// }

// let funcionSuma = (a,b) => (a+b)
// console.log(funcionSuma(2,3))

// let operacion = (a,b,funcionCB )=>{

//     const resultado = funcionCB(a,b)
//     return (resultado)
// } 
// let funcionSuma = (a,b) => a+b 
// let funcionResta = (a,b) =>a-b
// let funcionMultiplicacion = (a,b) => a*b 
// let funcionDivision = (a,b) =>a/b


function funcionServidor(consulta,funcionCB){
    setInterval(function(){
        const respuesta = `${consulta} esta llena!`
        funcionCB(respuesta)
    },2000)
}

function obtenerResultados(resultados){
    console.log(`Respuesta del servidor ${resultados}`)
}

funcionServidor("La base de datos",obtenerResultados)
// console.log(operacion(2,3,funcionSuma))
// console.log(operacion(2,3,funcionResta))
// console.log(operacion(2,3,funcionMultiplicacion))
// console.log(operacion(2,3,funcionDivision))

//Ejemplo de base de datos
// Tablas => Usuario, Familiares
// Aguegar un familiar a un usuario 
// req:{nombre, familiarNuevo}


// function peticion(req,res){
//     Usuario.findbyName(req.nombre, function(err,usuario){
//         if(err){
//             res.send(err)
//         } else {
//             Familiares.findAllbyLastName(usuario.apellido, function(err,familiares){
//                 if(err){
//                     res.send(err)
//                 } else {
//                     if(familiares.includes(req.familiarNuevo)){
//                         res.send("este familiar ya existe")
//                     } else {
//                         familiares.create(req.familiarNuevo, function(err){
//                             if(err){
//                                 res.send(err)
//                             } else {
//                                 res.send("familiar creado con exito")
//                             }
//                         })
//                     }
//                 }
//             })

//         }
//     })
// }

// PROMESAS

// function peticion(req,res){
//     Usuario.findbyName(req.nombre)
//     .then(usuario=>{
//         return Familiares.findAllbyLastName(usuario.apellido)
//     })
//     .then(familiares=>{
//         if(familiares.includes(req.familiarNuevo)){
//             res.send("este familiar ya existe")  
//         } else {
//             return familiares.create(req.familiarNuevo)
//         }
//     })
//     .then(()=> res.send("familiar creado con exito"))
//     .catch(err=>{
//         res.send(err)
//     })
// }


Promise.resolve(20)
.then(resultado=>resultado+1)
.then(res=>res*2)
.then(x =>{
    if(x==22) throw 'Error'
    else return 80
})
.then(x=>30)
.then(x=>x/2)
.then(console.log)
.catch(console.log)

Promise.resolve(10)
.then(resultado=>{
        console.log("entro aqui")
    return resultado+1
})
.then(res=>res*2)
.then(x =>{
    console.log("entro aqui2")
    if(x==22) throw 'Error'
    else return 80
})
.then(x=>{
    console.log("entro aqui3")
    return 30
})
.then(x=>x/2)
.then(console.log)
.catch(console.log)


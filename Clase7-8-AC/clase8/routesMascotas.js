const {Router} = require('express')
const router = Router()

const mascotas = []

// const verificarEdad = function(req,res,next){
//   const error = "Edad superior a la permitida"
//     if(req.body.edad>5){
//       next(error)
//     }
//     next()
//   }

// const errorMiddleware = function(err,req,res,next){
//   if(err){
//     return res.status(500).json({error:err})
//   }
//   next()
// }

router.get('/',(req,res)=>{
    res.render('mostrar-mascotas',{
        mascotas
    })
})

router.post('/',(req,res)=>{
    const mascota = req.body
    mascotas.push(mascota)
    
    res.json({mensaje:"Mascota agregada con exito"})
})

module.exports = router
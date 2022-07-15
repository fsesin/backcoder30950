const {Router} = require('express')
const router = Router()

const personas = []

router.get('/',(req,res)=>{
res.json({personas:personas})
})

router.post('/',(req,res)=>{
    const persona = req.body
    personas.push(persona)
    res.json({mensaje:"Persona agregada con exito"})
})

module.exports = router
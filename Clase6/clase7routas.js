const {Router} = require('express')
const router = Router()
const frase = "Hola mundo como estan"

//rutas 
router.get('/api/frase',(req,res)=>{
    res.send(frase)
})

router.get('/api/letras/:num',(req,res)=>{
    
const {num} = req.params
if(isNaN(num)){
    return res.send({error:"El parametro no es un numero"})
}
if(num<1 || num>frase.length){
    return res.send({error:"El parametro esta fuera de rango"})
}
res.send(frase[num-1])
})

router.get('/api/palabras/:num',(req,res)=>{
    const {num} = req.params
    if (isNaN(num)) {
        return res.send({ error: 'El parámetro ingresado no es un número' })
    }

    const palabras = frase.split(' ')
    if (num < 1 || num > palabras.length) {
        return res.send({ error: 'El parámetro está fuera de rango' })
    }

    res.send(palabras[num - 1])
})

module.exports = router
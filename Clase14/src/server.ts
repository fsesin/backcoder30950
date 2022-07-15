import express from 'express';
import Perimetro from './perimetro';
import Area from './area'

const perimetro: Perimetro = new Perimetro()
const area: Area = new Area()

const app = express()

app.get('/perimetro/:figura/:valor1/:valor2?',(req,res)=>{
const {figura,valor1,valor2} = req.params
let result = 0
   switch(figura){
    case('cuadrado'):
    result = perimetro.cuadrado(+valor1)
    break
    case('rectangulo'):
    result = perimetro.rectangulo(+valor1,Number(valor2))
    break
    case('circulo'):
    result = perimetro.circulo(+valor1)
    break
   }

res.json({
    tipo:"perimetro",
    figura,
    valor1,
    valor2,
    result
})


})

app.get('/area/:figura/:valor1/:valor2?',(req,res)=>{
    const {figura,valor1,valor2} = req.params
    let result
       switch(figura){
        case('cuadrado'):
        result = area.cuadrado(+valor1)
        break
        case('rectangulo'):
        result = area.rectangulo(+valor1,Number(valor2))
        break
        case('circulo'):
        result = area.circulo(+valor1)
        break
       }
    
    res.json({
        tipo:"area",
        figura,
        valor1,
        valor2,
        result
    })

    
})


const PORT=3000
app.listen(PORT,()=>{
    console.log(`Conectando al puerto ${PORT}`)
})
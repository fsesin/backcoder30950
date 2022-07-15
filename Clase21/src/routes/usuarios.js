import { Router } from "express";
import usuariosApi from "../daos/usuariosApi.js";
const router = Router()
const api = new usuariosApi()



router.post('/popular',(req,res)=>{
    const {cant} = req.query
    let max = cant || 50
    let usuarios = api.ingresar(max)
    res.json(usuarios)
})

router.get('/',(req,res)=>{
     const todos = api.mostrarTodos()
     res.json(todos)
})



router.get('/:id',(req,res)=>{
    const {id} = req.params 
})

router.post('/',(req,res)=>{
    let usuarios = api.ingresar(1)
    res.json(usuarios)


})

router.put('/:id',(req,res)=>{
    const {id} = req.params

    
})

router.delete('/:id',(req,res)=>{
    const {id} = req.params

    
})



export default router
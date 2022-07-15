import {Router} from 'express'
import Api from '../apiClass'
const router = Router()
const api = new Api("/dataBase/pokemons.json")

const isAdmin = false

function adminOrClient(req,res,next){
    if(!isAdmin){
        res.send("No tienes acceso a esta ruta")
    } else {
        next()
    }
}


router.get('/', async (req,res)=>{
const pokemons = await api.findAll()
res.json(pokemons)
})

router.get('/:id', async (req,res)=>{
    const {id} = req.params
    const pokemon = await api.findById(id)
    res.json(pokemon)
})

router.post('/',adminOrClient, async (req,res)=>{
    const obj = req.body
    const pokemon = await api.create(obj)
    res.json(pokemon)
})






export default router
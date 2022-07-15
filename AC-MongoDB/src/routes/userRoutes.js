import { Router } from "express";
import {usersDao as api} from "../daos/index.js";
 const router = new Router()

router.get('/',async (req,res)=>{
    try {
        const allUsers = await api.getAll()
        res.json(allUsers)
    } catch (error) {
        console.log(error)
    }
})

router.post('/',async (req,res)=>{
    try {

        const createUser = await api.create(req.body)
        res.json(createUser)
    } catch (error) {
        console.log(error)
    }
})

router.delete('/:id',async(req,res)=>{
    const {id} = req.params
    const deleteUser = await api.deleteById(id)
    res.json(deleteUser)
})



 export default router


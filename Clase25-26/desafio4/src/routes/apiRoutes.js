import { Router } from "express";
import passport from 'passport'
import { generarToken, auth } from "../jwt/jwt.js";
import Usuarios from '../models/usuarios.js'

const router = Router()


router.get('/registro',(req,res)=>{
    res.render('registro')
})

router.post('/registro',async(req,res)=>{
    const {nombre, email,password} = req.body
    const usuarioBD = await Usuarios.findOne({nombre:nombre})
    if(usuarioBD){return res.render('errorRegistro')}
    const usuario = new Usuarios()
    usuario.nombre = nombre
    usuario.contrasena = password
    await usuario.save()

    const tokenAcceso = generarToken(usuario)
    res.redirect('/datos')
})
router.get('/errorRegistro',(req,res)=>{
    res.render('errorRegistro')
})

router.post('/login',async(req,res)=>{
    const {nombre,password} = req.body
    const usuarioBD = await Usuarios.findOne({nombre:nombre})
    if(!usuarioBD || (usuarioBD && usuarioBD.contrasena !== password)){return res.render('errorLogin')}
    const usuario = {}
    usuario.nombre = nombre
    usuario.contrasena = password

    const tokenAcceso = generarToken(usuario)
    res.redirect('/datos')
})

router.get('/errorLogin',(req,res)=>{
    res.render('errorLogin')
})
router.get('/datos',auth,(req,res)=>{
    res.render('info',{nombre:req.user.nombre})
})

router.get('/logout',(req,res)=>{
    req.session.destroy(err=>{
        res.redirect('/')
    })
})

router.get('/',(req,res)=>{
    res.render('login')
})


export default router
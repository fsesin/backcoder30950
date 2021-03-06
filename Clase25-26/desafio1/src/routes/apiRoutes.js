import { Router } from "express";
const usuarios = []

const router = Router()

router.get('/registro',(req,res)=>{
    res.render('registro')
})

router.post('/registro',(req,res)=>{
    if(usuarios.some(usuario=>usuario.nombre===req.body.nombre)){
        return res.render('errorRegistro')
    }
    usuarios.push(req.body)
    res.render('login')
})

router.post('/login',(req,res)=>{
    const {nombre,password} = req.body
    const usuario  = usuarios.find(usuario=>usuario.nombre===nombre)
    if(usuario && usuario.password===password){
        for (const key in req.body) {
            req.session[key] = req.body[key]  
        }
        res.redirect('/datos')
    } else {
        res.render('errorLogin')
    }
})

router.get('/datos',(req,res)=>{
    if(req.session.nombre){
        res.render('info',{nombre:req.session.nombre})
    }
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
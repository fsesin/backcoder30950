import { Router } from "express";

const router = Router()

router.get('/',(req,res)=>{
    res.render('cookies')
})

router.post('/info',(req,res)=>{
    console.log(req.body)
    //for (const key in req.body) {
        res.cookie('nombre',req.body.nombre,{signed:true})
        res.cookie('apellido',req.body.apellido)
    //}
    res.send('Informacion enviada con exito')
})

router.get('/ver',(req,res)=>{
    res.send({'firmadas':req.signedCookies,'noFirmadas':req.cookies})
})



export default router
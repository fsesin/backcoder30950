import { Router } from "express";

const router = Router()

router.get('/',(req,res)=>{
    res.render('session')
})

router.post('/session',(req,res)=>{
    for (const key in req.body) {
      req.session[key] = req.body[key]
    }
res.send({"Session------":req.session})

})
export default router
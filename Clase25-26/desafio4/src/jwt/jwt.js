import jwt from 'jsonwebtoken'
const PRIVATE_KEY = 'mykey'

export function generarToken(usuario){
    const token = jwt.sign({data:usuario},PRIVATE_KEY,
        {expiresIn:'2h'})
        return token
}

export function auth(req,res,next){
   const authHeader =  req.header['authorization'] || req.header['Authorization']

   if(!authHeader){
    return res.render('login')
   }
   const token = authHeader.split(' ')[1]
   if(!token){
    return res.render('login')
   }

   try {
    req.user = jwt.verify(token,PRIVATE_KEY)
   } catch (error) {
        return res.render('login')
   }
   next()
}
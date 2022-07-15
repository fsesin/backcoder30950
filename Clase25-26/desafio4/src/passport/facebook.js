import passport from "passport";
import { Strategy } from "passport-facebook";
import Usuarios from '../models/usuarios.js'

const FacebookStrategy = Strategy

passport.use(new FacebookStrategy(
    {
        clientID:'3176049215996081',
        clientSecret:'ffefebc771a9bd1b1ede922788d136fa',
        callbackURL:'http://localhost:8080/auth/facebook'
    },
    async function(accessToken, refreshToken, profile, done){
        const usuarioBD =  await Usuarios.findOne({facebookId:profile.id})
        if(usuarioBD){
            return done(null,usuarioBD)
        }
        const usuario = new Usuarios()
        usuario.nombre = profile.displayName
        usuario.facebookId = profile.id
        await usuario.save()
        done(null,usuario)
    }
))

passport.serializeUser((usuario,done)=>{
    done(null,usuario.id)
})

passport.deserializeUser(async(id,done)=>{
    const usuario = await Usuarios.findById(id)
    done(null,usuario)
})
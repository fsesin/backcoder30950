import express  from "express";
import session from "express-session";
import apiRoutes from "./src/routes/apiRoutes.js"
import MongoStore from "connect-mongo";
import './src/db/database.js'
import './src/passport/facebook.js'
import passport from "passport";
const app = express()


app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.set('views','./src/views')
app.set('view engine','ejs')

app.use(session({
    saveUninitialized:false,
    resave:false,
    secret:'secretKey',
    store:MongoStore.create({mongoUrl:'mongodb+srv://coderhouse:coderhouse@cluster0.9hfsr3u.mongodb.net/sessionMongoAtlas?retryWrites=true&w=majority'})
}))
app.use(passport.initialize())
app.use(passport.session())
app.use('/',apiRoutes)


const PORT = 8080
app.listen(PORT,()=>{
    console.log(`Escuchando al puerto ${PORT}`)
})
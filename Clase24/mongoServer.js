import express from 'express'
import sessionRoutes from './routes/session.js'
import session from 'express-session'
import MongoStore from 'connect-mongo'

const app = express()
app.set('views','./views')
app.set('view engine','ejs')
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(session({
    saveUninitialized:true,
    resave:true,
    secret:'secret',
    store: MongoStore.create({mongoUrl:'mongodb+srv://coderhouse:coderhouse@cluster0.9hfsr3u.mongodb.net/?retryWrites=true&w=majority'}),
    cookie:{maxAge:30000}
    
}))
app.use('/',sessionRoutes)


const PORT = 8080


app.listen(PORT,()=>{
    console.log(`Escuchando el puerto ${PORT}`)
})
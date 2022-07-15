import express from 'express'
import sessionRoutes from './routes/session.js'
import session from 'express-session'
import sessionFileStore  from 'session-file-store'
const fileStore = sessionFileStore(session)

const app = express()
app.set('views','./views')
app.set('view engine','ejs')
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(session({
    saveUninitialized:true,
    resave:true,
    secret:'secret',
    store: new fileStore({path:'./sesiones', ttl:30}),
    cookie:{maxAge:30000}
    
}))
app.use('/',sessionRoutes)


const PORT = 8080


app.listen(PORT,()=>{
    console.log(`Escuchando el puerto ${PORT}`)
})
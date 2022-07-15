import express  from "express";
import session from "express-session";
import sessionFileStore  from "session-file-store";
import apiRoutes from "./src/routes/apiRoutes.js"
const app = express()
const fileStore = sessionFileStore(session)

app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.set('views','./src/views')
app.set('view engine','ejs')

app.use(session({
    saveUninitialized:false,
    resave:false,
    secret:'secretKey',
    store: new fileStore({path:'./src/sesiones',ttl:60})
}))
app.use('/',apiRoutes)


const PORT = 8081
app.listen(PORT,()=>{
    console.log(`Escuchando al puerto ${PORT}`)
})
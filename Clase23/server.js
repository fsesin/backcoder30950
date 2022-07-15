import express  from "express";
import cookieParser from "cookie-parser";
import cookiesRoutes from "./src/routes/cookies.js"
import desafio1Routes from "./src/routes/desafio1.js"
const app = express()

app.set('views','./src/views')
app.set('view engine','ejs')



app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser('signed'))
app.use('/',cookiesRoutes)
app.use('/cookies',desafio1Routes)

const PORT = 8080
app.listen(PORT,()=>{
    console.log(`Eschuchando al puerto ${PORT}`)
})



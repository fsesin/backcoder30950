import express from 'express'
import morgan from 'morgan'
import pokemonsRoutes from './routes/pokemons'
import maestrosRoutes from './routes/maestros'
const app = express()

app.use(express.json())
app.use(morgan('dev'))

app.use('/pokemons',pokemonsRoutes)
app.use('/maestros',maestrosRoutes)

//Servidor inicializado
const PORT =8080
app.listen(PORT,()=>{
    console.log(`Escuchando en el puerto ${PORT}`)
})